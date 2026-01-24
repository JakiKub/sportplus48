const express = require("express");
const User = require("../models/user");
const requireLogin = require("../middleware/requireLogin");

const router = express.Router();

router.get("/goals", requireLogin, async (req, res) => {
  const user = await User.findById(req.session.userId);
  res.json(user.goals || {});
});

router.post("/goals/set", requireLogin, async (req, res) => {
  const { type, name } = req.body;

  const user = await User.findById(req.session.userId);

  user.goals[type] = {
    name,
    active: true
  };

  await user.save();
  res.json(user.goals[type]);
});
router.post("/goals/resolve", requireLogin, async (req, res) => {
  const { type } = req.body;

  const user = await User.findById(req.session.userId);

  user.goals[type] = {
    name: "",
    active: false
  };

  await user.save();
  res.json({ ok: true });
});

module.exports = router;
