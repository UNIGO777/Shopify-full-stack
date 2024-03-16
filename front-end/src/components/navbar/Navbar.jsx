import React, { useEffect, useState } from 'react'
import logoImage from '../assets/img/jwgipdaqzguvi6obct8i-removebg-preview.png'
import './Navbar.css'
import { Link, useNavigate, json, matchPath, parsePath } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = () => {
  const [data, setData] = useState(null);
  // console.log(data,"datataatat");
  let navigate = useNavigate()
  let hendlelogout = function () {
    // console.log('hello')
    localStorage.clear("userData")
    navigate('/')
    setData(null)
  }
  const [tf, settf] = useState(false)
  let stf = function(){
    settf(!tf)
  }




  useEffect(() => {
    let userdata = localStorage.getItem('UserData')
    // console.log(userdata,"uuuuuuuuuu")
    let objectify = JSON.parse(userdata)


    // console.log(objectify,"oooooo")
    setData(objectify)
  }, [])

  return (
    <> {tf ? (<div id="nav-menu-big-box" onClick={stf}><div id="nav-menu">
      <div id="nav-menu-close" onClick={stf}><FontAwesomeIcon icon="fa-solid fa-xmark" /></div>
      <div id="list-1">
        
        <div id='row-links'><h1>pages</h1></div>
        <div id='row-links'><div className="nav-menu-ani-div"></div><Link to='/mens' id='list' className='nav-links'><li >Mens</li></Link></div>
        <div id='row-links'><div className="nav-menu-ani-div"></div><Link to='/womens' id='list' className='nav-links'><li  >Womens</li></Link></div>
        <div id='row-links'><div className="nav-menu-ani-div"></div><Link to='/kids' id='list' className='nav-links'><li  >Kids</li></Link></div>
      </div>
      <div id="list-1">
        <div id='row-links'><h1>About</h1></div>
        <div id='row-links'><div className="nav-menu-ani-div"></div><Link to='/womens' id='list' className='nav-links'><li  >About website</li></Link></div>
        <div id='row-links'><div className="nav-menu-ani-div"></div><Link to='/mens' id='list' className='nav-links'><li >About creator</li></Link></div>
      </div>
      <div id="list-1">
      <div id='row-links'><h1 style={{fontWeight:"100", fontFamily:"mont"}}>shopify</h1></div>
      </div>
    </div></div>):(<></>)}
      <nav id='navbar' >


        <div id="nav-part-1" >
          <div id="nav-menu-icon" onClick={stf}>
          <FontAwesomeIcon icon="fa-solid fa-bars" id="menuIcon"  />
          <div id="menuIconAni"></div>
          </div>

          <Link to='/' className='nav-links'><p>HOME</p></Link>
        </div>
        <div id="nav-part-2">
          <h1>Shopify</h1>
        </div>
        <div id="nav-part-3">
          {
            data ? (<><Link to="/profile" className='nav-links'><h1 >{data.FullName}</h1></Link > <h1 id='button-box-button' onClick={hendlelogout} className='nav-links'>Logout</h1></>) : (<><Link className='nav-links' to='/login' ><h1 >LOGIN</h1></Link>
              <Link to='/signup' className='nav-links'><h1   >SIGN UP</h1></Link></>)
          }
        </div>


      </nav></>
  )
}

export default Navbar
//! 2nd code
{/* <nav id='main-navbar'>
    <div id="main-nav-part-1">
      <div id="main-nav-logo">
      <div className="main-nav-logo"></div>
      <div className="main-nav-logo"></div>
      </div>
      </div>
    {/* <div id="main-nav-part-2">
      <Link to='/' id='list'>HOME</Link>
      <Link to='/mens' id='list'>MENS</Link>
      <Link to='/womens' id='list'>WOMENS</Link>
      <Link to='/kids' id='list'>KIDS</Link>
    </div> */}

{/* <div id="main-nav-part-3">
    {
        data ? (<><Link to="/profile" id='navbar-p'>{data.FullName}</Link>
          <div id="logout-msg"> <button id='button-box-button' className='shadow' onClick={hendlelogout}>Logout</button>
            <p style={{color:"white"}}>For logout click it !</p>
            </div>
        </>) : (<><Link to='/login' id='one'><button id='first-button' className='shadow '>LOGIN</button></Link>
        <Link to='/signup' id='one'><button id='button-box-button'  style={{marginLeft:"5px"}}>SIGN UP</button></Link></>)
      }
    </div>
  </nav> */}

//! 1st code
{/* <div>
<div >
  <nav>
    <div className="navdiv-1">
      <div className="nav-logo">
        <img src={logoImage} alt="LOGO" />
      </div>
          <h1>Shop<span >Savvy</span></h1>
        </div>
        <ul>
          <Link to='/' id='list'><li >HOME</li></Link>
          <Link to='/mens' id='list'><li >MENS</li></Link>
          <Link to='/womens' id='list'><li >WOMENS</li></Link>
          <Link to='/kids' id='list'><li >KIDS</li></Link>
    
        </ul>
        <div className="button-box">
        {/* <Link to='/login' id='one'><button id='first-button'>LOGIN</button></Link>
       <Link to='/signup'><button id='button-box-button'>SIGN UP</button></Link> 
        {
            data?(<><Link to="/profile"><p id='navbar-p' style={{marginTop:'15px', color:'black', width:"100px"}}>{data.FullName}</p></Link> <button id='button-box-button' onClick={hendlelogout}>Logout</button></>):(<><Link to='/login' id='one'><button id='first-button'>LOGIN</button></Link>
            <Link to='/signup'><button id='button-box-button' style={{marginLeft:"5px", width:"100px"}}>SIGN UP</button></Link></>)
          }
    
        </div>
      </nav>
    </div>



</div> **/}
