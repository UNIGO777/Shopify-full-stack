let mongoose = require('mongoose');




const ShopkeeperSchema = {
    profile: {
      type:String
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    fullName: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    address: {
      street: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      zipCode: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      }
    },
    shopName: {
      type: String,
      required: true
    },
    shopDescription: {
      type: String
    }
  };

let shopkeeper_model = mongoose.model('shopkeeper', ShopkeeperSchema);

module.exports = shopkeeper_model;