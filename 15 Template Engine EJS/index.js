// Importing the 'express' module and creating an instance of the application
const express = require("express");
const app = express();

// Setting the view engine to 'ejs' for rendering dynamic content
app.set("view engine", "ejs");

// Defining a route for the '/' path, and rendering the 'Home' view when accessed
app.get("", (req, res) => {
  res.render("Home");
});

// Defining a route for the '/about' path, and rendering the 'About' view when accessed
app.get("/about", (req, res) => {
  res.render("About");
});

// Defining a route for the '/profile' path, and rendering the 'Profile' view when accessed
app.get("/profile", (req, res) => {
  //pass data from here to the html page.
  //kinda looks like react props
  const userData = {
    name: "Afif",
    id: 1001957171,
    email: "afif@gmail.com",
  };
  res.render("Profile.ejs", { userData });
});

// Defining a route for the '*' path, and rendering the '404 page not found' view when accessed
app.get("*", (req, res) => {
  //mention the file name
  res.render("pageNotFound.ejs");
});

// Listening on port 4500 for incoming requests
app.listen(4500);
