import mongoose from "mongoose";

const FeedbacksSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: false,
    },
    rating: {
      type: Number,
      max: 5,
      required: false,
    },
    feedback: {
      type: String,
      required: false,
    },
  },
  {
    collection: "Feedbacks",
  }
);

export default mongoose.model("FeedbacksModel", FeedbacksSchema);
