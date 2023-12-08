// Imports the Express.js framework.
const express = require('express');

// Creates an instance of an Express router. 
// Routers are used to define groups of routes.
const router = express.Router()

// Exports the router instance, making it 
// accessible to other parts of the application when this file is imported.
module.exports = router;

// Imports a custom model (presumably a Mongoose schema/model) 
// used to interact with a specific MongoDB collection.
const Model = require('../model/model');

//  Imports another custom model (also presumably a Mongoose schema/model) 
//for a different MongoDB collection.
const ProductModel = require('../model/productmodel');


// ======================= Post Method=============================

// Defines a POST route at the path /post for handling incoming HTTP POST requests.
router.post('/post', async (req, res) => {
    // Creates a new instance of the Model (presumably representing a document in a MongoDB collection) 
    // using the request body's data.
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        // Saves the newly created data instance (Mongoose model instance) into the associated 
        // MongoDB collection using the .save() method. This is an asynchronous operation.
        const dataToSave = await data.save();
        // Sends a successful HTTP response (status code 200) with the saved data as a JSON response.
        res.status(200).json(dataToSave)
    }
    // Catches any errors that might occur during the process of saving the data and sends an error 
    // response (status code 400) along with an error message in JSON format.
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// =============================== product model ================================

router.post('/product', async (req, res) => {
    const datas = new ProductModel({
        productName: req.body.productName,
        qty: req.body.qty
    })

    try {
        const dataToSave = await datas.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

