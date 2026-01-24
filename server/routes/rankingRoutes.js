const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/ranking", async (req, res) => {
  const users = await User.find({}, { username: 1, nationality: 1, pointsAll: 1 })
    .sort({ pointsAll: -1 })
    .limit(48);

  res.json({ users });
});

module.exports = router;