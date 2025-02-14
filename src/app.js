const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is successfully Listening on Port 3000 😀");
});

app.use("/admin", (req, res, next) => {
  const token = "xyzADC";
  const isAdminAuthorized = token === "xyz";

  if (isAdminAuthorized) {
    next();
  } else {
    res.status(401).send("Not Authorized:");
  }
});

app.get("/admin/getAllData", (req, res) => {
  //Auth Logic Here
  res.send("All User Data");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User Deleted");
});
