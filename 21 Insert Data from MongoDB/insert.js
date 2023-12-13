const dbConnection = require("../20 Read Data from MongoDB/mongoConfig");

const main = async () => {
  let data = await dbConnection();
  console.log(data);
  data = await data.insertOne({
    name: "007",
    brand: "OnePlus",
    price: 45000,
    category: "Mobile",
  });
  console.log(data);
};

main();
