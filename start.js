require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const connect = mongoose.connect(process.env.MONGO_URI)

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/content', express.static(path.join(__dirname, 'content')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
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
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
  },
  resetToken: String,
  resetTokenExpiry: Date,
})

const collection = new mongoose.model("users", logInSchema);

app.post('/register', async (req, res) => {
  console.log("req.body:", req.body);
  
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

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`serwer dziala na porcie ${PORT}`);
});