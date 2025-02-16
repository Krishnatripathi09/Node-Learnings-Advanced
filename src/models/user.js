const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
    },
    lastName: {
      type: String,
      minLength: 4,
      maxLength: 20,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email 😎 Please Enter Valid One");
        }
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 40,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Please Enter Valid Gender (male,female,others)");
        }
      },
    },
    photoUrl: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-854.jpg?t=st=1739680454~exp=1739684054~hmac=38453e5862630ffb2aa2616c560ccfafb430ec93469bf1e36d51560ef465c839&w=740",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error(
            "Invalid Photo URL Please Enter Valid One. This is not accepted ====> " +
              value
          );
        }
      },
    },
    about: {
      type: String,
      default: "This is default about of the User.",
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
