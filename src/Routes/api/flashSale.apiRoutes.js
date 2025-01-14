const express = require("express");
const {
  createFlashSale,
  getAllFlashProduct,
  getSingleFlashProduct,
  updateFlashSaleProduct,
  deleteFlashProduct
} = require("../../Controller/flashSale.controller");
const _ = express.Router();

_.route("/flashsale").post(createFlashSale).get(getAllFlashProduct);
_.route("/flashsale/:id")
  .get(getSingleFlashProduct)
  .put(updateFlashSaleProduct)
  .delete(deleteFlashProduct)

module.exports = _;
