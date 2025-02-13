const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is successfully Listening on Port 3000 😀");
});

app.get("/user", (req, res) => {
  res.send("I am Responding to only Get Request ");
});

app.get("/users/:userId", (req, res) => 
    { console.log(req.params); 
    res.send({ firstName: "Krishna", lastName: "Tripathi" }); });


app.post("/user", (req, res) => {
  console.log(req.query.name);
  res.send("I am responding to POST Request Only 😎");
});

app.delete("/user", (req, res) => {
  res.send("User Deleted SuccessFully");
});

app.patch("/user", (req, res) => {
  res.send("User Updated Successfully 😑");
});

app.put("/user", (req, res) => {
  res.send("User Updated Success FULLY using PUT");
});
