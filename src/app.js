const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is successfully Listening on Port 3000 😀");
});

app.use(
  "/user",
  (req, res, next) => {
    // This is request handler function
    //Got No response here so going to next request Handler
    next();
  },
  (req, res, next) => {
    res.send("This is 2nd Response");
  }
);
