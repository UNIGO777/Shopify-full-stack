import { useState, useEffect } from 'react'
import React from 'react'
import './Picpanel.css'
import Navbar from '../navbar/Navbar'
import fatchProduct from '../../Featch items/Fatch'


const Picpanel = (e) => {
    const [data, setData] = useState([])
    const [key, setkey] = useState(0)
    useEffect(() => {
        async function fatchdata(){
            let data = fatchProduct();
            
          setData(await data)
        }
          fatchdata()
          
          function getRandomInt(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min + 1)) + min;
          }
        // let keyyyyy = getRandomInt(0, 1);
        // console.log(keyyyyy, "kkkkkkkkkkkkkkkkkkkkkkkkk")
        // setkey(keyyyyy)
        
    }, [])
    console.log(data)
   
    // setInterval(() => {
           
    //         fun1();
    //     }, 2000);

        

    return (
    <>
        {data.length!==0?(<div  id="lending-container">
      <Navbar />
          
          <div id="content-box">
              <div id="content-box-1">
                  <div id="first-content">
                      <h1>/ <span>{ data[key].Name  } </span></h1>
                      <h1>{data[key].des ? data[key].des : "No Description"}</h1>
                 </div>
                  <div id="second-content">
                      <button>buy now</button>
                 </div>
                  <div id="third-content">
                      <h1>product details </h1>
                 </div>
              </div>
              <div id="content-box-2">
                  <img src={data[key].Img} className='shadow' alt="" />
              </div>
          </div>
         
    </div>):(<></>)}</>
      
    )
}

export default Picpanel