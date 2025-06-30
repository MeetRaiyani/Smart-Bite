import React, { useRef, useState } from 'react'
import { MdRestaurantMenu } from "react-icons/md";
import { LuFileEdit } from "react-icons/lu";
import { IoIosAddCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import "./navbar.css"
import { FaClipboardList } from "react-icons/fa";

import { Link } from 'react-router-dom'
const Navbar = () => {
  const handleLogout = async() =>{
    localStorage.removeItem("restaurantLogin");
    window.location.reload()
  }

  return (
    <nav className=' bg-black-100  top-0 '>
      {/* desktop navbar */}
      <div className='justify-between py-[40px] px-[40px] w-[250px]'> {/* max-lg:hidden add when menu is ready*/}
        <div className='logo flex items-center max-md:fixed'>
          <img src="/logo.png" alt="logo" width={60} height={60}/>
        </div>
        <ul className=" max-md:mt-[100px] mt-10">
          <li className='mb-5 '> <Link to="/" className='menu_icon relative transition-all pt-2 pl-2 pr-2 pb-2  cursor-pointer flex items-center gap-3' ><MdRestaurantMenu /> Dashboard</Link> </li>
          <li className='mb-5 '> <Link to="/add" className=' menu_icon relative transition-all pt-2 pl-2 pr-2 pb-2 cursor-pointer flex items-center gap-3' ><IoIosAddCircle /> Add Recipie</Link> </li>
          <li className='mb-5 '> <Link to="/orders" className=' menu_icon relative transition-all pt-2 pl-2 pr-2 pb-2 cursor-pointer flex items-center gap-3' ><FaClipboardList /> Orders List</Link> </li>
          <li className='mb-5 '> <Link to="/manage" className=' menu_icon relative transition-all pt-2 pl-2 pr-2 pb-2 cursor-pointer flex items-center gap-3'><LuFileEdit /> Manage Item</Link> </li>
          <li className='mb-5 '> <Link to="/users-detail" className=' menu_icon relative transition-all pt-2 pl-2 pr-2 pb-2 cursor-pointer flex items-center gap-3' ><FaUser/> Users </Link> </li>
        </ul>
        <div className='flex items-center'>
          <button onClick={()=>handleLogout()} className='mt-4 bg-red-500 px-[30px] py-[8px] rounded-md ml-2 '> Logout</button>
        </div>
      </div>
     
    </nav>
  )
}

export default Navbar
