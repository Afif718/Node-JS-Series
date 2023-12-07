const fs = require("fs");

//create and write inside a file
fs.writeFileSync("Hello.txt", "Hi I am Afif and Learning Node js");

//print directory name
console.log("Current directory Name --> ", __dirname);

//file name
console.log("Current file name is --> ", __filename);
