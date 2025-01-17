const express = require("express");
const app = express ();
const allRoutes = require("./src/Routes/index")
const cookieParser = require('cookie-parser')
const cors =require('cors')
app.use(cors())
app.use(express.json());
app.use(cookieParser())
app.use(allRoutes)

app.use(express.static('./public/temp'))

module.exports = {app}