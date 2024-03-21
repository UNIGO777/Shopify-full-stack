import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Highcatogarybox = () => {
  let [width, setwidth] = useState(0);
  
  setTimeout(() => {
    setwidth(100)
  }, 1000);
  return (
    <div  style={{display:"grid" , gridTemplateRows:"10% 20% 60%", height:"100%"}}>
      <b  >High Selling Products</b>
      <div className="container  d-flex pallate-1" style={{ marginTop: "10px" }}>
        <div className="rounded pallate-1-logo " id='pallate-2-decor'><FontAwesomeIcon icon="fa-solid fa-chart-simple" /></div>
        <div className=" d-flex" style={{ lineHeight: "10px", height: "100%", flexDirection: "column", justifyContent: "center" }} >
          <p className='text-secondary ' style={{ marginTop: "15px" }}>Analytics</p>

        </div> 
      </div>
      
      <div class="progress-bars p-3 d-flex" style={{ marginTop: "20px", marginLeft: "10px", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{lineHeight:"0px"}}>
        <p>Mens</p>
        <div className="progress-bar" style={{ width: "100%", height: "10px", backgroundColor: "rgba(252, 218, 81, 0.346)", borderRadius: "10px" }}>
          <div className='progress'  style={{height:"100%" , backgroundColor:"orange", width:`80%`}}></div>
          </div></div>
          <div style={{lineHeight:"0px"}}>
        <p>Womens</p>
        <div className="progress-bar" style={{width: "100%", height: "10px", backgroundColor: "rgba(72, 0, 255, 0.099)", borderRadius: "10px" }}>
        <div className='progress'  style={{height:"100%" , backgroundColor:"rgb(72, 0, 255)", width:`90%`, transition:"all ease 0.5s"}}></div>
          </div></div>
          <div style={{lineHeight:"0px"}}>
        <p>kids</p>
        <div className="progress-bar" style={{ width: "100%", height: "10px", backgroundColor: "rgba(255, 0, 0, 0.165)", borderRadius: "10px" }}>
        <div className='progress'  style={{height:"100%" , backgroundColor:"red", width:`${width}%`, transition:"all ease 1s"}}></div>
          </div></div>
      </div>
    </div>
  )
}

export default Highcatogarybox