
let mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/shoppingsite");


let user = mongoose.Schema({
    ProfileUrl: {
        type: String,
        default: null
    },
    FullName: String,
    PhoneNo: Number,
    UserName: String,
    Email: String,
    Password: String
})

let users = mongoose.model('users', user);

module.exports = users;
