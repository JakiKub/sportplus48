const express = require("express");
const mongoose = require("mongoose");
const Activity = require("../models/activity");
const requireLogin = require("../middleware/requireLogin");

const router = express.Router();

router.get("/records", requireLogin, async (req, res) => {
  const userId = req.session.userId;
  const objectUserId = new mongoose.Types.ObjectId(req.session.userId);

  try {
    const longestDistance = await Activity.findOne({ userId, status: "approved" }).sort({ distance: -1 });
    const longestTime = await Activity.findOne({ userId, status: "approved" }).sort({ timeInMins: -1 });
    const longestPoints = await Activity.findOne({ userId, status: "approved" }).sort({ points: -1 });

    const tempoResult = await Activity.aggregate([
      {
        $match: { userId: objectUserId, status: "approved", distance: { $gt: 0 }, timeInMins: { $gt: 0 } }
      },
      {
        $addFields: {
          tempo: { $divide: ["$distance", "$timeInMins"] }
        }
      },
      {
        $sort: { tempo: -1 }
      },
      {
        $limit: 1
      }
    ]);

    const totalDistResult = await Activity.aggregate([
      {
        $match: { userId: objectUserId, status: "approved", distance: { $gt: 0 } }
      },
      {
        $group: {
          _id: null,
          totalDist: { $sum: "$distance" }
        }
      }
    ]);

    res.json({
      longestDistance: longestDistance?.distance,
      longestDistDate: longestDistance?.createdAt,
      longestTime: longestTime?.timeInMins,
      longestTimeDate: longestTime?.createdAt,
      bestActivDist: longestPoints?.distance,
      bestActivDate: longestPoints?.createdAt,
      bestActivTime: longestPoints?.timeInMins,
      bestActivActiv: longestPoints?.activity,
      tempo: tempoResult[0]?.tempo || null,
      tempoDate: tempoResult[0]?.createdAt || null,
      totalDist: totalDistResult[0]?.totalDist
    });
  } catch (err) {
    res.status(500).json({ error: `probably just some aggregation error, dont worry: ${err}` });
  }
});

router.get("/records/global", async (req, res) => {
  try {
    const distGlobal = await Activity.findOne({ status: "approved" }).sort({ distance: -1 });
    const timeGlobal = await Activity.findOne({ status: "approved" }).sort({ timeInMins: -1 });
    
    const tempoGlobalResult = await Activity.aggregate([
      {
        $match: { status: "approved", distance: { $gt: 0 }, timeInMins: { $gt: 0 } }
      },
      {
        $addFields: {
          tempoGlobal: { $divide: ["$distance", "$timeInMins"] }
        }
      },
      {
        $sort: { tempoGlobal: -1 }
      },
      {
        $limit: 1
      }
    ]);
    
    const totalDistGlobalResult = await Activity.aggregate([
      {
        $match: { status: "approved", distance: { $gt: 0 } }
      },
      {
        $group: {
          _id: null,
          totalDistGlobal: { $sum: "$distance" }
        }
      }
    ])
    
    res.json({
      distGlobal: distGlobal?.distance,
      timeGlobal: timeGlobal?.timeInMins,
      tempoGlobal: tempoGlobalResult[0]?.tempoGlobal || null,
      totalDistGlobal: totalDistGlobalResult[0]?.totalDistGlobal || null
    })
  } catch (err) {
    res.status(500).json({ error: `global aggregation error probably: ${err}` })
  }
})

module.exports = router;