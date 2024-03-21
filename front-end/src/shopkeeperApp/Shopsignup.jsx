import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Shopsignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    fullName: '',
    phoneNumber: '',
    shopName: '',
    shopDescription: '',
    checkbox: false,
  });
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });
  
  

  const handleAddressChange = function (event) {
    const { name, value, type, checked } = event.target;

    setAddress({ ...address, [name]: value });
  }
  const handleInputChange = function (event) {
    const { name, value, type, checked } = event.target;

    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = async function (event) {
    event.preventDefault();
    let data = {
      formData: formData,
      address : address
    }
    await axios.post("http://localhost:4000/api/shopkeepersignup", data).then(function (response) {
      localStorage.setItem("shopkeeper", JSON.stringify(response.data.shopkeeper));
      window.location.reload();
    }).catch(function (error) {
      console.log('AN ERROR OCCURED!', error.message);
    })
  
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <div className='container p-2'>
        <div className="mx-auto max-w-5xl px-4 space-y-8">
          <header className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight">Shopkeeper</h1>
            <p className="text-gray-500 dark:text-gray-400">Create a new one</p>
          </header>
          <div className="space-y-4 p-4">
            {/* Form inputs */}
            {/* Username */}
            <div className="space-y-2">
              <label htmlFor="username" className="form-label">Username</label>
              <input id="username" name="username" className="form-control" placeholder="Enter your username" required="" type="text" onChange={handleInputChange} />
            </div>
            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="form-label">Password</label>
              <input id="password" name="password" className="form-control" required="" type="password" onChange={handleInputChange} />
            </div>
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="form-label">Email</label>
              <input id="email" name="email" className="form-control" required="" type="email" onChange={handleInputChange} />
            </div>
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input id="fullName" name="fullName" className="form-control" placeholder="Enter your full name" required="" type="text" onChange={handleInputChange} />
            </div>
            {/* Phone Number */}
            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input id="phoneNumber" name="phoneNumber" className="form-control" placeholder="Enter your phone number" required="" type="tel" onChange={handleInputChange} />
            </div>
            {/* Street */}
            <div className="row g-2">
              <div className="col">
                <div className="space-y-2">
                  <label htmlFor="street" className="form-label">Street</label>
                  <input id="street" name="street" className="form-control" placeholder="Enter your street" required="" type="text" onChange={handleAddressChange} />
                </div>
              </div>
              {/* City */}
              <div className="col">
                <div className="space-y-2">
                  <label htmlFor="city" className="form-label">City</label>
                  <select id="city" name="city" className="form-select" onChange={handleAddressChange}>
                    <option value="">Select city</option>
                    <option value="Mumbai">Mumbai (Maharashtra)</option>
                    <option value="Delhi">Delhi (National Capital Territory of Delhi)</option>
                    <option value="Bangalore">Bangalore (Karnataka)</option>
                    <option value="Kolkata">Kolkata (West Bengal)</option>
                    <option value="Chennai">Chennai (Tamil Nadu)</option>
                    <option value="Hyderabad">Hyderabad (Telangana)</option>
                    <option value="Pune">Pune (Maharashtra)</option>
                    <option value="Ahmedabad">Ahmedabad (Gujarat)</option>
                    <option value="Jaipur">Jaipur (Rajasthan)</option>
                    <option value="Surat">Surat (Gujarat)</option>
                    <option value="Lucknow">Lucknow (Uttar Pradesh)</option>
                    <option value="Kanpur">Kanpur (Uttar Pradesh)</option>
                    <option value="Nagpur">Nagpur (Maharashtra)</option>
                    <option value="Visakhapatnam">Visakhapatnam (Andhra Pradesh)</option>
                    <option value="Indore">Indore (Madhya Pradesh)</option>
                    <option value="Thane">Thane (Maharashtra)</option>
                    <option value="Bhopal">Bhopal (Madhya Pradesh)</option>
                    <option value="Patna">Patna (Bihar)</option>
                    <option value="Vadodara">Vadodara (Gujarat)</option>
                    <option value="Ghaziabad">Ghaziabad (Uttar Pradesh)</option>
                    <option value="Ludhiana">Ludhiana (Punjab)</option>
                    <option value="Agra">Agra (Uttar Pradesh)</option>
                    <option value="Nashik">Nashik (Maharashtra)</option>
                    <option value="Faridabad">Faridabad (Haryana)</option>
                    <option value="Meerut">Meerut (Uttar Pradesh)</option>
                    <option value="Rajkot">Rajkot (Gujarat)</option>
                    <option value="Varanasi">Varanasi (Uttar Pradesh)</option>
                    <option value="Srinagar">Srinagar (Jammu and Kashmir)</option>
                    <option value="Aurangabad">Aurangabad (Maharashtra)</option>
                    <option value="Dhanbad">Dhanbad (Jharkhand)</option>
                  </select>
                </div>
              </div>
            </div>
            {/* State */}
            <div className="row g-2">
              <div className="col">
                <div className="space-y-2">
                  <label htmlFor="state" className="form-label">State</label>
                  <select id="state" name="state" className="form-select" onChange={handleAddressChange}>
                    <option value="">Select a state</option>
                    <optgroup label="States">
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    </optgroup>
                    
                    <optgroup label="Union Territories">
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Delhi">Delhi (National Capital Territory of Delhi)</option>
                    <option value="Puducherry">Puducherry (Pondicherry)</option>
                    <option value="Ladakh">Ladakh</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      </optgroup>
                  </select>
                </div>
              </div>
              {/* Zip Code */}
              <div className="col">
                <div className="space-y-2">
                  <label htmlFor="zip" className="form-label">Zip Code</label>
                  <input id="zip" name="zipCode" className="form-control" placeholder="Enter your zip code" required="" type="text" onChange={handleAddressChange} />
                </div>
              </div>
            </div>
            {/* Country */}
            <div className="space-y-2">
              <label htmlFor="country" className="form-label">Country</label>
              <input id="country" name="country" className="form-control" placeholder="Enter your country" required="" type="text" onChange={handleAddressChange} />
            </div>
            {/* Shop Name */}
            <div className="space-y-2">
              <label htmlFor="shopName" className="form-label">Shop Name</label>
              <input id="shopName" name="shopName" className="form-control" placeholder="Enter your shop name" required="" type="text" onChange={handleInputChange} />
            </div>
            {/* Shop Description */}
            <div className="space-y-2">
              <label htmlFor="shopDescription" className="form-label">Shop Description</label>
              <textarea id="shopDescription" className="form-control" name="shopDescription" placeholder="Enter your shop description" required="" onChange={handleInputChange}></textarea>
            </div>
            {/* Terms and Conditions */}
            <div className="form-check p-4">
              <input id="terms" className="form-check-input" type="checkbox" name="checkbox" onChange={handleInputChange} />
              <label htmlFor="terms" className="form-check-label">
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100 bg-dark">Register</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Shopsignup