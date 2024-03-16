import { useState } from "react"
import React, { useEffect } from 'react'
import './fail.css'

const Fail = () => {
    const [second, setsecond] = useState(5);
    const h = setInterval(() => {
        setsecond(second - 1)
        if(second==0) clearInterval(h)
    },1000)
    useEffect(() => {
        setTimeout(() => {
            window.location = "http://localhost:3000/profile"
        },5000)
    })
    const hendlelocate = () => {
        window.location = "http://localhost:3000/profile"
    }
  return (
    <div class="bodyyy" style={{height:"100vh", width:"100vw"}}><div class="containerrrrr">
          <div class="headingggg"><span class="tick-containerrrr"><i class="tickk" style={{ color:"green"}}>&nbsp;</i></span><span>Your payment is fail</span></div>
    <div class="text-containerrr">
      <div>You will be logged out of all the devices except this one.</div>
      <div>You will be redirected to the website in {second} seconds.</div>
      <div >Click the button below, if you are not redirected to the website.</div><a class="primary-buttonnn" onClick={hendlelocate} style={{cursor:'pointer'}}>Go to Website</a>
    </div>
  </div></div>
  )
}

export default Fail