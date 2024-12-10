const express = require("express");
const app = express ();
const allRoutes = require("./src/Routes/index")
const cookieParser = require('cookie-parser')
app.use(express.json());
app.use(cookieParser())
app.use(allRoutes)

app.use(express.static('./public/temp'))

module.exports = {app}