const express = require("express");

const _ = express.Router();
const {
  createBanner,
  getallbanner,
  getSingleBanner,
  updateBanner,
  deleteBanner,
} = require("../../Controller/banner.controller");
const upload = require("../../middleware/multer.middleware");

_.route("/banner")
  .post(upload.fields([{ name: "image", maxCount: 1 }]), createBanner)
  .get(getallbanner);

_.route("/banner/:id")
  .get(getSingleBanner)
  .put(upload.fields([{ name: "image", maxCount: 1 }]), updateBanner)
  .delete(deleteBanner);
module.exports = _;
