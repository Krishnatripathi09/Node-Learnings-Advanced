const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    //read the token from req cookies

    const { token } = req.cookies;
    if (!token) {
      throw new Error("Session is not valid!!! Please Log-In Again");
    }

    //validate the token
    const decodedMsg = await jwt.verify(token, "Web@Secret789Token");
    const { _id } = decodedMsg;

    //Find the User
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User Not Found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(404).send("ERROR " + err.message);
  }
};

module.exports = {
  userAuth,
};
