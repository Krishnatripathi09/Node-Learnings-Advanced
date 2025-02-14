const express = require("express");
const { adminAuth } = require("./middlewares/auth");

const app = express();

app.listen(3000, () => {
  console.log("Server is successfully Listening on Port 3000 😀");
});

app.get("/getUserData", (req, res) => {
  throw new Error("This is error");
  res.send("Data is Here");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something Went Wrong");
  }
});
