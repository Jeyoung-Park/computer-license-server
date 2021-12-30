const express = require("express");

const router = express.Router();

// GET /description 라우터
router.get("/", (req, res) => {
  res.send("description");
});

module.exports = router;
