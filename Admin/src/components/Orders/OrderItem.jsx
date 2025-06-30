import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import { IoMdMore } from "react-icons/io";

const OrderItem = (
    {
    order,
    i,
    statusChangeHandle
    }
    ) => {
        const [toggleStatus,setToggleStatus]= useState(false)
  return (
    <div key={order._id} className='grid max-md:grid-cols-5 rounded-md  grid-cols-6 text-center items-center justify-between p-2 w-full bg-black-400 relative'>
            <p>
              <Link to={`/order/${order._id}`} className='text-blue-500 cursor-pointer'>
              {i+1}
              </Link>
            </p>
            <div className='flex justify-center' ><p className=' object-cover flex items-center'>{order.user.username ? order.user.username: "User is Removed" }</p></div>
            <p className='text-gray-300 max-md:hidden'>{order.orderItems.length}</p>
            <p className='text-gray-300'>{order.totalAmount}</p> 
            <p className="flex justify-center items-center select-none" >
              <p className={`p-1 flex justify-center items-center w-max ${order.status=="Cancel"? "text-gray-500" : "" } ${order.status=="Confirmed"? "text-blue-500" : "" } ${order.status=="Delivered"? "text-purple" : "" } ${order.status=="Pending"? "text-green-500" : "" } rounded-lg `}>
              {order.status}
              </p>
            </p>
            <p className=' flex justify-center items-center z-20  relative' onClick={()=>setToggleStatus(prev=>!prev)}>
              <button className=' text-white hover:bg-black-200 p-2 rounded-[16px]'>
              <IoMdMore className='cursor-pointer'/>
              </button>
              <div className={`flex flex-col gap-2 bg-black-200 px-[12px]  absolute rounded-lg  bottom-[100%] z-30 ${toggleStatus ? "" : "max-h-0 overflow-hidden" }`}>
                <p className='hover:text-gray-500 cursor-pointer mt-2' onClick={()=>statusChangeHandle(i,"Confirmed")}>Confirmed</p>
                <p className='hover:text-gray-500 cursor-pointer' onClick={()=>statusChangeHandle(i,"Cancel")}>Cancel</p>
                <p className='hover:text-gray-500 mb-2 cursor-pointer' onClick={()=>statusChangeHandle(i,"Delivered")}>Delivered</p>
              </div>
             
            </p>
        </div>
  )
}

export default OrderItem
