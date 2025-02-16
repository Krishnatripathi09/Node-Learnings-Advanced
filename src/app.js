const express = require("express");
require("./middlewares/config/database");
const connectDB = require("./middlewares/config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("Data Saved SucessFully");
  } catch (err) {
    res.status(400).send("Error Sending the data:" + err.message);
  }
});

//Feed API to get all the data from the DataBase:
app.get("/feed", async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (err) {
    res.status(400).send("Something Went Wrong ");
  }
});

// To get a user using email
app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const user = await User.find({ email: userEmail });
    if (user.length === 0) {
      res.status(404).send("User Not Found with This Email 😐");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something Went Wrong.");
  }
  // console.log(user);
});

//To delete an User By Id:
app.delete("/user", async (req, res) => {
  const userId = req.body.id;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      res.status(404).send("User Not Found:");
    } else {
      res.send("user Deleted Successfully");
    }
  } catch (err) {
    res.status(400).send("User Not Found");
  }
});

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed on this Field");
    }

    // const isValidUrl = (url) => {
    //   const urlRegex =
    //     /^(https?:\/\/)[\w.-]+(?:\.[\w\.-]+)+(?:\/[\w\-_~:/?#[\]@!$&'()*+,;=.]+)?$/;
    //   return url.match(urlRegex) !== null;
    // };

    // if (!isValidUrl(data.photoUrl)) {
    //   throw new Error("Invalid Photo URL");
    // }
    if (!data.skills) {
      data.skills;
    } else if (data.skills.length > 5) {
      throw new Error("Skills Cannot be More than 5");
    }
    const updatedUser = await User.findByIdAndUpdate({ _id: userId }, data, {
      runValidators: true,
    });
    res.send("User Updated Successfully");
  } catch (err) {
    res.status(400).send("Update Failed :" + err.message);
  }
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
