const express = require("express");
const User = require("../models/user");
const requireLogin = require("../middleware/requireLogin");

const router = express.Router();

const resetStreak = (user) => {
  if (!user.streakLast) return;

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  if (user.streakLast !== today && user.streakLast !== yesterday) {
    user.streak = 0;
    user.streakLast = null;
  }
};

router.get("/streak", requireLogin, async (req, res) => {
  const user = await User.findById(req.session.userId);
  resetStreak(user);
  await user.save();
  res.json({ streak: user.streak, lastClick: user.streakLast });
});

router.post("/streak/click", requireLogin, async (req, res) => {
  const user = await User.findById(req.session.userId);
  const today = new Date().toISOString().split("T")[0];

  if (user.streakLast === today) return res.status(400).json({ error: "already" });

  user.streak = (user.streak || 0) + 1;
  user.streakLast = today;
  await user.save();

  res.json({ streak: user.streak, lastClick: user.streakLast });
});

router.post("/streak/reset", requireLogin, async (req, res) => {
  const user = await User.findById(req.session.userId);

  user.streak = 0;
  user.streakLast = null;
  await user.save();

  res.json({ streak: 0 });
});


module.exports = router;