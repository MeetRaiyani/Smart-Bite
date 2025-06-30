import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaEdit } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const ManageMenu = () => {
 const [menudata,setMenudata] = useState([])
  
  let number =1;
  const removedata =async (id) =>{
    const response = confirm("Are you sure you want to delete data")
    if(response){
      const res = await axios.post("http://localhost:8000/api/foodItem/delete",{id}).catch(()=>{toast.error("Try again to delete")})
      console.log(res);
      
      toast.success("item deleted successfully")

      await loadData();
    }
  }

  const loadData = async() => {
     const response = await axios.get("http://localhost:8000/api/foodItem/list")
     if(response.data.success){
       setMenudata(response.data.data);
       console.log(response.data.data);
       
     }
     else
     {
      toast.error("Error")
     }
  }
  useEffect(()=>{
    loadData();
  },[]) 

  return (
    <div className='w-full h-full pt-[90px] lg:px-[80px] sm:px-[40px] '>
      <h1 className=' text-center font-semibold font-poppins lg:text-3xl sm:text-2xl mb-[40px]'>Manage Menu <span className='text-orange'>Items</span></h1>

    { (Array.isArray(menudata) && menudata.length) ? (
      <div className='flex flex-col border overflow-x-auto'>
      <div className='grid grid-cols-7 text-center items-center justify-between w-full p-4 border relative '>
        <p>#</p>
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p>Edit</p>
        <p>Delete</p>
      </div>
      {menudata.map(menu=>(
        <div key={menu._id} className='grid grid-cols-7 text-center items-center justify-between p-4 w-full border-t-[1px] border pt-4 relative'>
            <p>{number++}</p>
            <div className='flex justify-center' ><img src={menu.image} alt="" className='h-[50px] w-[50px] object-cover'/></div>
            <p className='text-gray-300'>{menu.name}</p>
            <p className='text-gray-300'>{menu.category}</p>
            <p className='text-gray-300'>{menu.price}</p> 
            <p className='p-2 w-max left-[40%] relative flex justify-center hover:bg-green-400 rounded-lg cursor-pointer' >
              <Link to={`update/${menu._id}`}>
                <FaEdit/>
              </Link>
            </p>
            <p className='p-2 w-max left-[40%] relative flex justify-center hover:bg-red-400 rounded-lg cursor-pointer' onClick={()=>removedata(menu._id)}>
              
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

export default ManageMenu
