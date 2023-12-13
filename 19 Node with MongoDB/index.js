// Import the MongoClient module from the mongodb package
const { MongoClient } = require("mongodb");

// Specify the MongoDB connection URL, including the port number
const url = "mongodb://localhost:27017";

// Specify the name of the database to connect to
const database = "e-comm";

// Create a new instance of the MongoClient using the specified URL
const client = new MongoClient(url);

// Define an asynchronous function named getData to retrieve data from the MongoDB database
async function getData() {
  // Connect to the MongoDB server using the client
  let result = await client.connect();

  // Access the specified database using the connected client
  let db = result.db(database);

  // Access the "products" collection within the database
  let collection = db.collection("products");

  // Retrieve all documents from the "products" collection and convert the result to an array
  let response = await collection.find({}).toArray();

  // Log the retrieved data to the console
  console.log(response);
}

// Call the getData function to initiate the data retrieval process
getData();
