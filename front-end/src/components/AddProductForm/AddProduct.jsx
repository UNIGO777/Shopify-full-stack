import React, { useState } from 'react'
import './AddProduct.css'
import Button from '../button/button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://upmarhtkvbgmavnpuxau.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwbWFyaHRrdmJnbWF2bnB1eGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NTk3NjYsImV4cCI6MjAyNTAzNTc2Nn0.df-sHkeH9knxEvbL1KPWzBJOHX2s4KUT4fgTRJjNZyM'
const supabase = createClient(supabaseUrl, supabaseKey)

const AddProduct = () => {
  const [fromData, setfromData] = useState({
    Name: '',
    Img: '',
    Description: '',
    Category: '',
    New_price: null,
    Old_price: null
  })
  const [ftval, setftval] = useState(false);
  const [img, setimg] = useState('')
  let hendleImageChange = function (e) {  
    e.preventDefault()
    const file = e.target.files[0]
    setimg(e.target.files[0]);
    if (file) {

      const reader = new FileReader();
      reader.onloadend = () => {
        setfromData({ ...fromData, Img: reader.result });

      }
      reader.readAsDataURL(file)



    }
    else {
      setfromData.Img('');
    }


  }
  let hendleChange = function (e) {
    setfromData({
      ...fromData,
      [e.target.name]: e.target.value
    })
  }
  let navigate = useNavigate();
  let hendleSubmit = async function (e) {
    e.preventDefault()
    const { imgdata, error } = await supabase.storage.from('product_imgs').upload('/products_img/' + img.name, img)
    if (error) {
      console.log(error);
    }
    const imgurl = `${supabaseUrl}/storage/v1/object/public/product_imgs/products_img/${img.name}`
    console.log(imgurl)
    let data = axios.post('http://localhost:4000/api/add/new/product', { ...fromData, Img: imgurl }).then(Response => {
      // console.log(Response)
      setftval(true);

    }).catch(err => {
      console.log(err)
    })


  }
  return (
    <>{
       ftval ? (<>
    <div className="successfull-div">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
        <path fill="#c7ede6" d="M87.7,55.7c0.3-0.6,0.6-1.3,0.8-1.9c2.6-7.8-1.3-17.1-9.7-19.3C77.9,23,69.9,15.2,60.8,13.9 c-10.3-1.5-19.8,5-23,15.5c-3.8-1.3-7.5-1.2-11,0.9c-1.6,0.7-3,1.8-4.3,3.2c-1.9,2.1-3.1,4.7-3.7,7.5c-0.7,0.1-1.5,0.2-2.2,0.5 c-4,1.4-6.6,4.4-7.3,8.9c-0.4,2.8,0.4,5.6,0.9,6.7c1.9,4.5,6.4,7,11,6.3c0.2,0,0.6,0.1,0.8,0.2c0.2,7.1,3.7,13.4,8.9,17 c8.3,5.8,19,4,25.8-3.9c2.9,3,6.3,4.4,10.4,3.9c4-0.5,7.1-2.7,9.4-6.3c1.1,0.3,2.1,0.7,3.1,0.8c4,0.4,7.3-1.2,9.7-4.8 c0.9-1.4,1.8-3.2,1.8-6.4C91.2,60.6,89.9,57.7,87.7,55.7z"></path><path fill="#fff" d="M36.4,78h-9.9c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h9.9c0.3,0,0.5,0.2,0.5,0.5S36.7,78,36.4,78z"></path><path fill="#fff" d="M39.5,78h-1c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h1c0.3,0,0.5,0.2,0.5,0.5S39.8,78,39.5,78z"></path><path fill="#fff" d="M44.5,80h-9c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h9c0.3,0,0.5,0.2,0.5,0.5S44.8,80,44.5,80z"></path><path fill="#fff" d="M33.5,80h-1c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h1c0.3,0,0.5,0.2,0.5,0.5S33.8,80,33.5,80z"></path><path fill="#fff" d="M30.5,80h-2c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h2c0.3,0,0.5,0.2,0.5,0.5S30.8,80,30.5,80z"></path><path fill="#fff" d="M36.5,82h-2c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h2c0.3,0,0.5,0.2,0.5,0.5S36.8,82,36.5,82z"></path><path fill="#fff" d="M39.5,73c-0.2,0-0.8,0-1,0c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5c0.2,0,0.8,0,1,0c0.3,0,0.5-0.2,0.5-0.5 S39.8,73,39.5,73z"></path><path fill="#fff" d="M39.5,75c-0.2,0-4.8,0-5,0c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5c0.2,0,4.8,0,5,0c0.3,0,0.5-0.2,0.5-0.5 S39.8,75,39.5,75z"></path><path fill="#fff" d="M44.5,77c-0.2,0-2.8,0-3,0c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5c0.2,0,2.8,0,3,0c0.3,0,0.5-0.2,0.5-0.5 S44.8,77,44.5,77z"></path><g><path fill="#fff" d="M71.5,24h-10c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h10c0.3,0,0.5,0.2,0.5,0.5S71.8,24,71.5,24z"></path><path fill="#fff" d="M75.5,24h-2c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h2c0.3,0,0.5,0.2,0.5,0.5S75.8,24,75.5,24z"></path><path fill="#fff" d="M80.5,26h-10c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h10c0.3,0,0.5,0.2,0.5,0.5S80.8,26,80.5,26z"></path><path fill="#fff" d="M68.5,26h-1c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h1c0.3,0,0.5,0.2,0.5,0.5S68.8,26,68.5,26z"></path><path fill="#fff" d="M65.4,26h-1.9c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h1.9c0.3,0,0.5,0.2,0.5,0.5S65.7,26,65.4,26z"></path><path fill="#fff" d="M74.5,22h-5c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h5c0.3,0,0.5,0.2,0.5,0.5S74.8,22,74.5,22z"></path><path fill="#fff" d="M71.5,28h-2c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h2c0.3,0,0.5,0.2,0.5,0.5S71.8,28,71.5,28z"></path></g><g><path fill="#fdfcef" d="M36.7,38.4c0,0-10.6,0-10.7,0c-2.5,0-4.4-2-4.4-4.4c0-2.1,1.5-3.9,3.5-4.3c0-0.2,0-0.4,0-0.6 c0-2.5,2.1-4.6,4.6-4.6c1.5,0,2.8,0.7,3.7,1.8c0.2-2.8,2.7-5,5.7-4.6c2.2,0.3,3.9,1.9,4.3,4.1c0.1,0.7,0.1,1.4,0,2 c0.6-0.6,1.4-1,2.3-1c1.7,0,3.1,1.3,3.2,3c0.8-0.2,1.6-0.2,2.5,0.2c1.7,0.6,2.9,2.2,2.9,4c0.1,2.5-1.9,4.6-4.4,4.6 c-0.2,0-0.9,0-1,0h-9.2"></path><path fill="#472b29" d="M26.1,38.9h10.7c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5H26.1c-2.2,0-3.9-1.8-3.9-3.9c0-1.9,1.3-3.5,3.1-3.9 c0.3-0.1,0.4-0.3,0.4-0.5c0-0.2,0-0.3,0-0.5c0-2.3,1.8-4.1,4.1-4.1c1.3,0,2.5,0.6,3.3,1.6c0.1,0.2,0.3,0.2,0.5,0.2 c0.2-0.1,0.3-0.2,0.4-0.4c0.1-1.2,0.7-2.4,1.7-3.2c1-0.8,2.2-1.1,3.5-1c1.9,0.2,3.6,1.7,3.9,3.7c0.1,0.6,0.1,1.2,0,1.8 c0,0.2,0.1,0.4,0.3,0.5c0.2,0.1,0.4,0.1,0.6-0.1c0.5-0.6,1.2-0.9,2-0.9c1.4,0,2.6,1.1,2.7,2.5c0,0.1,0.1,0.3,0.2,0.4 s0.3,0.1,0.4,0.1c0.8-0.2,1.5-0.1,2.2,0.1c1.5,0.6,2.5,2,2.6,3.5c0,1.1-0.3,2.1-1.1,2.9c-0.8,0.8-1.8,1.2-2.8,1.2H39.6 c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h10.2c1.4,0,2.6-0.5,3.6-1.5c0.9-1,1.4-2.3,1.4-3.6c-0.1-1.9-1.4-3.7-3.3-4.4 c-0.7-0.3-1.5-0.4-2.2-0.3c-0.4-1.7-1.8-2.9-3.6-2.9c-0.6,0-1.2,0.2-1.7,0.4c0-0.3,0-0.7-0.1-1c-0.4-2.3-2.4-4.2-4.8-4.5 c-1.5-0.2-3,0.2-4.2,1.2c-0.9,0.7-1.5,1.7-1.8,2.9C32.1,24.4,31,24,29.7,24c-2.8,0-5.1,2.3-5.1,5.1c0,0.1,0,0.1,0,0.2 c-2,0.6-3.5,2.5-3.5,4.7C21.1,36.7,23.3,38.9,26.1,38.9z"></path><path fill="#fdfcef" d="M39.3,28.7c1.6-0.1,3.1,1,3.2,2.5c0,0.2,0,0.4,0,0.5c0.3-0.4,0.8-0.6,1.3-0.6c1-0.1,1.8,0.6,2,1.5 c0.2,0,0.4-0.1,0.6-0.1c1.4-0.1,2.7,0.9,2.8,2.2"></path><path fill="#472b29" d="M49.1,34.9C49.1,34.9,49.1,34.9,49.1,34.9c0.2,0,0.3-0.1,0.2-0.3c-0.1-1.5-1.5-2.6-3-2.4c-0.1,0-0.2,0-0.4,0 c-0.3-0.9-1.2-1.5-2.2-1.4c-0.4,0-0.7,0.1-1,0.3c0,0,0,0,0,0c-0.1-1.6-1.7-2.9-3.4-2.8c-0.1,0-0.2,0.1-0.2,0.3s0.1,0.2,0.3,0.2 c1.5-0.1,2.8,0.9,2.9,2.3c0,0.2,0,0.3,0,0.5c0,0.1,0,0.2,0.1,0.3c0.1,0,0.2,0,0.3-0.1c0.3-0.3,0.7-0.5,1.2-0.6 c0.8-0.1,1.6,0.5,1.7,1.3c0,0.1,0,0.1,0.1,0.2c0.1,0,0.1,0.1,0.2,0c0.2,0,0.3-0.1,0.5-0.1c1.3-0.1,2.4,0.8,2.5,2 C48.8,34.8,48.9,34.9,49.1,34.9z"></path><path fill="#fdfcef" d="M24.3,30.2c1.5-0.7,3.3-0.2,4,1.1c0.1,0.2,0.1,0.3,0.2,0.5"></path><path fill="#472b29" d="M28.4,32.1C28.5,32.1,28.5,32.1,28.4,32.1c0.2,0,0.3-0.2,0.2-0.3c0-0.2-0.1-0.4-0.2-0.6 c-0.7-1.5-2.7-2.1-4.3-1.3C24,30,24,30.1,24,30.3c0.1,0.1,0.2,0.2,0.3,0.1c1.4-0.7,3.1-0.2,3.7,1c0.1,0.1,0.1,0.3,0.2,0.5 C28.2,32,28.3,32.1,28.4,32.1z"></path></g><g><path fill="#fdfcef" d="M84.1,63.5c1.7,0,3.2,0,3.2,0c1.9,0,3.5-1.5,3.5-3.4c0-1.6-1.2-3-2.8-3.3c0-0.1,0-0.3,0-0.4 c0-1.9-1.6-3.5-3.6-3.5c-1.2,0-2.2,0.6-2.9,1.4c-0.2-2.2-2.1-3.8-4.4-3.6c-1.7,0.2-3.1,1.5-3.4,3.1c-0.1,0.5-0.1,1,0,1.5 c-0.5-0.5-1.1-0.8-1.8-0.8c-1.3,0-2.4,1-2.5,2.3c-0.6-0.1-1.2-0.1-1.9,0.1c-1.3,0.5-2.2,1.7-2.3,3c-0.1,1.9,1.5,3.5,3.5,3.5 c0.1,0,0.7,0,0.8,0h7.2 M78.2,63.5h0.3"></path><path fill="#472b29" d="M87.3,64h-3.2c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h3.2c1.6,0,3-1.3,3-2.9c0-1.4-1-2.6-2.4-2.8 c-0.3-0.1-0.4-0.3-0.4-0.6c0-0.1,0-0.2,0-0.4c0-1.7-1.4-3-3.1-3c-1,0-1.9,0.4-2.5,1.2c-0.1,0.2-0.3,0.2-0.5,0.2 c-0.2-0.1-0.3-0.2-0.4-0.4c-0.1-0.9-0.5-1.7-1.2-2.3c-0.7-0.6-1.7-0.9-2.7-0.8c-1.5,0.2-2.7,1.3-3,2.7c-0.1,0.4-0.1,0.9,0,1.3 c0,0.2-0.1,0.4-0.3,0.5c-0.2,0.1-0.4,0.1-0.6-0.1C73,55.2,72.5,55,72,55c-1,0-1.9,0.8-2,1.8c0,0.1-0.1,0.3-0.2,0.4 s-0.3,0.1-0.4,0.1c-0.6-0.1-1.1-0.1-1.7,0.1c-1.1,0.4-1.9,1.5-2,2.6c0,0.8,0.3,1.5,0.8,2.1c0.6,0.6,1.3,0.9,2.2,0.9h8 c0.3,0,0.5,0.2,0.5,0.5S77,64,76.8,64h-8c-1.1,0-2.1-0.4-2.9-1.2c-0.7-0.8-1.1-1.8-1.1-2.8c0.1-1.5,1.1-2.9,2.6-3.5 c0.5-0.2,1.1-0.3,1.7-0.2c0.3-1.3,1.5-2.2,2.9-2.2c0.4,0,0.9,0.1,1.2,0.3c0-0.2,0-0.4,0.1-0.6c0.3-1.8,1.9-3.3,3.8-3.5 c1.2-0.1,2.5,0.2,3.4,1c0.7,0.5,1.1,1.3,1.4,2c0.7-0.6,1.6-0.9,2.6-0.9c2.3,0,4.1,1.8,4.1,4c0,0,0,0,0,0.1c1.6,0.5,2.7,2,2.7,3.7 C91.3,62.2,89.5,64,87.3,64z M78.6,64h-0.3c-0.3,0-0.5-0.2-0.5-0.5S78,63,78.2,63h0.3c0.3,0,0.5,0.2,0.5,0.5S78.8,64,78.6,64z"></path><path fill="#472b29" d="M85.8,58.7C85.8,58.7,85.8,58.7,85.8,58.7c-0.2,0-0.3-0.2-0.2-0.3c0-0.2,0.1-0.3,0.2-0.4 c0.6-1.1,2.1-1.5,3.4-0.9c0.1,0.1,0.2,0.2,0.1,0.3s-0.2,0.2-0.3,0.1c-1.1-0.5-2.3-0.2-2.8,0.7c-0.1,0.1-0.1,0.2-0.1,0.3 C86,58.6,85.9,58.7,85.8,58.7z"></path><path fill="#472b29" d="M81.1,64h-1c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h1c0.3,0,0.5,0.2,0.5,0.5S81.4,64,81.1,64z"></path></g><g><path fill="#88ae45" stroke="#472b29" stroke-miterlimit="10" stroke-width="1.4" d="M43,70c0,0-0.1,0-0.1,0c-0.9,0-1.7-0.5-2.2-1.1l-11-14c-1-1.3-0.8-3.2,0.5-4.2c1.3-1,3.2-0.8,4.2,0.5 l8.8,11.2L69.8,34c1.1-1.2,3-1.3,4.2-0.1c1.2,1.1,1.3,3,0.1,4.2l-29,31C44.6,69.7,43.8,70,43,70z"></path><path fill="#472b29" d="M66.2,42c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.2,0-0.3l5.1-5.5c0.1-0.1,0.2-0.1,0.3,0c0.1,0.1,0.1,0.2,0,0.3 L66.4,42C66.4,42,66.3,42,66.2,42z"></path><path fill="#472b29" d="M61.9,46.7c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.2,0-0.3l2.7-2.9c0.1-0.1,0.2-0.1,0.3,0 c0.1,0.1,0.1,0.2,0,0.3l-2.7,2.9C62,46.7,62,46.7,61.9,46.7z"></path><path fill="#472b29" d="M43.1,67c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.2,0-0.3l16.3-17.5c0.1-0.1,0.2-0.1,0.3,0 c0.1,0.1,0.1,0.2,0,0.3L43.3,66.9C43.2,67,43.1,67,43.1,67z"></path></g>
      </svg>
          <h1>Successfully added product!</h1>
      <button className='btn btn-success' style={{ width: "auto", marginTop: "10px" }} onClick={() => {
        navigate("/")
      }}>
      
            
             
              <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Back to home
            
          
          </button>
    </div>
     </>) : (<>
   <div className='add-product-main'>
     <div className="add-product-secondry">
       <h1 id='add-product-heading'>Add New Product</h1>
       <br />
       <br />
       <div className="add-product-form-div">
         <form className='mainForm' onSubmit={hendleSubmit} >

           <div className="formLeft"><label id='categoryHeading'>Choose category</label>

                    <select name="Category" id="category" onChange={hendleChange} value={fromData.Category} required >
               
               <option value="SELECT">SELECT</option>
               <option value="WOMENS">WOMENS</option>
               <option value="MENS">MENS</option>
               <option value="KIDS">KIDS</option>
               <option value="TOY">TOY</option>
               <option value="ELECTRONIC DEVICE">MENS</option>
             </select>

             <label id='form-img-heading'>Select image</label>
             <input type="file" accept="image/*" id='image-input' onChange={hendleImageChange} name='Img' required/>

             <div className="uplodedImage">
               <img className='upimg' src={fromData.Img} />
             </div></div>
           <div className="formRight">
             <div id="productName-div" className='add-product-RightForm-div' ><label id='heading'>Product Name</label>
               <input type="text" value={fromData.Name} onChange={hendleChange} id="productname" className='product-input-fild' placeholder='Product name' name='Name' required/></div>
             <div className='add-product-RightForm-div' id="marketPrice-div"><label id='heading'>Market Price</label>
               <input type="number" value={fromData.Old_price } onChange={hendleChange} id="marketPrice" className='product-input-fild' placeholder='Market price' name='Old_price' required/></div>
             <div className='add-product-RightForm-div' id="mainPrice-div"><label id='heading'>Main Price</label>
               <input type="number" value={fromData.New_price} onChange={hendleChange} min='10' id="mainPrice" className='product-input-fild' placeholder='Main price' name='New_price' required/></div>
             <div className='add-product-RightForm-div' id="mainPrice-div"><label id='heading'>Description</label>
               <input type="Text" value={fromData.Description} onChange={hendleChange} min='10' id="mainPrice" className='product-input-fild' placeholder='Description' name='Description' required /></div>
             <button data="SUBMIT" type="submit" className="btn btn-primary" style={{width:"auto"}}>Add product</button>

           </div>
         </form>
       </div>
     </div>
         </div>
       </>)
   }</>  
  )
}

export default AddProduct