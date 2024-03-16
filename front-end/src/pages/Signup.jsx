import React, {useState} from 'react'
import '../Style/singup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
  const [formData, setFormData] = useState({
    FullName: '',
    PhoneNo: '',
    UserName: '',
    Email: '',
    Password: ''
  });
  const hendlesubmit = function hendleSubmit(e) {
    e.preventDefault()
    let data = axios.post('http://localhost:4000/api/signup', formData).then(response => {
      // Handle successful response here
      // console.log('Response:', response.data);
    })
    .catch(error => {
      // Handle error here
      console.error('Error:', error);
    });
    
  }
  const hendlechange = function hendleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
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
          <h1>SIGN-UP</h1>
          <form  id='main-form' onSubmit={hendlesubmit}>
           
            <input type="text" placeholder='Fullname' name='FullName' value={formData.FullName} onChange={hendlechange}/>
            <input type="mobile" placeholder='Phone-No' name='PhoneNo' value={formData.PhoneNo} onChange={hendlechange}/>
            <input type="text" placeholder='User-name' name='UserName' value={formData.UserName} onChange={hendlechange}/>
            <input type="email" placeholder='Email' name='Email' value={formData.Email} onChange={hendlechange}/>
            <input type="password" placeholder='Password' name='Password' value={formData.Password} onChange={hendlechange}/>
            <button type='submit'>Sign-up</button>
            <Link to="/login" id='ancor' >Log-in</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup