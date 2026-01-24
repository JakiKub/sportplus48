const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  activity: String,
  distance: Number,
  timeInMins: Number,
  status: { type: String, default: "pending" },
  points: Number,
  evidenceUrl: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Activity", activitySchema);