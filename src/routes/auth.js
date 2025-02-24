const express = require("express");
const { validateSignUpData } = require("../middlewares/utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    validateSignUpData(req);
    const { firstName, lastName, email, password } = req.body;

    //Encrypt the Password
    //Creating the new Instance of User Model

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    await user.save();
    res.status(201).send("Profile Created Successfully 😀. Please Log-In");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

authRouter.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).send("User Not Found With This E-Mail");
    }

    const isPasswordValid = await user.verifyPwd(password);

    if (isPasswordValid) {
      const token = await user.getJWT();

      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.send("Log-In Successfull");
    } else {
      throw new Error("Please Enter Valid Password");
    }
  } catch (err) {
    res.status(400).send("Error :" + err.message);
  }
});

authRouter.post("/logout", (req, res) => {
  res.clearCookie("token", null, {
    expires: new Date(Date.now()),
  });

  res.send("Log-Out Successfull");
});

module.exports = authRouter;
