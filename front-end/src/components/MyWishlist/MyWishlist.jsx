import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import axios from 'axios'
import AllProducts from '../products/AllProducts'

const MyWishlist = () => {
  const [Wishlist, setWishlist] = useState([])
  const user = JSON.parse(localStorage.getItem('UserData'))
  
  useEffect(  () => {
    async function fatch() {
      await axios.post('http://localhost:4000/api/getWishlist', { userId: user.id }).then((res) => {
        setWishlist(res.data)
        
      }).catch((err) => {
        console.log(err,"err")
      })
    }
    fatch()
  },[])
    return (
    <>
      {!Wishlist ? (<div className='container text-center'>
      <Link to="/"><p className='fs-6' style={{color:"black", display:"inline-block"}}><FontAwesomeIcon icon="fa-solid fa-heart" /> Add items in your wishlist</p></Link>
        </div >) : (<>
          <AllProducts data={Wishlist}  />
        </>)}</>
  )
}

export default MyWishlist