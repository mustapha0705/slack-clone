import express from "express";
import { ENV } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("api serving!");
});

app.listen(ENV.PORT, () => {
  console.log(`server running at http://localhost:${ENV.PORT}`);
});
