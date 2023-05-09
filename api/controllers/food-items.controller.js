import FoodItemsModel from "../models/food-items.model.js";

const getAllFoodItems = async (req, res) => {
  try {
    const allFoodItems = await FoodItemsModel.find();
    res.status(200);
    res.json(allFoodItems);
  } catch (error) {
    res.status(400);
    res.json({
      Error: error,
    });
  }
};

const getFoodItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const getFoodItemById = await FoodItemsModel.find({ _id: id });
    res.status(200);
    res.json(getFoodItemById);
  } catch (error) {
    res.status(400);
    res.json({
      Error: error,
    });
  }
};

const addNewFoodItem = async (req, res) => {
  const { productName, price, category, rating } = req.body;

  try {
    const newFoodItem = await FoodItemsModel.create({
      productName: productName,
      price: price,
      category: category,
      rating: rating,
    });

    newFoodItem.save();

    res.status(200);
    res.json(newFoodItem);
  } catch (error) {
    res.status(400);
    res.json({
      Error: error,
    });
  }
};

const deleteFoodItem = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await FoodItemsModel.findByIdAndDelete(id);
    res.status(200);
    res.json(response);
  } catch (error) {
    res.status(400);
    res.json({
      Error: error,
    });
  }
};

export { getAllFoodItems, getFoodItemById, addNewFoodItem, deleteFoodItem };
