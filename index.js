// This line loads the dotenv module and invokes its config() function. 
//This sets up the environment variables specified in a .env file (not shown in this snippet) 
//to be accessible through process.env.
require('dotenv').config();

// Imports the Express.js framework, allowing you to create a web server and define routes.
const express = require('express');

// Imports Mongoose, an Object Data Modeling (ODM) 
// library for MongoDB, enabling interaction with MongoDB databases in an easier way.
const mongoose = require('mongoose');

// Imports the routes defined in the routes.js file (located in a directory named routes).
const routes = require('./routes/routes');

// Creates an instance of an Express application.
const app = express();

// Configures the Express app to parse incoming requests with JSON payloads. 
// This line enables the application to understand JSON data sent in HTTP requests.
app.use(express.json());

// Mounts the routes defined in the routes.js file under the /api path. 
// For example, if a route in routes.js is defined as /users, it will be accessible as /api/users.
app.use('/api', routes)

// Retrieves the value of the DATABASE_URL environment variable stored in the .env file, 
//which presumably contains the connection string for MongoDB.
const mongoString = process.env.DATABASE_URL;

//  Establishes a connection to the MongoDB database using the connection string 
// retrieved from the DATABASE_URL environment variable.
mongoose.connect(mongoString);

// Creates a reference to the MongoDB connection.
const database = mongoose.connection;

// Sets up an error event listener for the MongoDB connection. 
// If an error occurs during the connection process, it will be logged to the console.
database.on('error', (error) => {
    console.log(error)
})

// Sets up a one-time event listener for when the MongoDB connection is successfully established. 
// It logs a message to the console indicating that the database connection has been made.
database.once('connected', () => {
    console.log('Database Connected');
})

// Starts the Express app and listens on port 3002 for incoming HTTP requests. 
// When the server starts successfully, it logs a message to the console.
app.listen(3002, () => {
    console.log(`Server Started at ${3002}`)
})





