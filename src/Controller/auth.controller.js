const { usermodel } = require("../model/user.model");
const { Response } = require("../utilities/apiResponse");
const {
  emailValidator,
  passwordValidator,
  numberValidator,
} = require("../utilities/validator");
const { encriptPassword, decodePassword } = require("../helpers/helper");
const sendMail = require("../utilities/mailer");
const generateOTP = require("../helpers/otpGenarator");
const genarateToken = require("../helpers/jwtToken");

//
//
// registration controller
const registration = async (req, res) => {
  try {
    // basic checking
    const { firstName, email, phone, password, address1, lastName } = req?.body;
    if (!firstName || !email || !phone || !password || !address1) {
      return res
        .status(401)
        .json(new Response(401, "user credential missing", null, null));
    }

    // checking with validator
    if (!emailValidator(email)) {
      return res
        .status(401)
        .json(new Response(401, "user email invalid", null, null));
    }
    if (!numberValidator(phone)) {
      return res
        .status(401)
        .json(new Response(401, "user number invalid", null, null));
    }
    if (!passwordValidator(password)) {
      return res
        .status(401)
        .json(new Response(401, "user password invalid", null, null));
    }

    //  have to check if user alreday exist in database
    const userExist = await usermodel.find({
      $or: [{ email: email }, { phone: phone }],
    });

    if (userExist?.length) {
      return res
        .status(403)
        .json(
          new Response(
            403,
            "user already exist whit this phone number or email",
            null,
            null
          )
        );
    }

    //  hash pass
    const hashPass = await encriptPassword(password);

    const otp = generateOTP();
    const mailInfo = await sendMail(email, otp);

    if (!mailInfo) {
      return res.json(
        new Response(500, `node mailer error register complete`, null, null)
      );
    }

    const userinfo = await usermodel.create({
      firstName,
      email,
      phone,
      password: hashPass,
      address1,
      otp,
      otpExpire: new Date().getTime() + 2 * 60 * 1000,
      ...(lastName && { lastName }),
    });

    return res
      .status(200)
      .json(new Response(200, "Registration successfull", userinfo, null));
  } catch (error) {
    return res
      .status(500)
      .json(new Response(400, `auth controller error ${error}`, null, null));
  }
};

//
//
// auth/login controller
const login = async (req, res) => {
  try {
    const { emailORphone, password } = req.body;

    // basic checking
    if (!emailORphone || !password) {
      return res
        .status(400)
        .json(new Response(400, "user Credential Missing", null, true));
    }

    if (!passwordValidator(password)) {
      return res
        .status(401)
        .json(new Response(401, "user password Invalid", null, null));
    }

    if (!emailValidator(emailORphone) && !numberValidator(emailORphone)) {
      return res
        .status(400)
        .json(new Response(400, "User email or phone Invalid", null, null));
    }

    // check user is registared or not
    const findUser = await usermodel.findOne({
      $or: [{ email: emailORphone }, { phone: emailORphone }],
    });

    if (!findUser) {
      return res
        .status(400)
        .json(new Response(400, "user not registerd yet", null, null));
    }

    const isCorrectPass = await decodePassword(password, findUser.password);

    if (!isCorrectPass) {
      return res
        .status(400)
        .json(new Response(400, "password in incorrect", null, null));
    }

    // after email and password verified
    const tokenPayload = {
      _id: findUser._id,
      firstName: findUser.firstName,
      email: findUser.email,
      phone: findUser.phone,
    };
    const token = genarateToken(tokenPayload);

    return res
      .status(200)
      .cookie("token", token)
      .json(
        new Response(200, "login Successfull", {
          data: {
            token: `Bearer ${token}`,
            firstName: findUser.firstName,
            email: findUser.email,
          },
        })
      );
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, `login controller error${error}`, null, true));
  }
};

//
//
// verify otp controller
const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    // basic checking
    if (!email || !otp) {
      return res.status(400).json(new Response(400, "otp missing", null, null));
    }

    const findUser = await usermodel.findOne({ email: email });

    if (findUser?.otpExpire < new Date().getTime()) {
      await usermodel.findOneAndUpdate(
        { email: email },
        { otp: null, otpExpire: null },
        { new: true }
      );
      return res.status(200).json(new Response(200, "otp expire", null, null));
    }
    if (findUser.otp !== otp) {
      return res.status(400).json(new Response(400, "not matched", null, null));
    }

    const verifyUser = await usermodel
      .findOneAndUpdate(
        { email: email },
        { otp: null, otpExpire: null, isVeridied: true },
        { new: true }
      )
      .select("-password -otp");

    return res
      .status(200)
      .json(new Response(200, "verified", verifyUser, null));
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, `verify controller error${error}`, null, true));
  }
};

module.exports = { registration, login, verifyOtp };