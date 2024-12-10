const bcrypt = require("bcrypt");

const encriptPassword = async (password) => {
  try {
    const encriptedPass = await bcrypt.hash(password, 10);
    return encriptedPass;
  } catch (error) {
    console.log(error);
  }
};

const decodePassword = async (password, hashPass) => {
  const decoded = await bcrypt.compare(password, hashPass);
  return decoded;
};

module.exports = {encriptPassword, decodePassword} 
