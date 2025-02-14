const express = require("express");
const { adminAuth } = require("./middlewares/auth");

const app = express();

app.listen(3000, () => {
  console.log("Server is successfully Listening on Port 3000 😀");
});

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  //Auth Logic Here
  res.send("All User Data");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User Deleted");
});
