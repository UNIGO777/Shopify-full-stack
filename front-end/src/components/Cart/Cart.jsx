import React, { useEffect, useState } from 'react'
import './cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import Item from '../products/Item';
import AllProducts from '../products/AllProducts';
import Vcard from '../productverticalcard/Vcard';
import { useNavigate } from 'react-router-dom';
// import {razorpay} from 'razorpay';
import { loadStripe } from '@stripe/stripe-js'



const Cart = (props) => {
  // console.log(props)
  const [cartdata, setcd] = useState([]);
  const [key, setkey] = useState(0)
  const navigate = useNavigate()
  // add item to cart
  // console.log(props.id)
  const[totalprice,settotal] = useState(0)
  useEffect(() => {
    async function fatchcartdata() {
      
      
      await axios.post("http://localhost:4000/api/cart", { userId: props.id }).then((res) => {
        // console.log(res, "this is the response")
        setcd(res.data)
        console.log(res.data)
        
        res.data.map((item) => {
          settotal(0)
          const newQuatity =  res.data.reduce((acc, item) =>
          acc +  (parseInt(item.Quatity, 10) * parseInt(item.product.New_price, 10)), 0) 
          settotal(newQuatity)
          
          
        })
        
      })
      
    }
    fatchcartdata()
    
  }, [key])
  const user = JSON.parse(localStorage.getItem("UserData"))
  const userID = user.id
  // console.log(productInfo.objId);

  let clickaddCart = async function (productInfo) {
    await axios.post("http://localhost:4000/api/addProductInCart", { productId: productInfo._id, userId: userID }).then((res) => {
      // console.log(res)
      setkey(key=>key+1)
      
    }).catch((err)=>{console.error(err)})
  }
  let clickdeleteCart = async function (productInfo) {
    await axios.post("http://localhost:4000/api/deleteProductInCart", { productId: productInfo._id, userId: userID }).then((res) => {
      // console.log(res)
      setkey(key=>key+1)
      
    }).catch((err)=>{console.error(err)})
  }

  // console.log(cartdata)
  // let hendlechakeout = async() => {
    
  //     await axios.post('http://localhost:4000/api/payment', { price: totalprice }).then((res) => {
  //       var options = {
  //         "key": "" + res.data.key_id + "",
  //         "amount": res.data.amount,
  //         "currency": "INR",
  //         "name": "" + res.data.name + "",
  //         "description": res.data.description,
  //         "image": "https://images.unsplash.com/photo-1709653688483-fc2b356c1f36?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //         "order_id": res.data.order_id,
  //         "hendler": function () {
  //           alert("ho gaya")
  //         },
  //         "prefill": {
  //           "contact":res.data.contact,
  //           "name":res.data.name,
  //           "email":res.data.email
  //         },
  //         "notes": {
  //           "description": res.data.description
  //         },
  //         "theme": {
  //           "color":"#2300a3"
  //         }

  //       }
  //       // var razorpay = new 
        
  //     }).catch((err) => {
  //       console.log(err)
  //     })
    
  // }
  
  


  const hendlechakeout = async function () {
    const Stripe = await loadStripe("pk_test_51Ot7zESIIVFXX4GU36WHyyo3C4ERoylV77FpOHoXTfIKgcT21TWRuvazdn27hxTdThb9MZubOqgM70lA5khAyA2I00aDFpU8kM")
    console.log("sessssssssss")
    const body = {
      products: cartdata
    }
    const headers = {
      "Content-Type":"application/json"
    }
    const res = await fetch("http://localhost:4000/api/payment", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })
    const session = await res.json()
    const result = Stripe.redirectToCheckout({
      
      sessionId: session.id
    })

    if ((await result).error) {
      alert((await result).error)
    }
    
  }
  return (
    <>
      <div >
          {
              cartdata.length <= 0 ? (<div className='empty-cart-div'><FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{ fontSize: "2em", color:"black" }}/>
          <p style={{ fontSize: "0.5em", marginTop: "20px", color: "black" }}><b>YOUR CART IS EMPTY</b></p></div>) : (<>
            
            {/* <div className="container" > */}
            {/* <AllProducts data={cartdata} name='cart' /> */}
            {
                cartdata.map((item) => {
                  console.log(item,"9999999999999")
                  
                  return (
                    
                  <>
                      <Vcard data={item} Quatity={item.Quatity} clickaddCart={clickaddCart} clickdeleteCart={clickdeleteCart } />
                    <br />
                  </>
                )
              })
              }
              <button className='rounded btn btn-primary' style={{
                marginBottom: "10px", width: "100%",
                position: "sticky", bottom: "10px",
                
              }}
              onClick={hendlechakeout}
              >Check out : {totalprice} $</button>
            {/* </div> */}
          </>)
      }
      
          </div>
    </>
  )
}

export default Cart