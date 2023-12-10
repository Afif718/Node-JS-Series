const { execFile } = require("child_process");
const express = require("express");
const path = require("path");

const publicPath = path.join(__dirname, "public");
console.log(publicPath);

//execute express
const app = express();

app.use(express.static(publicPath));

//listen to a port
app.listen(4500);
