import React, { useState } from 'react'
import '../Style/login.css'
import { Link,json,useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  let navigate = useNavigate()
  const [fromData, setfromData] = useState({
    Email: '',
    Password: ''
  })
  const hendleChange = function (e) {
    setfromData({
      ...fromData,
      [e.target.name]: e.target.value
    })
  }
  const hendleSubmit = function (e) {
    e.preventDefault()
    let data = axios.post("http://localhost:4000/api/login", fromData).then(Response => {
      localStorage.setItem('UserData', JSON.stringify(Response.data.UserDetails))
      navigate('/')

    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className='main'>
      <div className="div-left">
        <img src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=1024x1024&w=is&k=20&c=Gsr6lZkBHjjeP5o18w9_mvnWxMZBqB-ncOi6tqh87hM=" alt="" />
      </div>
      <div className="div-right">
        {/* <Link to="/" id='a'><button className='home-btn'>HOME</button></Link> */}
        <div className="form">
          <h1>LOG-IN</h1>
          <form action="" id='main-form' onSubmit={hendleSubmit}>
           
            {/* <input type="text" placeholder='User-name'/> */}
            <input type="email" placeholder='Email' name='Email' value={fromData.Email} onChange={hendleChange}/>
            <input type="password" placeholder='Password' name='Password' value={fromData.Password} onChange={hendleChange}/>
            <button type='submit' onSubmit={hendleSubmit}>LOG-IN</button>
            <Link to="/signup" id='ancor'>Sing-up</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login