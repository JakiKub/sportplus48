const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("polaczono z db");
  } catch (err) {
    console.error(`blad mongo ${err}`);
  }
}

module.exports = { connectDB };