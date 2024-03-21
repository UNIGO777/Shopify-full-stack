import React from 'react'

const ProductSmallcart = () => {
  return (
      <div className='rounded p-1 d-flex' style={{backgroundColor:"", height:"50px", width:"250px", alignItems:'center', overflow:"hidden", fontSize:"12px"}}>
          <div className="product-img rounded" style={{ height: "100%", width: "20%", backgroundColor: "#dadada", overflow:"hidden", objectFit:"cover" }}>
              <img style={{height:"100%"}} src="https://plus.unsplash.com/premium_photo-1710361778453-627fdab52ed9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="details p-3" style={{lineHeight:"0px", marginTop:"15px"}}>
            <p >Product Small</p>
              <p>250$</p>
          </div>
    </div>
  )
}

export default ProductSmallcart