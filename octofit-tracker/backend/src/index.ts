import express from "express";
import mongoose from "mongoose";

const PORT = Number(process.env.PORT || 8000);
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/octofit";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", service: "octofit-backend" });
});

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB", MONGO_URI);
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
}

start();
