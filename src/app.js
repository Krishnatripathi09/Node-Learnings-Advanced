const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is successfully Listening on Port 3000 😀");
});

app.use((req, res) => {
  res.send("Hello I am responding 😁");
});
