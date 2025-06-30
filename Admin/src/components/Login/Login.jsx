import React, { useState } from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
const Login = () => {

    
    const [userdata,setUserdata]= useState({
        email:"",
        password:""
    })
    const [toggle,setToggle] = useState(false)
    const [isloggedin,setIsloggedin]= useState(false)
    const loginhandle = async ()=>{
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
            
            
            if(user?.data?.data.user.role == "admin"){
                localStorage.setItem("restaurantLogin",user.data.data.user.token)
                setIsloggedin(true)
                toast.success("Login successfully")
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
        // console.log(user);
        
    }
  return (
    <div className='login-bg w-full h-full flex justify-center items-center' >
        <form className='login border border-transparent  bg-black-100 flex flex-col  relative items-center'>
        <div className='flex flex-col justify-center items-center bg-black-100 py-[20px] px-[40px] max-sm:w-[300px] z-10'>
            <h1 className='text-3xl font-semibold mb-9 text-blue-200'>Login</h1>
            <div className="flex h-full gap-[20px] flex-col">
                <div className="email flex gap-2 sm:w-[300px] md:min-w[550px] flex-col">
                    <label htmlFor="email" className=''> Email </label>
                    <div className='flex items-center gap-1 py-2 px-4 w-full relative border rounded-md'>
                    <MdAlternateEmail className='relative left-[-5px]'/>
                    <input
                    className='bg-transparent outline-none w-full'
                    type='email'
                    required
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
                        required
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
            <div className='flex w-full gap-2 mt-4 mb-5'>Create New Account <span><Link to={"../signup"} className='text-blue-300 underline'> Register</Link></span></div>
            <div className='w-full  flex justify-center'>
                <button type='button' className='w-[50%] py-3 bg-orange rounded-lg' onClick={()=>loginhandle()}> Login</button>
                {isloggedin?<Navigate to={'/'}/>:""}
            </div>
            </div>
        </form>
    </div>
  )
}

export default Login
