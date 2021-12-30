const express = require("express");
const { Description } = require("../models");

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const descriptions = await Description.findAll();
      console.log('descriptions in /descriptions, ', descriptions)
      res.json(descriptions);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const description = await Description.create({
        info: req.body.info,
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
  });

module.exports = router;
