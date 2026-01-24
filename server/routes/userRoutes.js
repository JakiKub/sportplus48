const express = require("express");
const User = require("../models/user");
const requireLogin = require("../middleware/requireLogin");

const router = express.Router();

router.get("/user/points", requireLogin, async (req, res) => {
  const user = await User.findById(req.session.userId, "pointsNow pointsAll");
  res.json(user);
});

router.get("/me", async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ isLogged: false });
  }

  const user = await User.findById(req.session.userId).select("username email");

  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  res.json({
    isLogged: true,
    username: user.username,
    email: user.email
  });
});

module.exports = router;