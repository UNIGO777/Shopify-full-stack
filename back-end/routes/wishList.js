let express = require('express');
const product_model = require('../model/productModel');
const userModel = require('../model/userModel')
const wishListModel = require('../model/wishListModel')
let router = express.Router();

router.post('/add/product/wishlist', async (req, res) => {
    let info = req.body
    let user = await userModel.findById(info.userId)
    if (!user) {
        res.status(404).send("User not found if you are not loged in please login")
    }
    let product = await product_model.findById(info.productId)
    if (!product) res.status(404).send("Product not found")
    let wishList = await wishListModel.findOne({ userId: info.userId })
    if (wishList) {
        let wishListProduct = await wishListModel.findOne({ productId: product._id })
        if (wishListProduct) res.status(400).send({ msg: "product already in wishlist" })
        else {
            wishList.productId.push(product._id)
            await wishList.save()
            res.send("hao")
        }
    }
    else {
        let newWishlist = new wishListModel({
            userId: user._id,
            productId: product._id
        })
        await newWishlist.save()
        res.status(201).send("All Done")
    }


})
router.post('/product/isInWishlist', async (req, res) => {
    try {
        let info = req.body;
        let user = await userModel.findById(info.userId);
        if (!user) {
            return res.status(404).send("User not found. If you are not logged in, please login.");
        } else {
            let product = await product_model.findById(info.productId); // Assuming you have a ProductModel defined
            if (!product) {
                return res.status(404).send("Product not found.");
            } else {
                let wishList = await wishListModel.findOne({ userId: info.userId });
                if (wishList) {
                    let wishListProduct = await wishListModel.findOne({ productId: product._id });
                    if (wishListProduct) {
                        return res.status(200).send(true);
                    } else {
                        return res.status(200).send(false);
                    }
                } else {
                    return res.status(200).send(false);
                }
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error.");
    }
});
router.post('/getWishlist', async (req, res) => {
    try {
        // console.log("hiiiii/ii")
        let info = req.body;
        let user = await userModel.findById(info.userId);
        if (!user) {
            return res.status(404).send("User not found. If you are not logged in, please login.");
        } else {

            let wishList = await wishListModel.findOne({ userId: info.userId });
            if (!wishList) {
                return res.status(400).send("wishlist not found");
            }
            else {
                let arr = await Promise.all(wishList.productId.map(async(id) => {
                    return await product_model.findById(id)
                }))
                res.status(201).send(arr)
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error.");
    }
});


module.exports = router