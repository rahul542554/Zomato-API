import FeedbacksModel from "../models/feedbacks.model.js";
import FoodItemsModel from "../models/food-items.model.js";

const getAllFeedbacks = async (req, res) => {
  try {
    const allFeedbacks = await FeedbacksModel.find();
    res.status(200);
    res.json(allFeedbacks);
  } catch (error) {
    res.status(400);
    res.json({
      Error: error,
    });
  }
};

const addNewFeedback = async (req, res) => {
  const { productId, rating, feedback } = req.body;

  try {
    const getFoodItemById = await FoodItemsModel.find({ _id: productId });

    if (getFoodItemById.length > 0) {
      const newFeedback = await FeedbacksModel.create({
        productId: productId,
        feedback: feedback,
        rating: rating,
      });

      newFeedback.save();
      res.status(200);
      res.json(newFeedback);
    } else {
      res.status(400);
      res.json({
        Error: `No Product Found with ID : '${productId}'`,
      });
    }
  } catch (error) {
    res.status(400);
    res.json({
      Error: error.message,
    });
  }
};

export { getAllFeedbacks, addNewFeedback };
