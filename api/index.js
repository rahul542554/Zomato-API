import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import FoodItemsRouter from "./routes/food-items.route.js";
import FeedbacksRouter from "./routes/feedbacks.route.js";

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);

app.get("/", (req, res) => {
  res.send("Food Ordering Website");
});

// Using Food Items Router
app.use("/api/food-items", FoodItemsRouter);

// Using Feedbacks Router
app.use("/api/feedbacks", FeedbacksRouter);

mongoose.connect(MONGODB_URI, () => {
  app.listen(PORT, () => {
    console.log(
      `Database connected and Server running at http://localhost:${PORT}`
    );
  });
});
