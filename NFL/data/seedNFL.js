const { MongoClient } = require('mongodb');
const fs = require('fs');

// Replace with your MongoDB connection string
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase'; // Replace with your database name
const collectionName = 'mycollection'; // Replace with your collection name

// Replace with your JSON data
const jsonData = [
  { "name": "John", "age": 30, "city": "New York" },
  { "name": "Jane", "age": 25, "city": "San Francisco" }
];

async function seedDatabase() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert the JSON data into the collection
    const result = await collection.insertMany(jsonData);
    console.log(`${result.insertedCount} documents were inserted`);

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

seedDatabase();
