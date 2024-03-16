import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Vcard = (e) => {
  // console.log(e.data)
  let navigate = useNavigate()
  let cardClick = (productInfo) => {
    console.log(productInfo, "vcard")
    navigate('/productProfile', {state:productInfo})
  }
  const user = JSON.parse(localStorage.getItem("UserData"))
  const userID = user.id
  
  
  return (
    <> {!e.data ? (<div>Loading...</div>) : (
      <>
      <div className="container shadow p-3 md-5 d-flex rounded" style={{ position: "relative", Maxwidth: "100vw", fontSize:"10px" }}>
          <div className='container  p-1 rounded' style={{height:"200px", width:"500px"}}>
              <img className='rounded' src={e.data.product.Img} alt="" style={{width:"100%", height:"100%"}}/>
          </div>
          <div className="container p-3" style={{lineHeight:"5px", position:"relative"}}>
            <label ><b>Name: </b> </label>
          <p style={{marginLeft:"10px" , marginTop:"10px"}}>{e.data.product.Name}</p>
            <label ><b>Discription: </b> </label>
          <p style={{marginLeft:"10px" , marginTop:"10px"}}>{e.data.product.Discription ? e.data.Discription : ("no description")} </p>
            <label ><b>Category: </b> </label>
          <p style={{marginLeft:"10px" , marginTop:"10px"}}>{e.data.product.Category} </p>
            <label ><b>price: </b> </label>
              <p style={{ marginLeft: "10px", marginTop: "10px" }}>{e.data.product.New_price}$</p>
          </div>  
      <span className='p-2 md-5 rounded' style={{ position: 'absolute', top: "10px", right: "10px" }}>Quatity: { e.Quatity}</span>
      <div className="cantainer" style={{width:"95%", height:"90%", position:'absolute'}}  onClick={()=>cardClick(e.data.product)}></div>
          <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
            
              <button className='btn btn-success' onClick={()=>e.clickaddCart(e.data.product)}> Add </button>
              <button className='btn btn-danger' style={{marginLeft:"10px"}} onClick={()=>e.clickdeleteCart(e.data.product)}> Delete </button>
          </div></div></> )}</>
          
          
          
    
  )
}

export default Vcard