let express = require('express');
const product_model = require('../model/productModel');
let router = express.Router();



router.post('/add/new/product', async(req, res) => {
    let newPro = req.body;
    let newProduct = new product_model({
        "Name": req.body.Name,
        "Img": req.body.Img,
        "Category": req.body.Category,
        "New_price": req.body.New_price,
        "Old_price": req.body.Old_price,
        "shop_keeper_Id": req.body.shop_keeper_Id,
        "Stock": req.body.Stock
    })
    console.log(newProduct)
    await newProduct.save()
    res.send(newProduct)
})
router.get('/all/products', async(req, res) => {
    let allProducts = await product_model.find()
    res.send(allProducts)
})
router.get('/mens/product', async(req, res) => {
    let mensProducts = await product_model.find({Category: "MENS"})
    res.send(mensProducts)
})
router.get('/womens/product', async(req, res) => {
    let mensProducts = await product_model.find({Category: "WOMENS"})
    res.send(mensProducts)
})
router.get('/kids/product', async(req, res) => {
    let mensProducts = await product_model.find({Category: "KIDS"})
    res.send(mensProducts)
})
router.delete('/delete/products/:id', async(req, res) => {
    let allProducts = await product_model.findByIdAndDelete(req.params.id)
    res.send(allProducts)
})
router.post('/add/multiple_products',(req, res) => {
    let data = req.body
    data.map(async(item,i) => {
        let newProduct = new product_model({
            "Name": item.Name,
            "Img": item.Img,
            "Category": item.Category,
            "New_price": item.New_price,
            "Old_price": item.Old_price,
            "Description": item.Description

        })
        await newProduct.save()
    })
    res.status(200).send('done')
})

module.exports = router