const nodemailer = require("nodemailer");
const {verifyOTPTamplate} =require('../helpers/emailTamplates')

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.HOST_MAIL,
    pass: process.env.APP_PASSWORD,
  },
});

const sendMail = async (mail, otp, firstName) => {
  try {
    const info = await transporter.sendMail({
      from: "Exclusive", // sender address
      to: mail, // list of receivers
      subject: "Verification", // Subject line
      text: "Hello world?", // plain text body
      html: verifyOTPTamplate(otp, mail, firstName), // html body
    });
    return info.messageId;
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMail;
