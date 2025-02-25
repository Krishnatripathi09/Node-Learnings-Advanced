const express = require("express");
const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require("../middlewares/utils/validation");
const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(401).send("UnAuthorized");
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      return res.status(400).send("Edit Not Allowed On This Field");
    }
    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    await loggedInUser.save();
    res.json({ message: `${loggedInUser.firstName}`, data: loggedInUser });
  } catch (err) {
    console.log("Error :" + err);
  }
});

module.exports = profileRouter;
