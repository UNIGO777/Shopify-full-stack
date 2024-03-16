import { useState, useEffect } from 'react'
import React from 'react'
import './Picpanel.css'
import Navbar from '../navbar/Navbar'


const Picpanel = (e) => {
    
    const [i, seti] = useState(0);
    let fun1 =function (){
        if (i === (e.imglink.length - 1)) {
            seti(0)
        }
        else {
            seti(i+1)
        }
    }
    let fun2 = function () {
        if (i === 0) {
           seti(e.imglink.length-1)
        }
        else {
            seti(i-1)
        }
    }
   
    // setInterval(() => {
           
    //         fun1();
    //     }, 2000);

        

    return (
        <div  id="lending-container">
      <Navbar />
          
          <div id="content-box">
              <div id="content-box-1">
                  <div id="first-content">
                      <h1>/ <span>Sunglasses</span></h1>
                      <h1>Elevate your style with our sleek sunglasses. Perfect blend of fashion and functionality. Experience sophistication.</h1>
                 </div>
                  <div id="second-content">
                      <button>buy now</button>
                 </div>
                  <div id="third-content">
                      <h1>product details </h1>
                 </div>
              </div>
              <div id="content-box-2">
                  <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3N8ZW58MHx8MHx8fDA%3D" className='shadow' alt="" />
              </div>
          </div>
         
    </div>
      
    )
}

export default Picpanel