let mongoose = require("mongoose")

let orderScema = mongoose.Schema({
    "shopkeeperId": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "shopkeeper_model",
        
    },
    "orders": [
        {
            "order": {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product_model",
                required: true
            },
            "Date": {
                type: Date,
                default: new Date()
            }
        }
    ]

})
let order_model = new mongoose.model('order', orderScema);
module.exports = order_model;