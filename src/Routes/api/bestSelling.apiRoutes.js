const express = require("express");
const _ = express.Router();
const {
  createBestSelling,
  getAllBestProducts,
  getSingleBestProduct,
  updateBestProduct,
  deleteBestProduct,
} = require("../../Controller/bestSelling.controller");

_.route("/best-selling").post(createBestSelling).get(getAllBestProducts);
_.route("/best-selling/:id")
  .get(getSingleBestProduct)
  .put(updateBestProduct)
  .delete(deleteBestProduct);

module.exports = _;
