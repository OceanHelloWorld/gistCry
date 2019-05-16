const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let error = {};
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.passwordRepeat = !isEmpty(data.passwordRepeat) ? data.passwordRepeat : "";

  
  if (Validator.isEmpty(data.username)) {
    errors.username = "username field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.passwordRepeat)) {
    errors.passwordRepeat = "Confirm password field is required";
  }

  if (!Validor.isLength(data.password, { min: 6, max: 32 })) {
    error.password = "Passwords must be between 6 characters to 32 characters"
  }

  if (!Validator.equals(data.password, data.passwordRepeat)) {
    erros.passwordRepeat = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}


