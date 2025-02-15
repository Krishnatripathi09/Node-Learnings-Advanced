const express = require("express");
require("./middlewares/config/database");
const connectDB = require("./middlewares/config/database");
const { connect } = require("mongoose");

const app = express();


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

