import express from "express";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./config/inngest.js";
import { ENV } from "./config/env.js";
import connectDB from "./config/db.js";

const app = express();
app.use(clerkMiddleware()); // Apply clearkMiddleware to all routes

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("api/ingest", serve({ client: inngest, functions }));

app.get("/", (req, res) => {
  res.send("api serving!");
});

const startServer = async () => {
  try {
    await connectDB();
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => {
        console.log(`server running at http://localhost:${ENV.PORT}`);
      });
    }
  } catch (error) {
    console.error("Error starting server", error);
    process.exit(1);
  }
};

startServer();

export default app
