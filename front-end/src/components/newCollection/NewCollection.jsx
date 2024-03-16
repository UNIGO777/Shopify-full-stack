import React from 'react'
import new_collections from '../assets/new_collections'
import Item from '../products/Item'
import './NewCollection.css'

const NewCollection = () => {
  return (
    <div className='newCollection-main-div'>
    <div className="newCollection-main">
      <h1 className='newCollection-heading'>New Collection :</h1>
      <div className="newCollection-item-div">
        {new_collections.map((item,i) => {
          return <Item key={i} image={item.image } name={item.name} oldPrice={item.old_price} newPrice={ item.new_price} />
        })}
      </div>
    </div>
  </div>
  )
}

export default NewCollection