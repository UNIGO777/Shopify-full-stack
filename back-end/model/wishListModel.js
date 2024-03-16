let mongoose = require('mongoose')

let wishlistScema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    productId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'product_model'
    }]
})

let wishlistModel = new mongoose.model('WishList', wishlistScema);

module.exports = wishlistModel;