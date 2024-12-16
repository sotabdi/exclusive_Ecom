const express = require("express");
const _ = express.Router();
const authRoutes = require('./api/auth.apiRoutes');
const categoryRoutes = require('./api/category.apiRoutes');
const subCategoryRoutes = require('./api/subCategory.apiRoutes');
const productRoutes  = require('./api/product.apiRoutes')

_.use("/app/v1/auth",authRoutes);
_.use("/app/v1",categoryRoutes);
_.use("/app/v1",subCategoryRoutes);
_.use("/app/v1",productRoutes);

module.exports = _