//using process.argv we can get input from cmd
//console.log(process.argv);
//console.log(process.argv[2]);

const fs = require("fs");

let input = process.argv;

//index 2 will be the file name and index 3 will be the text we will put inside the file
if (input[2] === "Add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] === "Remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("Invalid Input");
}
