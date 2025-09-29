//cholera wie jak to dziala

require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const multer = require('multer');
const session = require('express-session');
const mongoStore = require('connect-mongo');
const connect = mongoose.connect(process.env.MONGO_URI);
const upload = multer({ storage: multer.memoryStorage() });

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/content', express.static(path.join(__dirname, 'content')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: mongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
}))

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`serwer dziala na porcie ${PORT}`);
});

try {
  connect.then(async () => {
    console.log("udalo sie podlaczyc db");
    await collection.createIndexes([
      { key: { email: 1 }, unique: true },
      { key: { username: 1 }, unique: true }
    ]);
  });
} catch (error) {
    console.log(`nie udalo sie podlaczyc db, ${error}`)
}

const logInSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  nationality: { type: String, },
  resetToken: String,
  resetTokenExpiry: Date,
})

const collection = new mongoose.model("users", logInSchema);

const activSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  activity: { type: String, required: true },
  distance: { type: Number, required: true },
  timeInMins: { type: Number, required: true },
  status: { type: String, enum: ["pending", "approved", "denied"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
  points: { type: Number, default: 0 },
})

const Activity = mongoose.models.Activity || mongoose.model("Activity", activSchema);

const requireLogin = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).send("must be logged in");
  }
  next();
}

app.get("/api/activity", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;

  const activities = await Activity.find({ userId: req.session.userId }).sort({ createdAt: -1 }).skip(skip).limit(limit);

  res.json({ activities });
})

app.post("/api/activity", requireLogin, upload.single("evidence"), async (req, res) => {
  const { activity, distance, time, userId } = req.body;

  const [hours, minutes] = time.split(":").map(Number);
  const timeInMins = hours * 60 + minutes;

  const newActiv = await Activity.create({
    userId: req.session.userId,
    activity,
    distance: parseFloat(distance),
    timeInMins,
    status: "pending",
  });

  const approveLink = `http://localhost:${PORT}/api/approve/${newActiv._id}`;
  const denyLink = `http://localhost:${PORT}/api/deny/${newActiv._id}`;

  let mailOpts = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: "nowa aktywnosc",
    html: `
      <p><b>${activity}</b> - ${distance}km, ${time}</p>
      <a href="${approveLink}">accpet</a> | 
      <a href="${denyLink}">deyn</a>
    `
  };

  if (req.file) {
    mailOpts.attachments = [
      {
        filename: req.file.originalname,
        content: req.file.buffer,
      },
    ];
  }

  await transporter.sendMail(mailOpts);

  res.send("tera czekaj sb");
});

app.get("/api/approve/:id", async (req, res) => {
  try {
    await Activity.findByIdAndUpdate(req.params.id, { status: "approved" });
    res.send("aktywnosc zaakceptowana");
  } catch (err) {
    console.error(err);
    res.status(500).send("blad przy akceptacji aktywnosci");
  }
});

app.get("/api/deny/:id", async (req, res) => {
  try {
    await Activity.findByIdAndUpdate(req.params.id, { status: "denied" });
    res.send("aktywnosc odrzucona");
  } catch (err) {
    console.error(err);
    res.status(500).send("blad przy odrzucaniu aktywnosci");
  }
});

app.post('/register', async (req, res) => {
  //console.log("req.body:", req.body);
  
  const data = {
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    nationality: req.body.nationality,
  }

  data.email = data.email.trim().toLowerCase();
  data.username = data.username.trim();

  const existingUser = await collection.findOne({ username: data.username });
  const existingEmail = await collection.findOne({ email: data.email });

  if (existingUser || existingEmail) {
    res.send("Użytkownik już istnieje");
  } else {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    data.password = hashedPassword;

    const userdata = await collection.create(data);
    console.log(userdata);
    res.redirect('/');
  }
})

app.post("/login", async (req, res) => {
  try {
    const user = await collection.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send("nie ma takiego uzytkownika");
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).send("zel haslo");
    }

    req.session.userId = user._id;

    res.status(200).json({
      username: user.username,
      email: user.email,
      nationality: user.nationality
    });
  } catch (err) {
    res.status(500).send("blad logowania");
  }
});

app.post("/forgot-password", async (req, res) => {
  const email = req.body.email?.trim().toLowerCase();
  const user = await collection.findOne({ email });

  if (!user) {
    return res.status(400).send("nie znaleziono uzytkownika");
  }

  const token = crypto.randomBytes(32).toString('hex');
  const expiry = Date.now() + 3600000;

  user.resetToken = token;
  user.resetTokenExpiry = expiry;
  await user.save();

  const resetLink = `http://localhost:${PORT}/reset-password/${token}`;

  await transporter.sendMail({
    from: `"Reset Hasła" <${process.env.SMTP_USER}>`,
    to: user.email,
    subject: "Reset hasla - Twoja aplikacja",
    text: `kliknij w ponizszy link, aby zresetować swoje hasło:\n\n${resetLink}`,
    html: `<p>kliknij w link ponizej, aby zresetować haslo:</p>
          <a href="${resetLink}">${resetLink}</a>`
  });

  res.send("link do resetu hasla zostal wyslany na email");
});

app.get('/reset-password/:token', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'reset-password.html'));
});

app.post('/reset-password/:token', async (req, res) => {
  const token = req.params.token;
  const password = req.body.password;

  try {
    const user = await collection.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).send("token nieprawidlowy lub wygasl");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.send("haslo zostalo zresetowane");
  } catch (err) {
    console.error(err);
    res.status(500).send("blad ale nwm jaki");
  }
});

app.get('/api/records', async (req, res) => {
  try {
    const userId = req.session.userId;
    
    if (!userId) {
      return res.status(401).json({ error: "未登入" });
    }

    const longestDistance = await Activity.findOne({ userId, status: "approved" }).sort({ distance: -1 }).select("distance");

    const mostCommon = await Activity.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId), status: "approved" } },
      { $group: { _id: "$activity", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]);

    const longestActiv = await Activity.findOne({ userId, status: "approved" }).sort({ timeInMins: -1 }).select("timeInMins");

    const totalActivs = await Activity.countDocuments({ userId, status: "approved" });

    res.json({
      longestDistance: longestDistance ? longestDistance.distance : 0,
      mostCommon: mostCommon.length > 0 ? {
        activity: mostCommon[0]._id,
        count: mostCommon[0].count,
      } : { activity: "-", count: 0 },
      longestActiv: longestActiv ? longestActiv.timeInMins : 0,
      totalActivs
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "some error that i dont even know" });
  }
})