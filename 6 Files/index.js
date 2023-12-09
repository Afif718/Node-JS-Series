const fs = require("fs");
const path = require("path");

const dirName = path.join(__dirname, "create_files");
console.log(dirName);

//create multiple files inside a folder
// for (let i = 0; i <= 5; i++) {
//   fs.writeFileSync(`${dirName}/data${i}.txt`, `This is text is for file ${i}`);
// }

//print the list of files inside a folder
fs.readdir(dirName, (err, files) => {
  //console.log(files);
  files.forEach((file) => console.log(file));
});
