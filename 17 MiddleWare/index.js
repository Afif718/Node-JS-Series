const express = require("express");
const app = express();

//now create the middleWare
const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("<h1>Please provide ur age</h1>");
  } else if (req.query.age < 18) {
    res.send(
      "<h1>You are under aged..Only 18 or 18+ ppl are allowed here</h1>"
    );
  } else {
    next();
  }
};

//use the middleware
app.use(reqFilter);

app.get("", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});

app.listen(4500);
