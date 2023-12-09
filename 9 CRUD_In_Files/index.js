const fs = require("fs");
const path = require("path");

const dirName = path.join(__dirname, "crud");

console.log(dirName);

const filePath = `${dirName}/Afiff.txt`;
const fileContent = "Hello Afif, File has been created successfully";

//****** create file
//fs.writeFileSync(filePath, fileContent);

//****** Read File
//fs.readFile(filePath, "utf-8", (err, data) => console.log(data));

//****** update file
// fs.appendFile(
//   filePath,
//   " and after that this text is also added at the end!",
//   (err, data) => {
//     if (!err) {
//       console.log("File has been updated successfully");
//     }
//   }
// );

//****** Rename file
// fs.rename(filePath, `${dirName}/Anika.txt`, (err) => {
//   if (!err) {
//     console.log("File Renamed successfully");
//   }
// });

//****** Delete file
fs.unlinkSync(`${dirName}/Anika.txt`);
