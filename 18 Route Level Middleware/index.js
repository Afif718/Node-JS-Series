const express = require("express");

// Importing custom middleware for request filtering
const reqFilter = require("./middleWare");

// Creating an instance of the express Router
const route = express.Router();

// Creating an instance of the express application
const app = express();

// Uncomment the line below to apply the 'reqFilter' middleware globally to all routes
// app.use(reqFilter);

// Applying the 'reqFilter' middleware specifically to routes defined in the 'route' instance
route.use(reqFilter);

// Handling GET request to the root path ("/") of the application
app.get("", (req, res) => {
  res.send("<h1>Welcome to Home Page!!</h1>");
});

// Handling GET request to the "/about" path
route.get("/about", (req, res) => {
  res.send("<h1>Welcome to about page!!</h1>");
});

// Handling GET request to the "/users" path
route.get("/users", (req, res) => {
  res.send("<h1>Welcome to users page</h1>");
});

// Mounting the 'route' instance to the root path ("/") of the application
app.use("/", route);

// Starting the server on port 4500
app.listen(4500);

// Logging a message indicating that the server has started successfully
console.log("Server started at port: 4500");
