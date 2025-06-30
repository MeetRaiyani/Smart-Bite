import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const OrderDetail = () => {
  const {id} = useParams()
  const [orders,setOrder]= useState({})
  const fetchData = async()=>{
    const orderData = await axios.post("http://localhost:8000/api/order/order-detail",{id})
    if(orderData){
      setOrder(orderData.data.data[0])  
    }
  }
  let i=1;
  useEffect(()=>{
    fetchData();
  },[])
  return (

    <main className='flex flex-col w-full h-full gap-4 p-4'>
      { (Array.isArray(orders.orderItems) && orders.orderItems.length) ? (
      <div className='flex flex-col p-4 gap-2 bg-black-200 rounded-md w-full h-full overflow-x-auto'>
        <h2 className='flex justify-center items-center text-2xl font-semibold font-poppins'>Order Items</h2>
      <div className='grid grid-cols-6  gap-1 text-center items-center justify-between w-full bg-black-200 p-2 relative '>
        <p>#</p>
        <p>Image</p>
        <p>Name</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total</p>
      </div>
      {orders.orderItems.map(order=>(
        <div key={order._id} className='grid  rounded-md  grid-cols-6 text-center items-center justify-between p-2 w-full bg-black-400 relative'>
            <p>{i++}</p>
            <div className='flex justify-center' ><img src={order.foodItem.image} alt="" className='h-[40px] w-[40px] rounded-[4px] object-center object-cover'/></div>
            <p className='text-gray-300'>{order.foodItem.name}</p>
            <p className='text-gray-300'>{order.quantity}</p>
            <p className={`text-gray-300`}>{order.foodItem.price}</p> 
            <p>{order.quantity * order.foodItem.price}</p>
        </div>
        
      ))}
      <p className='pt-3 mt-3 text-[20px] flex justify-end'>Total Items : {orders.orderItems.length}</p>
    </div>
    ):(
      <div className='flex w-full max-h-screen justify-center items-center'>
      <img src='/no_data.png' alt='nodata found img'className='h-[400px] object-cover opacity-20 '/>
      </div>
    )}


    <div className='flex flex-col w-full h-full bg-black-200 rounded-[4px] pt-4'>
      <h3 className='flex w-full justify-center items-center text-2xl font-semibold font-poppins'>User Detail</h3>
      <div className='p-[20px] flex flex-col w-full h-full gap-4 justify-center'>
       
        <p>
       Name : <span className='capitalize text-gray-300'>{orders.user?.username}</span>
        </p>
        <p>
       Email : <span className='text-gray-300'>{orders.user?.email}</span>
        </p>
        <p>
        Address : <span className='capitalize text-gray-300'>{orders.user?.Address}</span>
        </p>
        <p>
        Phone : <span className='capitalize text-gray-300'>{orders.user?.phone}</span>
        </p>
        <p>
        Status : <span className={`${orders?.status=="Delivered" ? "text-blue-300":""} ${orders?.status=="Pending" ? "text-green-300":""} `}>{orders?.status}</span>
        </p>
        <p className='text-[20px]'>
        Total Amount : <span className='capitalize text-gray-200 '>{orders.totalAmount}</span>
        </p>

      </div>
    </div>

    </main>
  )
}

export default OrderDetail
