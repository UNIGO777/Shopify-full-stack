import React from 'react'
// import tailwindConfig from '../tailwind.config'
import Navbar from './components/navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/login'
import Singup from './pages/Signup'
import Home from './pages/Home'
import MensProducts from './components/products/Mensproducts'
import Profile from './pages/Profile'
import AddProduct from './components/AddProductForm/AddProduct'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import EditProfile from './pages/EditProfile'
import ProductInfo from './components/productInfo/ProductInfo'
import CheckOut from './components/checkOut/CheckOut'
import WomensProduct from './components/products/WomensPopuler'
import KidsProducts from './components/products/KidsProduct'
import Success from './components/paymentPages/Success'
import Fail from './components/paymentPages/Fail'
// import Lendingpage from './updated lending page/Lendingpage'


library.add( fas);

const App = () => {
  let data = localStorage.getItem("UserData") 
  return (
    <>
      
      {/* <Navbar/> */}
       <Routes >
      {/* <Route path='/' element={<Navbar/>}></Route> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={!data?<Login/>:<Home/>}></Route>
        <Route path='/signup' element={!data?<Singup />:<Home/>}></Route>
        <Route path='/mens' element={<MensProducts/>} />
        <Route path='/profile' element={data?<Profile/>:<Home/>} />
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/editprofile' element={data?<EditProfile/>:<Home/>}/>
        <Route path='/productprofile' element={<ProductInfo/>} />
        <Route path='/checkout' element={data?<CheckOut />:<Home/>} />
        <Route path='/womens' element={<WomensProduct />} />
        <Route path='/kids' element={<KidsProducts />} />
        <Route path='/success' element={data?<Success />:<Home/>} />
        <Route path='/fail' element={data?<Fail />:<Home/>} />
        {/* <Route path='/lending' element={<Lendingpage />} /> */}
        
        
    
      </Routes> 
    </>
  )
}

export default App

