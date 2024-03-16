import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MyOrders = () => {
    const [items,setitems] = useState()
    return (
    <>
      {!items ? (<div className='container text-center'>
      <Link to="/"><p className='fs-6' style={{color:"black", display:"inline-block"}}><FontAwesomeIcon icon="fa-solid fa-bag-shopping" style={{fontSize:"1rem"}}/> Now book your orders</p></Link>
    </div >): (<></>)}</>
  )
}

export default MyOrders