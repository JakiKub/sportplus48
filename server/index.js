require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const cors = require("cors");
const { connectDB } = require("./db");
const path = require("path");
const activityRoutes = require("./routes/activityRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const streakRoutes = require("./routes/streakRoutes");
const recordsRoutes = require("./routes/recordsRoutes");
const rankingRoutes = require("./routes/rankingRoutes");
const goalRoutes = require("./routes/goalRoutes")
const app = express();

const clientDistPath = path.resolve(__dirname, "..", "client", "dist");

app.get("/api/users", (req, res) => {
  res.json({ ok: true });
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static((clientDistPath))); //path.join(__dirname, dist)
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.set("trust proxy", 1);
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: "lax",
    secure: false,
    httpOnly: true
  }
}));

app.use("/api", activityRoutes);
app.use("/api", userRoutes);
app.use("/api", streakRoutes);
app.use("/api", recordsRoutes);
app.use("/api", rankingRoutes);
app.use("/api", goalRoutes);
app.use("/", authRoutes);

app.use( (req, res) => {
  res.sendFile(path.join(clientDistPath, "index.html"));
});

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`backend dziala na ${PORT}`));
