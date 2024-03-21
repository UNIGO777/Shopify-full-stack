let mongoose = require('mongoose');


const Shopkeeperaccount = mongoose.Schema({
    "shopkeeperId": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "shopkeeper_model",
        required: true
    },
    "totalEarnings": {
        type: Number,
        default:0
    }, // Total earnings of the shopkeeper
    "pendingAmount":{
        type: Number,
        default:0
    }, // Amount pending to be paid to the shopkeeper
    "paymentHistory": [
        {
            "orderId": String, // Reference to the order identifier
            "amount": Number, // Amount paid or received
            "date": Date, // Date of the transaction
            "type": {
                
                    type: String,
                    enum: ["payment", "refund"]
                
            } // Type of transaction (e.g., "payment", "refund")
        }
    ],
})

let shopkeeperacmodel = new mongoose.model('shopkeeperAcc', Shopkeeperaccount);

module.exports = shopkeeperacmodel;