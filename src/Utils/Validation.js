// all regex
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const numberRegex = /^(?:(?:\+|00)88|01)?\d{11}$/;

// validators

export function emailValidator(email) {
  const toLower = email.toLowerCase();
  return emailRegex.test(toLower);
}

export function nameValidator(name) {
  if (name.lenth > 15) {
    return false;
  } 
}

export function passValidator(pass) {
  return passRegex.test(pass);
}
export function numberValidator(pass) {
  return numberRegex.test(pass);
}
