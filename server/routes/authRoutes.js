const express = require("express");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const User = require("../models/user");
const transporter = require("../utils/mailer");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password, username, nationality } = req.body;
  if (await User.findOne({ email })) return res.send("user exists");

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashed, username, nationality });

  res.send("registered");
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("no user");

  const ok = await bcrypt.compare(req.body.password, user.password);
  if (!ok) return res.status(400).send("wrong password");

  req.session.userId = user._id;
  res.json({ username: user.username });
});

router.post("/logout", (req, res) => {
  req.session.destroy(() => res.sendStatus(200));
});

router.get("/check-session", (req, res) => {
  res.json({ isLogged: !!req.session.userId });
});

router.post("/forgot-password", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.send("no user");

  user.resetToken = crypto.randomBytes(32).toString("hex");
  user.resetTokenExpiry = Date.now() + 3600000;
  await user.save();

  res.send("mail sent");
});

router.get("/reset-password/:token", (req, res) => {
  res.send("reset form");
});

router.post("/reset-password/:token", async (req, res) => {
  const user = await User.findOne({
    resetToken: req.params.token,
    resetTokenExpiry: { $gt: Date.now() }
  });

  if (!user) return res.send("invalid token");

  user.password = await bcrypt.hash(req.body.password, 10);
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;
  await user.save();

  res.send("password reset");
});

module.exports = router;