let express = require("express")
const router = express.Router()
const order = require("../model/shoporder");
const product_model = require('../model/productModel')


router.get("/orders", async (req, res) => {
    // Get all orders from the database and send them to the client side
    let allOrders = await order.find()
    if (!allOrders) console.log("nhi aya")
    let orderProduct = allOrders.map(async(item) => {
        return {
            product: await product_model.findById(item.orders.order),
            dateTime: item.Date
        }
    })
    
    Promise.all(orderProduct).then((resOP) => {
        res.send(resOP)
    })
    
})

module.exports = router