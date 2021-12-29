const express = require("express");

const router = express.Router();

// GET /info 라우터
router.get("/", (req, res) => {
  res.send("info");
});

module.exports = router;
