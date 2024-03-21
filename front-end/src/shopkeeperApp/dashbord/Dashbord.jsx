import React, { useState } from 'react'
import "./dashbord.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Linechat from './linechart/Linechat'
import Highcatogarybox from './sellingCaogries/Highcatogarybox'
import ProductSmallcart from './ProductSmallcart'

const Dashbord = () => {
    const[arr,setarr] = useState([10,25,36.90,80,67,10,25,36.90,80,67,10,25,36.90,80,67])
    return (
        <div className='container' >
            <div className="main-options rounded bg-light-subtle container p-3 d-flex">
                <div className="container p-1 d-flex pallate-1">
                    <div className="rounded pallate-1-logo" ><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></div>
                    <div className=" d-flex" style={{ lineHeight: "10px", height: "100%", flexDirection: "column", justifyContent: "center" }} >
                        <p className='text-secondary ' style={{ marginTop: "15px" }}>Order completed</p>
                        <p style={{ color: "orange" }}><b>450</b></p>
                    </div>
                </div>
                <div className="container  d-flex pallate-1" style={{ borderLeft: "2px solid #dadada", borderRight: "2px solid #dadada" }}>
                    <div className="rounded pallate-1-logo " id='pallate-2-decor'><FontAwesomeIcon icon="fa-solid fa-chart-simple" /></div>
                    <div className=" d-flex" style={{ lineHeight: "10px", height: "100%", flexDirection: "column", justifyContent: "center" }} >
                        <p className='text-secondary ' style={{ marginTop: "15px" }}>Analytics</p>
                        <p style={{ color: "rgba(72, 0, 255,1)" }}><b>+ 12%</b></p>
                    </div>
                </div>
                <div className="container  d-flex pallate-1">
                    <div className="rounded pallate-1-logo " id='pallate-3-decor'><FontAwesomeIcon icon="fa-solid fa-p" /></div>
                    <div className=" d-flex" style={{ lineHeight: "10px", height: "100%", flexDirection: "column", justifyContent: "center" }} >
                        <p className='text-secondary ' style={{ marginTop: "15px" }}>Profit</p>
                        <p style={{ color: "rgb(0, 156, 39)" }}><b>+ 150%</b></p>
                    </div>
                </div>
            </div>

            <div className="conatainer d-flex">
                <div className="linechart container rounded p-3" style={{ marginTop: "10px", width: "61%", maxHeight: "500px" }}>
                    <Linechat />
                </div>
                <div className="High-Selling-cetogries container rounded p-3" style={{ marginTop: "10px", width: "38%", maxHeight: "500px", backgroundColor:"white"}}>
                    <Highcatogarybox />
                </div>
            </div>
            <div className="container rounded p-2" style={{ marginTop: "10px", width: "100%", height: "155px", backgroundColor:"white",overflow:"scroll" }}>
                <div className="container py-2 top-products" style={{ height:"50px", width:"100%",backgroundColor:"white"}}><p>Top products</p></div>
                <div className="container d-flex" style={{width:"100%", flexWrap:"wrap",  gap:"10px"}}>
                    {
                        arr.map((res) => {
                            return <ProductSmallcart />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashbord