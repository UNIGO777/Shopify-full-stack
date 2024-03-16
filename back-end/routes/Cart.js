const express = require('express')
const cartModel = require('../model/cartModel')
const product_model = require('../model/productModel')
const users = require('../model/userModel')
const { default: mongoose } = require('mongoose')
const router = express.Router()

router.post("/addProductInCart", async (req, res) => {
    let data = req.body

    let cart = await cartModel.findOne({ userId: data.userId });
    if (!cart) {  //if there is no cart for this user then create a new one
        res.status(404).send("not found user not exist")
    }
    let Product = await product_model.findOne({ _id: data.productId });
    
    if (!Product) res.status(404).send("No such product exists in the database.");
    let productIndex = cart.products.findIndex(val => val.productId == data.productId)
    if (productIndex > -1) cart.products[productIndex].Quatity += 1;
    else{
    cart.products.push({
        productId: Product._id
    })}
    await cart.save();
    res.status(201).send("danadone")
})
router.post("/deleteProductInCart", async (req, res) => {
    let data = req.body

    let cart = await cartModel.findOne({ userId: data.userId });
    if (!cart) {  //if there is no cart for this user then create a new one
        res.status(404).send("not found user not exist")
    }
    let Product = await product_model.findOne({ _id: data.productId });
    
    if (!Product) res.status(404).send("No such product exists in the database.");
    let productIndex = cart.products.findIndex(val => val.productId == data.productId)
    if (cart.products[productIndex].Quatity > 1) cart.products[productIndex].Quatity -= 1;
    else {
        const updatedCart = await cartModel.findOneAndUpdate({ "userId": data.userId }, {
            $pull: { products:{ productId: data.productId} }
        })
        
            
    }
    await cart.save();
    res.status(201).send("danadone")
})
router.post("/cart", async (req, res) => {
    console.log("hello")
    let data = req.body
    
    let cart = await cartModel.findOne({ userId: data.userId });
    if (!cart) {  //if there is no cart for this user then create a new one
        res.status(404).send("not found user not exist")
    }
    
    const arr = cart.products.map(async(item)=> {
        return {
            product : await product_model.findById(item.productId),
            Quatity : item.Quatity
        }
        
    })
    
    
    
    res.status(201).send(await Promise.all(arr))
    

})



module.exports = router

