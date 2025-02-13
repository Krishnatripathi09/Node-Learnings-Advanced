const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is successfully Listening on Port 3000 😀");
});

app.get("/user", (req, res) => {
  res.send("I am Responding to only Get Request ");
});

app.post("/post", (req, res) => {
  res.send("I am responding to POST Request Only 😎");
});
