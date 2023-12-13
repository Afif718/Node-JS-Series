const dbConnection = require("./dbConnection");

const main = async () => {
  let data = await dbConnection();
  let dataUpdate = await data.updateOne(
    { name: "OnePlus 7" },
    { $set: { name: "OnePlus 7", price: 50000 } }
  );

  if ((await dataUpdate).acknowledged) {
    console.log("Data Updated Successfully");
  }
};

main();
