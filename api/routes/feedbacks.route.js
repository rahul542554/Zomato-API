import express from "express";
import {
  getAllFeedbacks,
  addNewFeedback,
} from "../controllers/feedbacks.controller.js";

const router = express.Router();

// For Reading All Feedbacks
router.get("/", getAllFeedbacks);

// For Adding a new Feedback
router.post("/", addNewFeedback);

export default router;
