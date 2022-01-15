const { Category } = require("../models");

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findOne({
      where: { id: req.params.id },
    });
    res.status(201).json(category);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
