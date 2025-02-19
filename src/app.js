const express = require("express");
require("./middlewares/config/database");
const connectDB = require("./middlewares/config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./middlewares/utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/auth");

app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
  try {
    //Validattion Of Data
    validateSignUpData(req);
    const { firstName, lastName, email, password } = req.body;

    //Encrypt the Password
    const passwordHash = await bcrypt.hash(password, 10);

    //Creating the new Instance of User Model
    const user = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });
    await user.save();
    res.send("Data Saved SucessFully");
  } catch (err) {
    res.status(400).send("Error:" + err.message);
  }
});

//Signin API
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }); ///checking if user Email Exists in DataBase or Not using User Model.
    if (!user) {
      throw new Error("User Not Found With This Email:");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password); // If user exists then checking if the input password is similar to stored password
    if (isPasswordValid) {
      //Create a Jwt Token
      const token = await jwt.sign({ _id: user._id }, "Web@Secret789Token");
      res.cookie("token", token);
      res.send("Login Successfull");
    } else {
      throw new Error("Invalid Password Bhau! ");
    }
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("Error :", +err.message);
  }
});

app.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;

  console.log("Sending Connection Request");
  res.send(user.firstName + " sent the Connection Request");
});

connectDB()
  .then(() => {
    console.log("Connection to DataBase is SuccessFul 😁");
    app.listen(3000, () => {
      console.log("Server is successfully Listening on Port 3000 😀");
    });
  })
  .catch((err) => {
    console.log("Error Occured ===>", err);
  });
