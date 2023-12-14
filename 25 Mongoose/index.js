const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/e-comm";

//database connection using mongoose
const main = async () => {
  await mongoose.connect(url).then(() => console.log("Connected!"));

  //schema: defines the field types
  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });

  //model: it usages schema and connects with node and mongodb
  //the first parameter is collection name and 2nd one is schema
  const productModel = new mongoose.model("products", productSchema);

  let data = productModel({ name: "Motorola", price: 100000 });
  let result = await data.save();
  console.log(result);
};

main();
