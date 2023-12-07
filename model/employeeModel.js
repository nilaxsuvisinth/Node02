const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    productName: {
        required: true,
        type: String
    },
    qty: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('employee', dataSchema)