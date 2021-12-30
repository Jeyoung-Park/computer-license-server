const express = require("express");
const { Description } = require("../models");

const router = express.Router();

// GET / 라우터
router.get("/", async(req, res, next) => {
  try {
    const descriptions = await Description.findAll();
    res.render("register", { descriptions });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
