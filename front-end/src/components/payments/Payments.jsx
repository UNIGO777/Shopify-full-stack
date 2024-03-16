import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Payments = () => {
    const [Payments,setPayments] = useState()
    return (
    <>
      {!Payments ? (<div className='container text-center' style={{}}>
      <div className="container" style={{}}>aksjdf</div>
        </div >) : (<></>)}
        <button className='btn btn-dark' style={{
          width: "auto",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop:"10px"
          }}>Add Payment options</button>
      </>
      
  )
}

export default Payments