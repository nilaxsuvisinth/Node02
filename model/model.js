// Imports the Mongoose library, which facilitates 
// interaction with MongoDB in Node.js applications.
const mongoose = require('mongoose');

// Defines a Mongoose schema for the 'data' model. 
// Mongoose schemas define the structure of documents within a MongoDB collection. 
// In this case, it defines the structure for a document in the 'Data' collection.
const dataSchema = new mongoose.Schema({
    // name and age are defined as fields within the schema:
    
    // name: Specifies a field named 'name'. It's defined as a String type and is marked 
    // as required (meaning this field must be provided when creating a new document).
    name: {
        required: true,
        type: String
    },
    // age: Specifies a field named 'age'. It's defined as a Number type and is also marked as required.
    age: {
        required: true,
        type: Number
    }
})

// Creates and exports a Mongoose model based on the defined schema. 
// This line combines the schema (dataSchema) with a model named 'Data'.
module.exports = mongoose.model('Data', dataSchema)

// 