const fs = require('fs').promises;
const { MongoClient } = require('mongodb');

async function createJsonData(file) {
    try {
        const data = await fs.readFile(file, 'utf8');
        const jsonData = JSON.parse(data);
        //console.log(jsonData); // Logs the parsed JSON data
        return jsonData;
    } catch (err) {
        console.error('Error reading the file:', err);
    }
}

async function seedDatabase() {
    const uri = 'mongodb+srv://dougscheible:fossil69@cluster0.n9nhf0f.mongodb.net/NFL?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB connection string
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to the database');

        const database = client.db('NFL'); // Replace with your database name
        const collection = database.collection('INFO'); // Replace with your collection name

        const jsonData = await createJsonData('NFL_SEASON.txt'); // Replace with your JSON file path
        if (jsonData) {
            const result = await collection.insertMany(jsonData);
            console.log(`${result.insertedCount} documents were inserted`);
        }
    } catch (err) {
        console.error('Error inserting documents:', err);
    } finally {
        await client.close();
    }
}

createJsonData('NFL_SEASON.txt').then(data => {
    console.log(data);
});

let NFL_DATA = createJsonData('NFL_SEASON.txt');
NFL_DATA.then(data => {
    console.log(data);  // This will log the actual JSON data
});

seedDatabase();