let mongoose = require('mongoose')

let productScema = new mongoose.Schema({
    "Name": {
        type: String,
        require: true
    },
    "Img": {
        type: String,
        require: true
    },
    "Category": {
        type: String,
        enum: ['MENS', 'WOMENS' , 'KIDS' , 'TOYS' , 'Electronic device']
    },
    "New_price": {
        type: Number,
        require: true
    },
    "Old_price": {
        type: Number,
        require: true
    },
    "Description": String

    
})

let product_model = new mongoose.model('allProducts', productScema);

module.exports = product_model;