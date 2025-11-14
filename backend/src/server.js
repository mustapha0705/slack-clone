import express from "express";
import { ENV } from "./config/env.js";
import connectDB from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("api serving!");
});

const start = async () => {
  try {
    await connectDB(ENV.MONGO_URI);
    app.listen(ENV.PORT, () => {
      console.log(`server running at http://localhost:${ENV.PORT}`);
    });
  } catch (error) {
    console.error("Error while connecting to database", error);
  }
};

start();
