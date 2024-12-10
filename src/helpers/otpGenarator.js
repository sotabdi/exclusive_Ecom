const crypto = require('crypto');

function generateOTP() {
    const otp = crypto.randomInt(1000, 9999);
    return otp;
}

module.exports = generateOTP;