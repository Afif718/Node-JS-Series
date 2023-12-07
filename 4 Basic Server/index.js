//to make server, we need to first import http
//Http handles request and response
const http = require("http");

// console.log(http);

//we can pass function as parameter
// const dataOverWeb = (req, res) => {
//   res.write("<h1>Hello this is Afif</h1> <br> <p>Learning Node Js</p>");
//   res.end();
// };

//passed the function dataOverWeb as a parameter to the createServer
//const server = http.createServer(dataOverWeb);

//this is the simplified verion of the above code
const server = http.createServer((req, res) => {
  res.write("<h1>Hello this is Afif</h1> <br> <p>Learning Node Js</p>");
  res.end();
});

server.listen(4500);

console.log("server is running on local host port 4500");
