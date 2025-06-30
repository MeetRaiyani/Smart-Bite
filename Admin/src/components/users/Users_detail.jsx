import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { IoClose } from "react-icons/io5";

const Users_detail = () => {
  const [users,setUsers]=useState([])
  const user_list = async ()=>{
    const url = 'http://localhost:8000'
    const userData = await axios.get(`${url}/api/user/user-list`);
    setUsers(userData.data.data)
  }
  const removedata = async (id,role) =>{
    const url = 'http://localhost:8000'
    if(role != "admin"){ 
      const response = confirm("Are you sure you want to remove user")
      if(response){
        console.log("Hello");
        
        const res = await axios.post(`${url}/api/user/remove-user`,{id}).catch(()=>{toast.error("Try again to delete")})
        console.log(res);
        toast.success("user remove successfully")
        await user_list();
      }
    }else{
      toast("Cant remove admin")
    }

  }
  let number=1;
  useEffect(()=>{
    user_list();
  },[])
  return (
    <div className='w-full h-full pt-[90px] lg:px-[80px] sm:px-[40px] '>
      <h1 className=' text-center font-semibold font-poppins lg:text-3xl sm:text-2xl mb-[40px]'>Manage User <span className='text-orange'>Data</span></h1>

    { (Array.isArray(users) && users.length) ? (
      <div className='flex flex-col p-4 gap-2 bg-black-200 rounded-md'>
      <div className='grid grid-cols-6  gap-1 text-center items-center justify-between w-full bg-black-200 p-2 relative '>
        <p>#</p>
        <p>Image</p>
        <p>Name</p>
        <p>Email</p>
        <p>Role</p>
        <p>Remove</p>
      </div>
      {users.map(user=>(
        <div key={user._id} className='grid max-md:grid-cols-5 rounded-md  grid-cols-6 text-center items-center justify-between p-2 w-full bg-black-400 relative'>
            <p>{number++}</p>
            <div className='flex justify-center' ><img src={user.avtar || "/user.jpg"} alt="" className='h-[40px] w-[40px] rounded-[20px] object-center object-cover'/></div>
            <p className='text-gray-300'>{user.username}</p>
            <p className='text-gray-300'>{user.email}</p>
            <p className={`${user.role=="admin"?"text-green-500":"text-gray-500"} text-gray-300`}>{user.role}</p> 
            <p className={`p-2 w-max left-[40%] relative flex justify-center  rounded-lg cursor-pointer ${user.role == "admin" ? "hover:bg-gray-500" : "hover:bg-red-400"}`}  onClick={()=>removedata(user._id,user.role)}>
              
               <IoClose />
             
            </p>
        </div>
        
      ))}
    </div>
    ):(
      <div className='flex w-full max-h-screen justify-center items-center'>
      <img src='/no_data.png' alt='nodata found img'className='h-[400px] object-cover opacity-20 '/>
      </div>
    )}
    </div>
  )
}

export default Users_detail
