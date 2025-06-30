import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
const Privateroute = () => {
    
    const [isLogin,setIsLogin] = useState(true)
    const checkLoginDetails = async ()=>{
        const data = localStorage.getItem('restaurantLogin')
        if(data){
            setIsLogin(true)
        }else{
            setIsLogin(false)
        }
    }
    useEffect(()=>{
        checkLoginDetails();
    },[])
    
    return isLogin ?  
        (
            <div className='w-full h-full flex'> {/* className='lg:flex' add when mobil menu is ready*/}
            <Navbar/>
            <Outlet/>
          </div>
        ) 
        :
        (
            <Navigate to={"/login"}/>
        )
    
        
    
}

export default Privateroute
