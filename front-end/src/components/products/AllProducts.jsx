import React, {useState, useEffect} from 'react'
import Item from './Item'
import womensData from '../assets/data'
import './allProducts.css'
import axios from 'axios'

const AllProducts = (e) => {
   
    return (

        <div className='all-products-main-div'>
            <div className="all-products-main">
                <h1 className='all-products-heading'>{e.name}</h1>
                <div className="all-products-item-div">
                    {e.data.map((item) => {

                        return <Item key={item.id} image={item.Img} name={item.Name} oldPrice={item.Old_price} newPrice={item.New_price} objId={ item._id} />
                    })}
                </div>
            </div>
        </div>

    )
}

export default AllProducts