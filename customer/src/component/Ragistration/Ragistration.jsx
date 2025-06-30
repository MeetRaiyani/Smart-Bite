import React, { useState } from "react";
import "./ragistration.css"
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Ragistration = () => {

  const [userData,setUserData]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",
    Address:""
  })
  const navigate = useNavigate();

  const dataHandler = (e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUserData({...userData,[name]:value})

  }
  const comparePassword=(pass)=>{
    return userData.password == pass
  }

  const submitHandler = async (e)=>{
    e.preventDefault();
    const pass = document.getElementById('conpassword').value
    if(comparePassword(pass)){
      const data = userData
      const response = await axios.post('http://localhost:8000/api/user/signup',data);

      if(response.status == 200){
        toast.success("user register successfully")
        navigate("/");
      }
    }else{
      toast.error("password and confirm password not match")
    }
  }

  return (
    <>
      <section className="ragistration-section">
        <div className="container">
          <div className="row">
            <div className="border flex">
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
            </div>
            <div className="content">
              <div className="heading flex">
                <h3>MY ACCOUNT</h3>
                <p>Home <i className="fa-solid fa-angles-right"></i> My account</p>
              </div>
              <div className="form-box flex">
                <form action="#" className="flex" onSubmit={submitHandler}>
                  <h2>ragistration</h2>
                  <div className="input-box">
                    <label htmlFor="fname">first Name</label>
                    <input type="text" name="username" placeholder="enter first name" value={userData.username} onChange={dataHandler} required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="lname">last Name</label>
                    <input type="text" placeholder="enter last name" />
                  </div>
                  <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"  placeholder="enter email address" value={userData.email} onChange={dataHandler} required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="mnumber">mobile number</label>
                    <input type="number" name='phone' placeholder="+91 0123456789" value={userData.phone} onChange={dataHandler} required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" placeholder="******" value={userData.password} onChange={dataHandler} required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="password">confirm password</label>
                    <input type="password" id="conpassword" placeholder="******" required />
                  </div>
                  <div className="textarea-box">
                    <label htmlFor="address">address</label>
                    <textarea name="Address"  id="address" value={userData.Address} onChange={dataHandler} required rows={2} placeholder="Delivered Address"></textarea>
                  </div>
                  <div className="checkbox flex">
                    <input className="checkbox" type="checkbox" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <div className="btn flex">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
export default Ragistration;