const dbConnection = require("./mongoConfig");

//*******Get Data from Database using two types of promises */

//handle promises - First way

// dbConnection().then((res) => {
//   res
//     .find({})
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

//second way to handle promise
const main = async () => {
  let data = await dbConnection();
  data = await data.find({ brand: "Apple" }).toArray();
  console.log(data);
};

main();
