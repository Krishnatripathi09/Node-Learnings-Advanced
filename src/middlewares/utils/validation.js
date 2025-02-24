const validator = require("validator");
const validateSignUpData = (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error(" Name is Not Valid ");
  } else if (firstName.length < 4 || firstName.length > 50) {
    throw new Error(" First Name must should be between 4 and 50 characters");
  } else if (lastName.length < 3 || lastName.length > 50) {
    throw new Error(" Last Name must should be between 3 and 50 characters");
  } else if (!validator.isEmail(email)) {
    throw new Error(" Invalid Email");
  } else if (!password) {
    throw new Error("Please Enter a Password");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error(
      "Password must be at least 8 characters and should contain speacial Characters."
    );
  }
};

const validateEditProfileData = (req, res) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "age",
    "gender",
    "photoUrl",
    "about",
    "skills",
  ];
  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  return isEditAllowed;
};

module.exports = {
  validateSignUpData,
  validateEditProfileData,
};
