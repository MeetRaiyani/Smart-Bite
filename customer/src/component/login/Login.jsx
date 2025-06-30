import React, { useEffect, useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./login.css"
import axios from "axios";
const Login = () => {

  const [userdata,setUserdata] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate();

  const submitHandle = async(e) =>{
    e.preventDefault();
    const {email,password} = userdata;
    if(email.trim().length && password.trim().length){
        const data = {email,password}
        const url="http://localhost:8000"
        const user = await axios.post(`${url}/api/user/login`,data)
        .catch(()=>{
            toast.error("Invalid credential")
            setUserdata({...userdata,password:""})
            return;
        });
        
        
        if(user?.data?.data?.user){
            localStorage.setItem("restaurantLogin",user.data.data.user.token)
            toast.success("Login successfully")
            navigate('/');
            window.location.reload();
        }else{
            toast.error("Invalid credential")
            setUserdata({
                email:"",
                password:""
            })
        }

    }else{
        toast.error("Please Fill all the Field")
    }
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <section className="login-section">
        <div className="container">
          <div className="row">
            <div className="border flex">
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
            </div>
            <div className="content flex">
              <div className="heading flex">
                <h3>MY ACCOUNT</h3>

                <p>Home <i className="fa-solid fa-angles-right"></i> My account</p>
              </div>
              <div className="form-box">
                <form onSubmit={submitHandle}>
                  <h2>LOGIN</h2>
                  <label htmlFor="username">email</label>
                  <input type="email" placeholder="enter username" value={userdata.email} onChange={(e)=>setUserdata({...userdata,email:e.target.value.toLowerCase()})} required />

                  <label htmlFor="password">password</label>
                  <input type="password" placeholder="******" value={userdata.password}  onChange={(e)=>setUserdata({...userdata,password:e.target.value})} required />
                  
                  <div className="flex newone">

                  <div className="checkbox flex justify-between">
                    <input className="checkbox" type="checkbox" />
                    <label htmlFor="remember">Remember me</label>
                    
                  </div>
                  <div className="create-Account">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link
                    to="/ragistration"
                    >
                    Create New Account
                    </Link>
                    
                  </div>
                  </div>
                  <div className="btn flex">
                    <button type="submit">submit</button>
                    
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
export default Login;