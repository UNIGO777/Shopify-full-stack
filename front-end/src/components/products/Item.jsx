
import React from 'react'
import './item.css'
import { useNavigate } from 'react-router-dom'

import Popup from '../popup/Popup'

const item = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navigate = useNavigate()
    let productInfo = props
    console.log(productInfo)
    
    
    
    
    return (
        <span>
            
            <div className='item-main-div' onClick={()=>{navigate("/productprofile", { state: productInfo })}}>
                <div className='item-img-div'>
                    <img src={props.image } alt="" />
                </div>
                <div className="item-price">
                    <h6 className='item-name'>{ props.name}</h6>
                    <div className="old-price">
                        {props.oldPrice}
                    </div>
                    <div className="new-price">
                        {props.newPrice}
                    </div>
                   
                </div>
               
                <p className='item-discription' style={{fontSize:"10px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ipsa magnam aliquam, veniam ipsum blanditiis!</p>
                
            </div>
        </span>
    )
}

export default item