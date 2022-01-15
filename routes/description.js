const express = require("express");
const {
  getDescriptions,
  postDescription,
  getDescription,
  patchDescription,
  deleteDescription,
} = require("../controllers/descriptions");

const router = express.Router();

router.route("/").get(getDescriptions).post(postDescription);

router
  .route("/:id")
  .get(getDescription)
  .patch(patchDescription)
  .delete(deleteDescription);

module.exports = router;
