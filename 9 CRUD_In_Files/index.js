/*CRUD
C: Create
R: Read
U: Update
D: Delete */

const fs = require("fs");
const path = require("path");

//get current directory name and join it with another folder
const dirName = path.join(__dirname, "crud");

console.log(dirName);

//inside this path the Afif.txt file will be created
const filePath = `${dirName}/Afif.txt`;

//Content of the file
const fileText = "Hi Afif. File is created successfullyyy";

//******now create file
//fs.writeFileSync(filePath, fileText);

//******Now lets read the file
//fs.readFile(filePath, "utf8", (err, data) => console.log(data));

//******update the file
// fs.appendFile(
//   filePath,
//   " and this text is added to show that the file is updated.",
//   (err) => {
//     if (!err) {
//       console.log("File is updated successfully");
//     }
//   }
// );

//****** Rename file
// fs.rename(filePath, `${dirName}/AfifNew.txt`, (err) => {
//   if (!err) {
//     console.log("File name updated successfully");
//   }
// });

//Delete file
fs.unlinkSync(`${dirName}/AfifNew.txt`);
