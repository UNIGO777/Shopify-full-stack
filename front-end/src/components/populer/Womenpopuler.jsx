import React from 'react'
import Item from '../products/Item'
import './Womenspopuler.css'
import womensData from '../assets/data'


const Womenpopuler = () => {
  
  return (
    <div className='populer-womens-main-div'>
      <div className="populer-womens-main">
        <h1 className='womens-populer-heading'>POPULER IN WOMEN'S ITEM :</h1>
        <div className="populer-womens-item-div">
          {womensData.map((item,i) => {
            return <Item key={i} image={item.image } name={item.name} oldPrice={item.old_price} newPrice={ item.new_price} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Womenpopuler