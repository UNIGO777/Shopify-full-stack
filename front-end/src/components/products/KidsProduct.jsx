import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Btn from '../button/button'
import { useState } from 'react'
import Picpanel from '../picpanel/Picpanel'
import AllProducts from './AllProducts'
import axios from 'axios'

const KidsProducts = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fatch = async  ()=> {
      axios.get('http://localhost:4000/api/kids/product').then(r => {
        setData(r.data)
        // console.log("ho talkdaj")
      }

      ).catch(err => {
        console.log(err ,"err")
      })
    }
    fatch()
    
  },[])
  let imglink = [
    'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1588186939549-c087e0796efd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1592842232655-e5d345cbc2d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]
  return (
    <div>
      <Navbar/>
      <Picpanel imglink={imglink} />
      <br />
        <AllProducts data={data} name='Kids products :' />
      
    </div>
  )
}

export default KidsProducts