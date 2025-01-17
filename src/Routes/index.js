const express = require("express");
const _ = express.Router();
const authRoutes = require('./api/auth.apiRoutes');
const categoryRoutes = require('./api/category.apiRoutes');
const subCategoryRoutes = require('./api/subCategory.apiRoutes');
const productRoutes  = require('./api/product.apiRoutes')
const flashSaleRoutes = require('./api/flashSale.apiRoutes');
const bestSelling = require("./api/bestSelling.apiRoutes")
const bannerRoutes = require("./api/banner.apiRoutes")

_.use("/app/v1/auth",authRoutes);
_.use("/app/v1",categoryRoutes);
_.use("/app/v1",subCategoryRoutes);
_.use("/app/v1",productRoutes);
_.use("/app/v1",flashSaleRoutes)
_.use("/app/v1",bestSelling)
_.use("/app/v1",bannerRoutes)

module.exports = _