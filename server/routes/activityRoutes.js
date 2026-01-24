const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const express = require("express");
const multer = require("multer");
const { Resend } = require("resend");
const Activity = require("../models/activity");
const User = require("../models/user");
const requireLogin = require("../middleware/requireLogin");
const { pointsCalc } = require("../utils/pointsCalc");
const cloudinary = require("../utils/uploadCloudinary");

//console.log(process.env.RESEND_API_KEY)

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
const resend = new Resend(process.env.RESEND_API_KEY)

router.get("/activity", requireLogin, async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 20;
  const skip = (page - 1) * limit;

  const activities = await Activity.find({ userId: req.session.userId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  res.json({ activities });
});

const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "activities" },
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    ).end(fileBuffer);
  });
};

router.post("/activity", requireLogin, upload.single("evidence"), async (req, res) => {
  try {
    const { activity, distance, time } = req.body;
    const user = await User.findById(req.session.userId);
    if (!user) return res.status(404).send("user not found");

    const today = new Date().toISOString().split("T")[0];
    if (user.lastActivDate !== today) {
      user.maxActiv = 0;
      user.lastActivDate = today;
    }
    if (user.maxActiv >= 2) return res.status(400).send("limit reached");

    const [h, m] = time.split(":").map(Number);
    const timeInMins = h * 60 + m;
    const points = pointsCalc(activity, Number(distance), timeInMins);

    let evidenceUrl = null;

    if (req.file) {
      const uploadRes = await uploadToCloudinary(req.file.buffer);
      evidenceUrl = uploadRes.secure_url;
    }

    const newActivity = await Activity.create({
      userId: req.session.userId,
      activity,
      distance,
      timeInMins,
      points,
      evidenceUrl,
      status: "pending"
    });

    user.maxActiv++;
    await user.save();

    await resend.emails.send({
      from: "Activity Tracker <noreply@resend.dev>",
      to: ["sport48.poland@gmail.com"],
      subject: "Nowa aktywność",
      html: `
        <h2>nowa aktywnosc</h2>
        <p>od: ${user.username}</p>
        <p>aktywnosc: ${activity}</p>
        <p>dystans: ${distance}</p>
        <p>czas: ${time}</p>

        ${evidenceUrl ? `<a href="${evidenceUrl}" target="_blank">zdj cloudinary</a>` : `<p>skubany nie zalaczyl zdjecia</p>`}

        <br/><br/>

        <a href='${process.env.BASE_URL}/api/approve/${newActivity._id}'>accept</a>
        <a href='${process.env.BASE_URL}/api/deny/${newActivity._id}'>deny</a>
      `
    });

    res.send("activity received");
  } catch (err) {
    console.error(err);
    res.status(500).send("activity error");
  }
});

router.get("/approve/:id", async (req, res) => {
  const activity = await Activity.findById(req.params.id);

  if (!activity) return res.sendStatus(404);
  if (activity.status === "approved") {
    return res.send("already approved");
  }

  activity.status = "approved";
  await activity.save();

  await User.findByIdAndUpdate(activity.userId, {
    $inc: { pointsNow: activity.points, pointsAll: activity.points }
  });

  res.send("approved");
});

router.get("/deny/:id", async (req, res) => {
  await Activity.findByIdAndUpdate(req.params.id, { status: "denied" });
  res.send("denied");
});

module.exports = router;