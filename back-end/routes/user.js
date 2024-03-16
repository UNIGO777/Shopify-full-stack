let express = require('express')
let router = express.Router()
let bcrypt = require('bcrypt')
let userModel = require('../model/userModel')
const cartModel = require('../model/cartModel')

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
let jwt = require('jsonwebtoken')

router.post('/signup', async (req, res) => {
    let userdata = req.body
    let finduser = await userModel.findOne({Email: userdata.Email})
    if (finduser) {
        
        res.send({error:'user alrady exist'})
    }
    else {
        userdata.Password = await bcrypt.hash(userdata.Password, 10)
        let user = new userModel({
            FullName: userdata.FullName,
            PhoneNo: userdata.PhoneNo,
            UserName: userdata.UserName,
            Email: userdata.Email,
            Password: userdata.Password
        })
        console.log(user)
        await user.save();
        let CartModel = new cartModel({
            userId: user._id
        })
        await CartModel.save()
        res.send('/profile');
    }
    
})
router.post('/login', async(req, res) => {
    let userdata = req.body
    // console.log(userdata, "password")
    let finduser = await userModel.findOne({Email: userdata.Email})
    if (!finduser) {
        res.status(404).send({err:'user data invalid'})
    }
    else {
        let passwordCom = await bcrypt.compare(userdata.Password, finduser.Password)
            .catch((err) => {
            console.log(err)
            })
        if (passwordCom) {
            let data = JSON.stringify(userdata.Email)
            let token = jwt.sign(data, 'jsdfhasjhdsldvbj')
            let UserDetails = {
                FullName: finduser.FullName,
                PhoneNo: finduser.PhoneNo,
                UserName: finduser.UserName,
                Email: finduser.Email,
                Token: token,
                ProfileUrl: finduser.ProfileUrl,
                id: finduser._id
            }
            
            
            res.status(200).send({UserDetails})
        }
        else {
            res.send("password invalid")
        }
    }
    
})
router.post('/update', async(req, res) => {
    let userdata = req.body
    let user = await userModel.findOne({ Email: userdata.Email })
    user.FullName = userdata.FullName;
    user.PhoneNo = userdata.PhoneNo;
    user.UserName = userdata.UserName;
    const updateduser = await user.save();
    console.log(updateduser)
    res.status(200).send(updateduser);

})
router.post('/updateprofile', async (req, res) => {
    let data = req.body
    // console.log(data)
    let finduser = await userModel.findOne({ Email: data.Email })
    if (!finduser) {
        res.status(404).send(ErrorMessage.userNotFound)
    }
    finduser.ProfileUrl = data.profileUrl
    await  finduser.save()
    res.status(201).send(finduser.ProfileUrl)

})

module.exports = router;