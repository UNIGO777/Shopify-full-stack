let express = require('express');
let mongoose = require('mongoose');
let userRouter = require('./routes/user')
let productRouter = require('./routes/product')
let cartRouter = require('./routes/Cart')
let paymentRouter = require('./routes/payment')
let wishlistRouter = require('./routes/wishList')
let shopkeeperuserRouter = require('./routes/shopkeeperUser')
let orderRouter = require('./routes/Orders')
mongoose.connect("mongodb://127.0.0.1/shoppingsite");
let app = express();
let userModel = require('./model/userModel')
let bcrypt = require('bcrypt')
let cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extented: true }))
app.use(express.json())
app.get('/', (req, res) => {
    res.send('hllo')
})
app.use('/api', shopkeeperuserRouter)
app.use('/api', orderRouter)
app.use('/api', wishlistRouter)
app.use('/api', userRouter)
app.use('/api', productRouter)
app.use('/api', cartRouter)
app.use('/api', paymentRouter)



app.listen(4000, () => {
    console.log('hello')
})