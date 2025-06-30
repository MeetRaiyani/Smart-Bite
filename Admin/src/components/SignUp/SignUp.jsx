import React, { useState } from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

import { Link, redirect } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


const Signup = () => {
    const [userdata,setUserdata]= useState({
        username:"",
        email:"",
        password:""
    })
    const [toggle,setToggle] = useState(false)

    const signuphandle = async (e)=>{
        e.preventDefault()
        const url = 'http://localhost:8000'
        const{username,email,password}= userdata;

        // const formData = new FormData();
        // formData.append("email",email);
        // formData.append("username",username);
        // formData.append("password",password);
        const data = {username,email,password}
        // console.log(formData)

        const res = await axios.post("http://localhost:8000/api/user/signup",data).catch((err)=>console.log(err));
        console.log(res);

        // axios.post('http://localhost:8000/api/user/signup', {
        //     email:"test2@gmail.com",
        //     username:"test2",
        //     password:"1231",
        //     phone:"1234567890",
        //     Address:"xyz1"
        // })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

        toast.success("Registration success")

        setUserdata({
            username:"",
            email:"",
            password:""
        })
        

        
    }

  return (
    <div className=' signup-bg w-full h-full flex justify-center items-center'>
        <form onSubmit={()=>signuphandle(e)} className='signup border border-transparent  bg-black-100  flex flex-col relative items-center'>
            <div className='flex flex-col justify-center items-center bg-black-100 py-[20px] px-[40px] max-sm:w-[300px] z-10'>
            <h1 className='text-3xl font-semibold mb-9 text-blue-200'>Register</h1>
            <div className="flex h-full gap-[10px] flex-col">
                <div className="username flex gap-2 sm:w-[300px] md:min-w[550px] flex-col">
                    <label htmlFor="username" className=''> Username </label>
                    <div className='flex items-center gap-1 py-2 px-4 w-full relative border rounded-md'>
                    <FaUserCircle className='relative left-[-5px]'/>
                    <input
                    className='bg-transparent outline-none w-full'
                    type='text'
                    name='username'
                    id='username'
                    autoComplete="false" 
                    value={userdata.username}
                    onChange={ (e)=> setUserdata( {...userdata,username:e.target.value} ) }
                    />
                    </div>
                </div>
                <div className="email flex gap-2 sm:w-[300px] md:min-w[550px] flex-col">
                    <label htmlFor="email" className=''> Email </label>
                    <div className='flex items-center gap-1 py-2 px-4 w-full relative border rounded-md'>
                    <MdAlternateEmail className='relative left-[-5px]'/>
                    <input
                    className='bg-transparent outline-none w-full'
                    type='email'
                    name='email'
                    id='email'
                    autoComplete="false" 
                    value={userdata.email}
                    onChange={ (e)=> setUserdata( {...userdata,email:e.target.value} ) }
                    />
                    </div>
                </div>
                <div className="password flex gap-2 flex-col">
                    <label htmlFor="password" className=''> Password </label>
                    <div className='flex items-center gap-1 py-2 px-4 w-full relative border rounded-md'>
                        <RiLockPasswordFill className='relative left-[-5px]' />
                        <input
                        className='bg-transparent outline-none w-full'
                        type={toggle ? "text":"password"}
                        name='password'
                        id='password'
                        value={userdata.password}
                        onChange={ (e)=> setUserdata( {...userdata,password:e.target.value} ) }
                        />
                        <div className='flex absolute right-[20px]' onClick={()=>setToggle(prev=>!prev)}>
                        {
                            userdata.password.length ? (toggle ?  <IoIosEye className=' text-2xl' />:<IoIosEyeOff className=' text-2xl'/>) : ""
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full gap-2 mt-4 mb-5'>Already Have An Account <span><Link to={"../login"} className='text-blue-300 underline'> Login</Link></span></div>
            <div className='w-full  flex justify-center'>
                <button type='submit' className='w-[50%] py-3 bg-orange rounded-lg' onClick={signuphandle}> Signup</button>
            </div>
            </div>
            
        </form>
    </div>
  )
}

export default Signup
