const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/e-comm";
mongoose.connect(url).then(() => console.log("Connected!"));

//create the schema
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

const saveDB = async () => {
  //now create the model
  const productModel = new mongoose.model("products", productSchema);
  let data = productModel({
    name: "HP Windows 10",
    brand: "HP",
    price: 55000,
    category: "Mobile",
  });

  let result = await data.save();
  console.log(result);
};

//update in db
const updateData = async () => {
  const product = mongoose.model("products", productSchema);
  const data = await product.updateOne(
    { name: "HP Windows 10" },
    { $set: { name: "HP-10", price: 60000 } }
  );

  console.log(data);
};

//delete
const deleteInData = async () => {
  const product = mongoose.model("products", productSchema);
  const data = await product.deleteOne({ name: "Oppo v12" });
  console.log(data);
};

deleteInData();

//find in db
const findInDB = async () => {
  const product = mongoose.model("products", productSchema);
  const data = await product.find({});
  console.log(data);
};

findInDB();
