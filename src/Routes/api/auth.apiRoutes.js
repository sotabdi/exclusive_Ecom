const express = require("express");
const _ = express.Router();
const {
  registration,
  login,
  verifyOtp,
  resendOtp
} = require("../../Controller/auth.controller");

_.route("/registration").post(registration);
_.route("/login").post(login);
_.route("/verify-otp").post(verifyOtp);
_.route('/resend-otp').post(resendOtp)

module.exports = _;
