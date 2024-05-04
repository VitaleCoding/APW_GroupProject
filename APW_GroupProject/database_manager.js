//Spencer Hoban
const MongoClient = require("mongodb").MongoClient;
const db_url = "mongodb://127.0.0.1:27017";
let active_database;
let database = {}

const mongo_client = new MongoClient(db_url);

// Internal function for connecting to database. Use database.get instead
var connect = async function(database_name) {
    try {
        // Await connection to client
        await mongo_client.connect();

        // Once connection established, attempt to get wanted database
        active_database = mongo_client.db(database_name);

        // If client fails to return wanted database, error
        if (!active_database) {
            throw new Error(`Failed to connect to database ${database_name}`);
        }
        // Otherwise return the database
        else {
            console.log(`Successfully connected to ${database_name}`);
            return active_database;
        }
    }
    catch(e) {
        console.log(e.message);
    }
}

// Get database
// 'database_name' is only required for initial connection
database.get = function(database_name) {
    // Get database if already connected
    if (active_database) {
        return active_database;
    }
    // Otherwise attempt to connect to it
    else {
        return connect(database_name);
    }
}

// Attempt to close database connection
database.close = async function() {
    try {
        await mongo_client.close();
        return;
    }
    catch (e) {
        console.log(e.message);
    }
}

module.exports = database;
