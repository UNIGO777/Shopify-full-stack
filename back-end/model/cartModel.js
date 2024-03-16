let mongoose = require("mongoose")

let cart = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    products: [
        {
            productId: String,
            Quatity: {
                type: Number,
                default:1
            }
            
        
        }
    ],
})

let cartModel = mongoose.model("carts", cart);

module.exports = cartModel;

// for add a product to the users shopping cart 