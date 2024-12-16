const express = require("express");
const _ = express.Router();
const {
  createSubCategory,
  getAllSubCategory,
  getSingleSubCategory,
  updateSubCategory,
  deleteSubCategory
} = require("../../Controller/subCategory.controller");
const upload = require("../../middleware/multer.middleware");

_.route("/subcategory")
  .post(upload.fields([{ name: "icon", maxCount: 1 }]), createSubCategory)
  .get(getAllSubCategory);

_.route("/subcategory/:id")
  .get(getSingleSubCategory)
  .put(upload.fields([{ name: "icon", maxCount: 1 }]), updateSubCategory).delete(deleteSubCategory);

module.exports = _;
