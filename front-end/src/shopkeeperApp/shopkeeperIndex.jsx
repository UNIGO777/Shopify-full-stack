import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import './all.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dashbord from './dashbord/Dashbord'
import Order from './Orders/Order'
import ProductList from './productList/List'
import Account from './Account/Account'
import Marketing from './marketing/Marketing'
import Massages from './massages/Massages'
import Shoploginpage from './Shoplogin'
import Shopsignup from './Shopsignup'



const ShopkeeperIndex = () => {
  const [routrrr, setrt] = useState('dashbord')
  const [haveaccount, sethaveaccount] = useState(true)
  const fun =function(e) {
    setrt(e)
  }
  const [shopkeeperdata, setshopdata] = useState({});
  useEffect(() => {
    let locals = () => {
      setshopdata(JSON.parse(localStorage.getItem('shopkeeper')));
    }
    locals();
  }, [])
  const hendlehave = () => {
    sethaveaccount(!haveaccount)
  }
  
  
  return (
    <>
      {
        !shopkeeperdata ? haveaccount?(<><Shoploginpage />
        <div className="text-center text-sm" style={{position:"absolute", left:"50%", top:"80%", transform:"translate(-50%, -50%)"}}>
          Don't have an account?
          <p className="text-decoration-underline" style={{cursor:"pointer"}} onClick={hendlehave}>
            Sign up
          </p>
        </div></>):(<><Shopsignup/><div className="text-center text-sm" >
          Have an account?
          <p className="text-decoration-underline" style={{cursor:"pointer"}} onClick={hendlehave}>
            log in
            </p>
            <br />
        </div></>) : (
    <div className='index-main' >
      
        <div className='index-left shadow' >
        <h1 id='index-logo'>SHOPI.OWNER</h1>
        <div id="index-menu" >
          <div ><h1 style={{ color: "rgba(0, 0, 0, 0.739)", fontSize: "15PX", fontWeight: "100", marginLeft:"-10px" }}  >Menu</h1></div>
          {routrrr==="dashbord"?(<div onClick={() => fun("dashbord")} id='menu-list-div-2'><FontAwesomeIcon icon="fa-solid fa-house" style={{marginTop:"-10px"}}  /><h1 id="index-menu-decor-2"> Dashbord</h1></div>):(<div onClick={() => fun("dashbord")} id='menu-list-div-2'><FontAwesomeIcon icon="fa-solid fa-house" style={{marginTop:"-10px"}} /><h1 id="index-menu-decor"> Dashbord</h1></div>)}
          {routrrr==="order"?(<div onClick={() => fun("order")} id='menu-list-div-2'><FontAwesomeIcon icon="fa-solid fa-square-nfi" style={{marginTop:"-10px"}} /><h1 id="index-menu-decor-2">Orders</h1></div>):(<div onClick={() => fun("order")} id='menu-list-div-2'><FontAwesomeIcon icon="fa-solid fa-square-nfi" style={{marginTop:"-10px"}} /><h1 id="index-menu-decor">Orders</h1></div>)}
          {routrrr==="products"?(<div onClick={() => fun("products")} id='menu-list-div-2'><FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{marginTop:"-10px"}} /><h1 id="index-menu-decor-2">Products</h1></div>):(<div onClick={() => fun("products")} id='menu-list-div-2'><FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{marginTop:"-10px"}} /><h1 id="index-menu-decor">Products</h1></div>)}
          {routrrr==="account"?(<div onClick={() => fun("analytics")} id='menu-list-div-2'><FontAwesomeIcon icon="fa-solid fa-chart-simple" style={{marginTop:"-10px"}} /><h1 id="index-menu-decor-2">Account</h1></div>):(<div onClick={() => fun("account")} id='menu-list-div-2'><FontAwesomeIcon icon="fa-solid fa-chart-simple" style={{marginTop:"-10px"}} /><h1 id="index-menu-decor">Account</h1></div>)}
          {routrrr==="marketing"?(<div onClick={() => fun("marketing")} id='menu-list-div-2'><FontAwesomeIcon icon="fa-solid fa-comments-dollar" style={{marginTop:"-10px"}} /><h1 id="index-menu-decor-2">Marketing</h1></div>):(<div onClick={() => fun("marketing")} id='menu-list-div-2'><FontAwesomeIcon icon="fa-solid fa-comments-dollar" style={{marginTop:"-10px"}} /><h1 id="index-menu-decor">Marketing</h1></div>)}
          {routrrr==="msg"?(<div onClick={() => fun("msg")} id='menu-list-div-2'><FontAwesomeIcon icon="fa-solid fa-comment" style={{marginTop:"-10px"}} /><h1 id="index-menu-decor-2">Massage</h1></div>):(<div onClick={() => fun("msg")} id='menu-list-div-2'><FontAwesomeIcon icon="fa-solid fa-comment" style={{marginTop:"-10px"}} /><h1 id="index-menu-decor">Massage</h1></div>)}
        </div>
        <div id='index-integration'>
        
          <div ><h1 style={{ color: "rgba(0, 0, 0, 0.739)", fontSize: "15PX", fontWeight: "100" }}  >Integration</h1></div>
          {routrrr==="gira"?(<div onClick={() => fun("gira")} id='index-intagration-div-2'><h1 id="intagration-h1-2">Gira</h1></div>):(<div onClick={() => fun("gira")} id='index-intragration-div'><h1 id="intagration-h1">Gira</h1></div>)}
          {routrrr==="intecom"?(<div onClick={() => fun("intecom")} id='index-intagration-div-2'><h1 id="intagration-h1-2">Intecom</h1></div>):(<div onClick={() => fun("intecom")} id='index-intragration-div'><h1 id="intagration-h1">Intecom</h1></div>)}
          {routrrr==="stack"?(<div onClick={() => fun("stack")} id='index-intagration-div-2'><h1 id="intagration-h1-2">Stack</h1></div>):(<div onClick={() => fun("stack")} id='index-intragration-div'><h1 id="intagration-h1">Stack</h1></div>)}
          
        </div>
      </div>



      <div className='index-right' style={{backgroundColor:"#eeeeee"}}>
        

        {routrrr !=='account' ?(<nav >
          <div className="container-fluid py-2 text-center" style={{display:"flex", justifyContent:"space-between"}}>
            <div id='logo' style={{textAlign:"center", lineHeight:"0px"}} >
              
              <h1 style={{ fontSize: "1.5rem", marginLeft: "10px", marginTop: "2px", color:""}} > Dashboard</h1>
              <p style={{marginRight:"8px"}}>This is Your </p>
            </div>
            <div id='searchpanel' style={{width:"40%", display:"flex", alignItems:'center', gap:"20px"}}>
              <div className='d-flex'>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{ marginTop:"1px", marginLeft: "10px", padding: "10px", border: "2px solid gray", borderTopLeftRadius: "10px", borderBottomLeftRadius:"10px", border:"none", backgroundColor:"white"}} />
                <input type="text" className='form-control ' style={{ width: "100%", borderTopLeftRadius: "0px", borderBottomLeftRadius:"0px" }} placeholder="Search...." />
              </div>
            <div id='menualbuttons' className='d-flex ' style={{width:"auto", gap:"10px", alignItems:'center', marginTop:"2px"}}>
                      <div className='mb-2' style={{ height: "40px", width: "40px", borderRadius: "50%", overflow: 'hidden', objectFit: 'cover' }}>
                      <img height={"100%"} width={"100%"} src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /></div>
                <div className=' p-1 ' style={{lineHeight:"0px" , textAlign:"left"}} >
                        <h5 className=''>{ shopkeeperdata.fullName}</h5>
                  
                </div>
              </div>
            </div>
          </div>
        </nav>):(<></>)}

        {/* main containers */}
          
        {routrrr ==='dashbord' && <Dashbord />}
        {routrrr ==='order' && < Order/>}
        {routrrr ==='products' && < ProductList/>}
        {routrrr ==='account' && < Account/>}
        {routrrr ==='marketing' && < Marketing/>}
        {routrrr ==='msg' && < Massages/>}
        
      </div>
    </div>
    
  )
      }
    </>)
}

export default ShopkeeperIndex