const express = require("express");
const { Category } = require("../models");

const router = express.Router();

router.route("/").get(async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.route("/:id").get(async (req, res, next) => {
  try {
    const category = await Category.findOne({
      where: { id: req.params.id },
    });
    res.status(201).json(category);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
