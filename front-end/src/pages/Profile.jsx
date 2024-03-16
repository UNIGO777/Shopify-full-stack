import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import { Link, json } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/profile.css";
// import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "../components/Cart/Cart";
import MyOrders from "../components/MyOrders/MyOrders";
import MyWishlist from "../components/MyWishlist/MyWishlist";
import Payments from "../components/payments/Payments";
// import About from "../components/Cart/About";
import Popup from "../components/popup/Popup";
import { createClient } from '@supabase/supabase-js'
import axios from "axios";
const supabaseUrl = 'https://upmarhtkvbgmavnpuxau.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwbWFyaHRrdmJnbWF2bnB1eGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NTk3NjYsImV4cCI6MjAyNTAzNTc2Nn0.df-sHkeH9knxEvbL1KPWzBJOHX2s4KUT4fgTRJjNZyM'
const supabase = createClient(supabaseUrl, supabaseKey)


const Profile = () => {
  const [userData, setUD] = useState(null)
  const [SelectedPage, setSelectedPage] = useState('cart')
  useEffect(() => {


    setUD(JSON.parse(localStorage.getItem("UserData")))
    // console.log(userData, "user")
  }, [])
  let handlePageChange = (page) => {
    setSelectedPage(page);
  }
  const [ispopOpen, setPopopen] = useState(false)
  const togglePopup = () => {
    setPopopen(!ispopOpen)
  }
  const fileref = useRef(null)
  const hendleclick = () => {
    fileref.current.click()
  }

  const [img, setimg] = useState('https://th.bing.com/th/id/OIP.yYUwl3GDU07Q5J5ttyW9fQHaHa?rs=1&pid=ImgDetMain')
  const [imgdata, setimgdata] = useState(null)
  const hendleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0]
    setimgdata(e.target.files[0])
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setimg(reader.result)
      }
      reader.readAsDataURL(file)
    }

  }
  const ImageSubmit = async () => {
    // const { deletedata, error2 } = await supabase.storage.from('user_profile_img').remove("/profile_img/" + userData.Email)
    // if (error2) {
    //   console.log(error2)
    // }
    // else {
    //   console.log("done1")
    // }
    // if (userData.ProfileUrl) {
    //   const { imagedata, error } = await supabase.storage.from('user_profile_img').update("/profile_imgs/" + userData.Email, imgdata)
    //   if (error) {
    //     console.log(error)
    //   }
    //   else {
    //     console.log("done2", imgdata)
    //   }
    // }
    // else {
    const { imagedata, error } = await supabase.storage.from('user_profile_img').upload("/profile_imgs/" + imgdata.name, imgdata)
    if (error) {
      console.log(error)
    }
    else {
      console.log("done2", imgdata)
    }
    // }
    const imageUrll = `${supabaseUrl}/storage/v1/object/public/user_profile_img/profile_imgs/${imgdata.name}`
    setUD({ ...userData, ProfileUrl: imageUrll })
    setimg(imageUrll)
    // console.log(img)
    //post karna h request
    let res = await axios.post("http://localhost:4000/api//updateprofile", { Email: userData.Email, profileUrl: imageUrll })
    // console.log(res, "res");
    localStorage.setItem('UserData', JSON.stringify({ ...userData, ProfileUrl: imageUrll }))
    alert("Image Uploaded Successfully!")

  }

  return (

    <div className="profile-all-main">



      {
        !userData ? (<><p>profile page not defined please login</p></>) : (<>
          <Popup isOpen={ispopOpen} onClose={togglePopup}>
            <div className="container" style={{
              position: 'absolute', zIndex: '999', background: "#f0f3f5",
              top: "50%", left: "50%", transform: 'translate(-50%,-50%)',
              borderRadius: "10px", padding: "20px", maxWidth: "500px"
            }}>
              <div className="container"><div className="container" style={{
                display: "flex",
                flexDirection: 'column', justifyContent: 'center', alignItems: "center"
              }} >
                <div className="container" style={{ appearance: "none", padding: "10px" }} >
                  <div className="container edit-profile-box" style={{
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    boxShadow: "rgba(58, 58, 59, 0.352) 0px 14px  28px, rgba(58, 58, 59, 0.224) 0px -12.125px 35.251px",
                    height: "200px",
                    width: "200px",
                    cursor: "pointer",
                    overflow: "hidden",
                    padding: "0",
                    position: "relative"


                  }}
                    onClick={hendleclick}>

                    <div className="selector" style={{
                      backgroundColor: "rgba(0, 0, 0, 0.46)",
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                      left: "0px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      objectFit: "cover"
                    }}>
                      <FontAwesomeIcon icon="fa-solid fa-camera" style={{ color: "white", fontSize: "1.5rem" }} />
                    </div>
                    <img src={img} alt="" style={{
                      height: "100%",
                      width: "100%"
                    }} />
                  </div>

                </div>
                <br />
                <button className="btn btn-success" onClick={ImageSubmit} >Change</button>
                <input type="file" style={{ display: "none" }} ref={fileref} onChange={hendleImageChange} accept="image/*" />

              </div></div>
            </div>
          </Popup>


          <Navbar />
          <br />

          <div className="profile-main container-fluid">
            <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
              <p>
                {" "}
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> back to home
              </p>
            </Link>

            <div className="profile-firstDiv container d-flex ">
              <div className="profile-firstDiv-left ">
                <div className="profile-img">
                  <div className="edit-profile-img container" onClick={togglePopup} >

                    Edit

                  </div>
                  <img src={userData.ProfileUrl ? userData.ProfileUrl : "https://th.bing.com/th/id/OIP.yYUwl3GDU07Q5J5ttyW9fQHaHa?rs=1&pid=ImgDetMain"} alt="" className="profile-pic" />

                </div>
              </div>
              <div className="profile-firstDiv-right  ">
                <div className="profile-details">
                  <div className="d-flex">
                    <label ><b>Name:</b></label>
                    <p style={{ marginLeft: "5px" }}>{userData.FullName}</p>
                  </div>
                  <div className="d-flex">
                    <label ><b>Phone no. :</b></label>
                    <p style={{ marginLeft: "5px" }}>{userData.PhoneNo}</p>
                  </div>
                  <div className="d-flex">
                    <label ><b>Email :</b></label>
                    <p style={{ marginLeft: "5px" }}>{userData.Email}</p>
                  </div>
                  <div className="d-flex">
                    <label ><b>UserName :</b></label>
                    <p style={{ marginLeft: "5px" }}>{userData.UserName}</p>
                  </div>
                  {/* <Link to={{pathName:'/editprofile', state:{userData}}}></Link> */}
                  <Link to={{ pathname: '/editprofile' }}><button className="btn btn-dark edit-button-profile">Edit</button></Link>
                </div>
              </div>


            </div>
            <div className="container" style={{}}>
              <div className="navProfileSecondDiv">

                <div className="container-with-name container" onClick={() => handlePageChange('cart')}>CART</div>
                <div className="container-with-name container" onClick={() => handlePageChange('myOrders')}>MY ORDERS</div>
                <div className="container-with-name container" onClick={() => handlePageChange('myWishlist')}>MY WISHLIST</div>
                <div className="container-with-name  container" onClick={() => handlePageChange('payments')}>PAYMENTS</div>

              </div>
              <br />
              {/* <div className=" container" style={{overflowY:"scroll"}}> */}
                {SelectedPage === "cart" && <Cart id={userData.id} />}
                {SelectedPage === "myOrders" && <MyOrders />}
                {SelectedPage === "myWishlist" && <MyWishlist />}
                {SelectedPage === "payments" && <Payments />}
              {/* </div> */}
            </div>

          </div></>)
      }
    </div >
  );
};

export default Profile;
