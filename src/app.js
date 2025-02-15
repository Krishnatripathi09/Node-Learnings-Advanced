const express = require("express");
require("./middlewares/config/database");
const connectDB = require("./middlewares/config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());
app.post("/signup", async (req, res) => {
  const user = new User(req.body.j);
  try {
    await user.save();
    res.send("Data Saved SucessFully");
  } catch (err) {
    res.status(400).send("Error Sending the data:" + err.message);
  }
});

//Feed API to get all the data from the DataBase:
app.get("/feed", async (req, res) => {
  const user = await User.find({});
  res.send(user);
});

// To get a user using email
app.get("/user", async (req, res) => {
  const email = req.body.email;
  const user = await User.find({ email: email });
  // console.log(user);
  res.send(user);
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
