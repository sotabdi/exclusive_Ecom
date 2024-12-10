const express = require("express");
const _ = express.Router();
const authRoutes = require('./api/auth.apiRoutes');
const categoryRoutes = require('./api/category.apiRoutes')

_.use("/app/v1/auth",authRoutes)
_.use("/app/v1/",categoryRoutes)

module.exports = _