import React, {useState, useEffect} from 'react'
import '../Style/Home.css'
import Picpanel from '../components/picpanel/Picpanel'
import Item from '../components/products/Item'
import Womenpopuler from '../components/populer/Womenpopuler'
import NewCollection from '../components/newCollection/NewCollection'
import AllProducts from '../components/products/AllProducts'
import axios from 'axios'
import Navbar from '../components/navbar/Navbar'




const Home = () => {
  let imglink = [
    "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1567928513899-997d98489fbd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1627384114006-f7b66c22baf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  const[data,setData] = useState([])
    useEffect(() => {
        const fatch = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/all/products")
                // console.log(response)
                setData(response.data);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fatch()
    },[])
  return (
    <div >
      <div  id="lending-container">
      <Navbar />
          
          <div id="content-box">
              <div id="content-box-1">
                  <div id="first-content">
                      <h1>/ <span>Sunglasses</span></h1>
                      <h1>Elevate your style with our sleek sunglasses. Perfect blend of fashion and functionality. Experience sophistication.</h1>
                 </div>
                  <div id="second-content">
                      <button>buy now</button>
                 </div>
                  <div id="third-content">
                      <h1>product details </h1>
                 </div>
              </div>
              <div id="content-box-2">
                  <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3N8ZW58MHx8MHx8fDA%3D" className='shadow' alt="" />
              </div>
          </div>
         
    </div>
      
      
     
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