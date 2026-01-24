const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  nationality: String,
  resetToken: String,
  resetTokenExpiry: Date,
  pointsNow: { type: Number, default: 4.8 },
  pointsAll: { type: Number, default: 4.8 },
  streak: { type: Number, default: 0 },
  streakLast: String,
  maxActiv: { type: Number, default: 0 },
  lastActivDate: String,
  goals: {
    short: {
      name: String,
      active: { type: Boolean, default: false }
    },
    long: {
      name: String,
      active: { type: Boolean, default: false }
    }
  }
});

module.exports = mongoose.model("users", userSchema);
