const dbConnection = require("./dbConnection");

const daleteData = async () => {
  let data = await dbConnection();
  let deleteData = await data.deleteOne({ name: "Redmi-7" });

  //if deleteData.deletedCount === 0 then the data is not deleted or previously deleted
  if (deleteData.acknowledged && deleteData.deletedCount != 0) {
    console.log("Data Updated Successfully");
  } else {
    console.log("Already deleted or check ur code");
  }
};

daleteData();
