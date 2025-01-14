const express = require("express");
const {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProductDetails,
  updateProductPhoto,
  deleteProduct
} = require("../../Controller/product.controller");
const upload = require("../../middleware/multer.middleware");
const _ = express.Router();
_.route("/products")
  .post(upload.fields([{ name: "images", maxCount: 10 }]), createProduct)
  .get(getAllProduct);

_.route("/products/:id")
  .get(getSingleProduct)
  .delete(deleteProduct)

_.route("/update-product-info/:id")
  .put(updateProductDetails)
_.route("/update-product-image/:id")
  .put(upload.fields([{name: "images" , maxCount: 10}]),updateProductPhoto)
module.exports = _;
