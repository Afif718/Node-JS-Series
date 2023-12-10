//import express package
const express = require("express");
//here we will execute the express
const app = express();

//express provides routing
app.get("", (req, res) => {
  //get request data
  console.log(req.query);
  console.log("Data sent by brower ==> " + req.query.name);
  res.send(`<h2>Hello ${req.query.name}. This is home page</h2>
  <a href="/about">Go to About Page</a> <br>
  <a href="/contact-us">Go to Contact Us page</a>`);
});

app.get("/about", (req, res) => {
  res.send(`<input type="text" placeholder="Enter Name" value="${req.query.name}" /><br>
  <button type="submit">Submit</button> <br><br>
  <a href="/">Home Page</a>`);
});

app.get("/contact-us", (req, res) => {
  res.send([
    { name: "Afif", id: 1001957171 },
    { name: "Fahim", id: 1001957432 },
    { name: "Iftiaj", id: 1001957445 },
  ]);
});

app.listen(4500);
