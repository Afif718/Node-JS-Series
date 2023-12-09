const fs = require("fs");

const input = process.argv;

console.log(input);

if (input[2] === "Add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] === "Remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("Invalid Input");
}
