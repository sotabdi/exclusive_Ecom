const emailValidator = (email) => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regex.test(email.toLowerCase());
};

const passwordValidator = (password) => {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  return regex.test(password)
};

const numberValidator = (number)=>{
    const regex= /^(?:(?:\+|00)88|01)?\d{11}$/

    return regex.test(number)
}

module.exports = { emailValidator, passwordValidator, numberValidator };
