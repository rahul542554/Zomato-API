import mongoose from "mongoose";

const FoodItemsSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      max: 5,
      required: true,
    },
  },
  {
    collection: "FoodItems",
  }
);

export default mongoose.model("FoodItemsModel", FoodItemsSchema);
