let express = require('express');
// const product_model = require('../model/productModel');
let router = express.Router();
let stripe = require('stripe')('sk_test_51Ot7zESIIVFXX4GU56gE69iWaITzDwL7iHeY4Uq8yuQbFO4Tl4PVUQOrTyzo6LP4y9L8TKjHHyxlQsFjTSCv0M4900EdpCozhA')



router.post('/payment', async (req, res) => {
    const { products } = req.body
    console.log(products)
    const lineItem = products.map((item) => ({
       
        price_data:{
        currency: "inr",
        product_data: {
            name: item.product.Name,
            images: [item.product.Img]
        },
            unit_amount: item.product.New_price * 100,
        },
        quantity:item.Quatity

    }))
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItem,
        mode: "payment",
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/fail",
    })
    
    res.json({id:session.id})

    

})

module.exports = router