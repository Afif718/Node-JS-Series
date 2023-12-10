const { execFile } = require("child_process");
const express = require("express");
const path = require("path");

const publicPath = path.join(__dirname, "public");
console.log(publicPath);

//execute express
const app = express();

//the below code will show file extension .html
//app.use(express.static(publicPath));

//to hide file extension use -- sendfile function
//below page is for home page
app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

//if user types any other url then it will redirect to this page
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/pageNotFound.html`);
});
//listen to a port
app.listen(4500);
