import express from "express";
import {
  getAllFoodItems,
  getFoodItemById,
  addNewFoodItem,
  deleteFoodItem,
} from "../controllers/food-items.controller.js";

const router = express.Router();

// For Reading All Food Items
router.get("/", getAllFoodItems);

// For Reading All Food Items
router.get("/:id", getFoodItemById);

// For Adding New Food Item
router.post("/", addNewFoodItem);

// For Delete Food Item
router.delete("/:id", deleteFoodItem);

export default router;
