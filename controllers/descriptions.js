const { Description, Category } = require("../models");

exports.getDescriptions = async (req, res, next) => {
  try {
    const descriptions = await Description.findAll({
      include: Category,
    });
    console.log("descriptions in /descriptions, ", descriptions);
    res.json(descriptions);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.postDescription = async (req, res, next) => {
  try {
    const description = await Description.create({
      category_id: req.body.category_id,
      content: req.body.content,
      is_like: req.body.is_like,
      keyword: req.body.keyword,
    });
    console.log("description post, ", description);
    res.status(201).json(description);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.getDescription = async (req, res, next) => {
  try {
    const descriptions = await Description.findOne({
      include: Category,
      where: { id: req.params.id },
    });
    res.status(201).json(descriptions);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.patchDescription = async (req, res, next) => {
  try {
    const { category_id, content, is_like, keyword } = req.body;
    const descriptions = await Description.update(
      {
        category_id,
        content,
        is_like,
        keyword,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(201).json(descriptions);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.deleteDescription = async (req, res, next) => {
  try {
    const descriptions = await Description.destroy({
      where: { id: req.params.id },
    });
    res.status(201).json(descriptions);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
