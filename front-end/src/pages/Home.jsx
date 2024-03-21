import React, {useState, useEffect} from 'react'
import '../Style/Home.css'
import Picpanel from '../components/picpanel/Picpanel'
import Item from '../components/products/Item'
import Womenpopuler from '../components/populer/Womenpopuler'
import NewCollection from '../components/newCollection/NewCollection'
import AllProducts from '../components/products/AllProducts'
import axios from 'axios'
import Navbar from '../components/navbar/Navbar'
import fatchProduct from '../Featch items/Fatch'




const Home = () => {
  let imglink = [
    "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1567928513899-997d98489fbd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1627384114006-f7b66c22baf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  const [data, setData] = useState([])
  
  
    useEffect(() => {
      async function fatchdata(){
      let data = fatchProduct();
        setData(await data)
      }
      fatchdata()
    },[])
  return (
    <div>
      
      <Picpanel/>
     
      <br/>
      <Womenpopuler />
      <br />
      <NewCollection />
      <br />
      <AllProducts data={data} name='All products :' />
    </div>
  )
}

export default Home