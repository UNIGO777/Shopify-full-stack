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
    "shop_keeper_Id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "shopkeeper_model",
        required: true
    },
    "Stock": {
        type: Number,
        default: 0
    },
    "Description": String

    
})

let product_model = new mongoose.model('allProducts', productScema);

module.exports = product_model;