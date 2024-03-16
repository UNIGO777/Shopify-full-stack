import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Popup from '../popup/Popup';
import Navbar from "../navbar/Navbar";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './productInfo.css'


const ProductInfo = (props) => {
    const location = useLocation()
  const productInfo = location.state;
  // console.log(productInfo)
  const user = JSON.parse(localStorage.getItem("UserData"))
  const [likebutton,setlikebutton] = useState(false)
  const [EffectCount,setEffectCount] = useState(0)
  // const userID = user.id
  // console.log(productInfo.objId);
  useEffect(() => {
     async function work() {
      if (!user) {
        alert("please login to buy product")
      }
      else {
        await axios.post('http://localhost:4000/api/product/isInWishlist', { productId: productInfo.objId || productInfo._id, userId: user.id }).then((res) => {
          if (res.data == true) {
          setlikebutton(true)
        }
      }).catch((err) => { alert(err) })
      }
    }
    work()
  },[EffectCount])

  let clickaddCart = async function () {
    if(!user) alert("please login")
    else {await axios.post("http://localhost:4000/api/addProductInCart", { productId: productInfo.objId||productInfo._id, userId: user.id }).then((res) => {
      // console.log(res)
      alert("Added to cart")
    }).catch((err)=>{console.error(err)})}
  }
    
  let hendleWish = async function () {
    if (!user) alert("please login")
    else {
      await axios.post('http://localhost:4000/api/add/product/wishlist', { productId: productInfo.objId || productInfo._id, userId: user.id }).then((res) => {
        alert("Added to wishlist")
        setEffectCount(EffectCount+1)
      }).catch((err) => { alert(err.response.data.msg) })
    }
  }
  return (
    <>
      <div className="container">
        <Navbar />
        <br />
        <br />
        <div className="container  p-3 " style={{
          maxWidth: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <div className=" shadow p-3 mb-5  rounded">
        <img src={productInfo.image||productInfo.Img} style={{maxHeight:'100vh'}} class="img-fluid rounded" alt='product-img'/>
          </div>
          <div className="container" style={{lineHeight:"10px", position:'relative'}} >
            <div className="container" style={{lineHeight:"20px"}}>
            <label >Name</label>
            <h3><b>{productInfo.name||productInfo.Name}</b></h3></div><br/><br/>
            <div className="container text-body-secondary" style={{lineHeight:"20px"}}>
            <label >Description</label>
            <h5 className=''>{productInfo.Description?productInfo.Description:("No description...")}</h5></div><br/><br/>
            <div className="container" style={{lineHeight:"20px"}}>
            <label >Old price</label>
            <h3 className='text-decoration-line-through secondry-text'>{productInfo.oldPrice || productInfo.Old_price}</h3></div><br/><br/>
            <div className="container" style={{lineHeight:"20px"}}>
            <label >Price</label>
            <h3>{productInfo.newPrice|| productInfo.New_price} $</h3></div><br/><br/>
            <div className="container" >
              <button className='btn btn-success'>Buy Now</button>
              <button className='btn btn-primary' style={{marginLeft:"10px", width:"auto"}} onClick={clickaddCart}>Add to cart</button>
            </div><br /><br />
            
            {!likebutton?(<FontAwesomeIcon icon="fa-solid fa-heart" className='p-2 icon-pi' onClick={hendleWish} />):(<FontAwesomeIcon icon="fa-solid fa-heart" className='p-2 icon-pii'  />)}
            
          </div>
        </div>
      </div>
      </>
  )
}

export default ProductInfo