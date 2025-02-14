const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is successfully Listening on Port 3000 😀");
});

app.use("/user", (req, res, next) => {
  // This is request handler function
  //Got No response here so going to next request Handler
  res.send("This is first Response");
  next();
});
app.use("/user", (req, res) => {
  res.send("This is separate Response");
});
