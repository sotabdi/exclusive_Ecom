const express = require("express");
const _ = express.Router();
const {
  categoryController,
  getCategoryController,
  updateCategoryController,
  getSingleCategory,
  deleteCategoryController
} = require("../../Controller/categoryController");
const upload = require("../../middleware/multer.middleware");

_.route("/category")
  .post(upload.fields([{ name: "icon", maxCount: 1 }]), categoryController)
  .get(getCategoryController);

_.route("/category/:id").put(
  upload.fields([{ name: "icon", maxCount: 1 }]),
  updateCategoryController
).get(getSingleCategory).delete(deleteCategoryController);
module.exports = _;
