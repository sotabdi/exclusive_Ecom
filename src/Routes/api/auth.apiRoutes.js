const express = require("express");
const _ = express.Router();
const {
  registration,
  login,
  verifyOtp,
} = require("../../Controller/auth.controller");

_.route("/registration").post(registration);
_.route("/login").post(login);
_.route("/verify-otp").post(verifyOtp);

module.exports = _;
