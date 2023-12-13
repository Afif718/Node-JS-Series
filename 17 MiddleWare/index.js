const express = require("express");

// Creating an instance of the express application
const app = express();

// Custom middleware function to filter requests based on age
const reqFilter = (req, res, next) => {
  // Checking if the 'age' parameter is missing in the query
  if (!req.query.age) {
    // Sending a response if age is not provided
    res.send("<h1>Please provide your age</h1>");
  } else if (req.query.age < 18) {
    // Sending a response if the user is under 18 years old
    res.send(
      "<h1>You are underage. Only 18 or older individuals are allowed here</h1>"
    );
  } else {
    // Passing control to the next middleware or route handler if age is valid
    next();
  }
};

// Applying the 'reqFilter' middleware globally to all routes
app.use(reqFilter);

// Handling GET request to the root path ("/") of the application
app.get("", (req, res) => {
  res.send("Welcome to the home page");
});

// Handling GET request to the "/about" path
app.get("/about", (req, res) => {
  res.send("Welcome to the about page");
});

// Handling GET request to the "/contact" path
app.get("/contact", (req, res) => {
  res.send("Welcome to the contact page");
});

// Starting the server on port 4500
app.listen(4500);
