import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Shoplogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password:""
  });
  // Handling form data on change
  const handleChange = (e) => {
    
    setFormData({...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    await axios.post("http://localhost:4000/api/shopkeeperlogin", formData).then(function (response) {
      localStorage.setItem("shopkeeper", JSON.stringify(response.data.user));
    // console.log(response.data.user);
      window.location.reload();
    }).catch(function (error) {
      console.log('AN ERROR OCCURED!', error.message);
    })
  }
  
  return (
    <form onSubmit={handleSubmit}>
    <div class="d-flex align-items-center min-vh-100 px-4">
  <div class="mx-auto w-100 max-w-sm space-y-6">
    <div class="space-y-2 text-center">
      <h1 class="display-5 fw-bold">Login as Shopowner</h1>
          </div>
          <br />
    <div class="input-group mb-3  d-flex" style={{flexDirection:"column", alignItems:"center"}}>
      <div class="space-y-2">
        <label for="email" class="form-label">
          Email
        </label>
        <input id="email" name='email' class="form-control" onChange={handleChange} style={{width:"25vw"}} placeholder="m@example.com" required="" type="email" />
      </div>
      <div class="space-y-2">
        <div class="d-flex align-items-center">
          <label for="password" class="form-label">
            Password
          </label>
          <a href="#" class="ms-auto text-sm text-decoration-underline">
            Forgot your password?
          </a>
        </div>
            <input id="password" name='password' onChange={handleChange} class="form-control" style={{ width: "25vw" }} required="" type="password" />
          </div>
          <br />
      <button class="btn btn-primary rounded w-25" type='submit'>Login</button>
        </div>
        
  </div>
</div></form>
  )
}

export default Shoplogin