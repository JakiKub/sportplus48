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
const fetch = require("node-fetch");
const cloudinary = require("cloudinary").v2;

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

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
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
  pointsNow: { type: Number, default: 4.800 },
  pointsAll: { type: Number, default: 4.800 },
  streak: { type: Number, default: 0 },
  streakLast: { type: String, default: null }
})

const collection = new mongoose.model("users", logInSchema);

const activSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  activity: { type: String, required: true },
  distance: { type: Number, required: true },
  timeInMins: { type: Number, required: true },
  status: { type: String, enum: ["pending", "approved", "denied"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
  points: { type: Number, default: 4.800 },
})

const Activity = mongoose.models.Activity || mongoose.model("Activity", activSchema);

const requireLogin = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).send("must be logged in");
  }
  next();
}

const pointsCalc = (activity, distance, timeInMins) => {
  let points = 0;

  switch (activity) {
    case "running":
      points = distance * 2;
      break;

    case "nordic-walking":
      points = distance * 1;
      break;
    
    case "cycling":
      points = distance * 0.5;
      break;

    case "roller-skating":
      points = distance * 1.5;
      break;
    
    case "scooter":
      points = distance * 1;
      break;

    case "swimming":
      points = distance * 5;
      break;

    case "kayaking":
      points = distance * 2.5;
      break;
    
    case "rowing":
      points = distance * 2.5;
      break;

    case "crosscountry-skiing":
      points = distance * 2.5;
      break;

    case "skateboarding":
      points = distance * 1.5;
      break;

    case "calisthenics":
      points = timeInMins * (6 / 60);
      break;

    case "gym":
      points = timeInMins * (6 / 60);
      break;

    case "fitness":
      points = timeInMins * (8 / 60);
      break;

    case "crossfit":
      points = timeInMins * (8 / 60);
      break;

    case "aerobics":
      points = timeInMins * (7 / 60);
      break;

    case "zumba":
      points = timeInMins * (7 / 60);
      break;

    case "yoga":
      points = timeInMins * (4 / 60);
      break;

    case "stretching":
      points = timeInMins * (4 / 60);
      break;

    case "dancing":
      points = timeInMins * (6 / 60);
      break;

    case "martial-arts":
      points = timeInMins * (8 / 60);
      break;

    case "sport-gymnastics":
      points = timeInMins * (7 / 60);
      break;

    case "football":
      points = timeInMins * (6 / 60);
      break;

    case "basketball":
      points = timeInMins * (6 / 60);
      break;

    case "volleyball":
      points = timeInMins * (5.5 / 60);
      break;

    case "handball":
      points = timeInMins * (6 / 60);
      break;

    case "hockey":
      points = timeInMins * (6.5 / 60);
      break;

    case "ice-hockey":
      points = timeInMins * (6.5 / 60);
      break;

    case "rugby":
      points = timeInMins * (6.5 / 60);
      break;

    case "floorball":
      points = timeInMins * (6 / 60);
      break;

    case "tennis":
      points = timeInMins * (6.25 / 60);
      break;

    case "squash":
      points = timeInMins * (6.25 / 60);
      break;

    case "paddle-tennis":
      points = timeInMins * (6.25 / 60);
      break;

    case "badminton":
      points = timeInMins * (6.25 / 60);
      break;

    case "climbing":
      points = timeInMins * (6.5 / 60);
      break;

    case "rope-jumping":
      points = timeInMins * (6 / 60);
      break;

    case "ice-skating":
      points = timeInMins * (6 / 60);
      break;

    case "parkour":
      points = timeInMins * (6.25 / 60);
      break;

    case "freerun":
      points = timeInMins * (6.25 / 60);
      break;

    default:
      points = 0;
  }

  return Number(points.toFixed(3))
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

  const parsedDist = parseFloat(distance) || 0;
  const parsedTime = parseFloat(timeInMins, 10) || 0;

  const points = pointsCalc(activity, parsedDist, parsedTime);

  const newActiv = await Activity.create({
    userId: req.session.userId,
    activity,
    distance: parsedDist,
    timeInMins: parsedTime,
    status: "pending",
    points,
  });

  const baseUrl = process.env.BASE_URL || `http://localhost:${PORT}`
  const approveLink = `${baseUrl}/api/approve/${newActiv._id}`;
  const denyLink = `${baseUrl}/api/deny/${newActiv._id}`;

  let uploadedFileUrl = null;

  if (req.file) {
    try {
      const result = await cloudinary.uploader.upload_stream(
        { folder: "activities" },
        async (error, result) => {
          if (error) {
            console.error("blad przy uploadzie", error);
          } else {
            uploadedFileUrl = result.secure_url;
          }
        }
      );

      result.end(req.file.buffer);
    } catch (err) {
      console.error("cloudinary ma wylew", err);
    }
  }

  let mailOpts = {
    from: "ActivityTracker <noreply@resend.dev>",
    to: process.env.SMTP_USER,
    subject: "nowa aktywnosc",
    html: `
      <p><b>${activity}</b> - ${distance}km, ${time}</p>
      ${uploadedFileUrl ? `<p><a href="${uploadedFileUrl}">zdjecie pod linkienm do cloudinary</a></p>` : ""}
      <a href="${approveLink}">accpet</a> | 
      <a href="${denyLink}">deyn</a>
    `
  };

  // if (req.file) {
  //   mailOpts.attachments = [
  //     {
  //       filename: req.file.originalname,
  //       content: req.file.buffer,
  //     },
  //   ];
  // }

  //await transporter.sendMail(mailOpts);

  await fetch("https://api.resend.com/emails", {
    method: POST,
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(mailOpts)
  })

  res.send("tera czekaj sb");
});

app.get("/api/approve/:id", async (req, res) => {
  try {
    const activity = await Activity.findByIdAndUpdate(req.params.id, { status: "approved" });

    await collection.findByIdAndUpdate(
      activity.userId,
      {
        $inc: {
          pointsNow: activity.points,
          pointsAll: activity.points,
        }
      }
    );

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

app.get("/api/user/points", requireLogin, async(req, res) => {
  try {
    const user = await collection.findById(req.session.userId, "pointsNow pointsAll");

    if (!user) {
      return res.status(404).json({ error: "znajdz user to ci wyswietle" });
    }

    res.json({
      pointsNow: user.pointsNow,
      pointsAll: user.pointsAll
    })
  } catch (err) {
    console.log(err);
  }
})

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
});

app.get('/api/ranking', async (req, res) => {
  try {
    const mostPoints = await collection.find({}, { username: 1, nationality: 1, pointsAll: 1, _id: 0 }).sort({ pointsAll: -1 }).limit(48);

    res.json({ mostPoints });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "some error that i dont even know" });
  }
});

app.get("/api/streak", async (req, res) => {
  try {
    const userId = req.session.userId;
    const user = await collection.findById(userId);

    if (!user) return res.status(404).json({ error: "usernotfound" });

    res.json({
      streak: user.streak,
      lastClick: user.streakLast
    });
  } catch (err) {
    console.log(err);
  }
})

app.post("/api/streak/click", async (req, res) => {
  try {
    const userId = req.session.userId;
    const user = await collection.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    const getDate = (d = new Date()) => {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    }

    const today = getDate();
    const yesterday = getDate(new Date(Date.now() - 86400000));

    if (user.streakLast === today) {
      return res.status(400).json({ error: "already_clicked", streak: user.streak });
    }

    if (user.streakLast === yesterday) {
      user.streak++;
    } else {
      user.streak = 1;
    }

    user.streakLast = today;
    await user.save();

    res.json({
      streak: user.streak,
      lastClick: today
    })
  } catch (err) {
    console.log(err);
  }
})