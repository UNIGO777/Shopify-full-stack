import React, { useEffect, useState } from 'react'
import '../Style/editProfile.css'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import axios from 'axios'

const EditProfile = () => {
    const [userdata, setud] = useState({ UserDetails: {} });
const [Message, setMessage] = useState("");

useEffect(() => {
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("UserData"));
    if (userDataFromLocalStorage) {
        setud(userDataFromLocalStorage);
    } else {
        // Handle case where user data is not found in local storage
        console.log('User data not found in local storage');
    }
}, []);

const emailClick = () => {
    setMessage("You cannot change the email");
};

const handleChange = (e) => {
    setud({
        ...userdata,
       
        [e.target.name]: e.target.value
        
    });
    console.log(userdata);
    };
    
    const hendleSubmit = async(e) => {
        e.preventDefault()
        await axios.post("http://localhost:4000/api/update", userdata).then((res => {
            console.log(res)
            localStorage.setItem("UserData", JSON.stringify(res.data))
        })).catch((err)=>{console.log(err)})

    }


    


    return (
        <div>
            {
                !userdata ? (<>please login</>) : (<>

                    <Navbar />
                    <div className="container">
                        <form class="row g-3" onSubmit={hendleSubmit}>

                            <div class="col-md-6">

                                <label for="inputEmail4" class="form-label">Email</label>
                                
                                <input type="email" class="form-control text-secondary" id="inputEmail4" value={userdata.Email} readOnly onClick={emailClick} />
                                
                                <div className="text-danger">{ Message}</div>
                            </div>

                            <div class="col-md-6">
                                <label for="FullName" class="form-label">Fullname</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={ userdata.FullName} name='FullName' onChange={handleChange}/>
                            </div>
                            <div class="col-md-6">
                                <label for="Username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={userdata.UserName} name='UserName' onChange={handleChange}/>
                            </div>
                            <div class="col-md-6">
                                <label for="PhoneNo" class="form-label">Phone Number</label>
                                <input type="text" class="form-control" id="inputCity" value={userdata.PhoneNo} name='PhoneNo' onChange={handleChange}/>
                            </div>
                            
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                        </form></div></>)}
        </div>
    )
}

export default EditProfile