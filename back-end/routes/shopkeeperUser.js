const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const Shopkeeper = require('../model/shopkeeper');

const Order = require('../model/shoporder');
const shopkeeperaccmodel = require("../model/ShopkeeperAccount");

// Route for shopkeeper signup
router.post('/shopkeepersignup', async (req, res) => {
  const { formData,address } = req.body;
  const {username, password, email, fullName, phoneNumber,shopName,shopDescription} = formData
  
  
  
    // Check if the username or email is already taken
    const existingShopkeeper = await Shopkeeper.findOne({ $or: [{ username }, { email }] });
    if (existingShopkeeper) {
      return res.status(400).json({ message: 'Username or email already exists.' });
    }
  
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds
  
      // Create a new shopkeeper document with hashed password
      const newShopkeeper = new Shopkeeper({
        username,
      password:hashedPassword,
      email,
      fullName,
      phoneNumber,
      address,
      shopName,
      shopDescription
      });
  
      // Save the shopkeeper document
      await newShopkeeper.save();
  
      // Create a new account document for the shopkeeper
      const newAccount = new shopkeeperaccmodel({ shopkeeperId: newShopkeeper._id });
  
      // Save the account document
      await newAccount.save();
      const neworder = new Order({ shopkeeperId: newShopkeeper._id });
  
      // Save the account document
      await neworder.save();
  
      // Return success message
      res.status(201).json({ message: 'Shopkeeper account created successfully.', shopkeeper: newShopkeeper });
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
});

router.post('/shopkeeperlogin', async (req, res) => {
    const { email, password } = req.body;
    // console.log(email,password)
    // Find the user by username
    const user = await Shopkeeper.findOne({email:email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }
    console.log(user)
  
    try {
      // Compare the provided password with the hashed password
      const passwordMatch =  bcrypt.compare(user.password, password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid username or password.' });
      }
  
      // Return user details
      res.status(200).json({ message: 'Login successful.', user });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  });
  
module.exports = router
