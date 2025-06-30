import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { IoMdMore } from "react-icons/io";
import Order from './order/order.jsx';
import Popular from './popular/Popular.jsx';
import axios from 'axios';

const Dashboard = () => {
  const [baseData,setBaseData]= useState({
    income:0,
    orders:0,
    panding:0
  })
  
  const fetchData = async()=>{
    const income = await axios.get("http://localhost:8000/api/order/lastmonth-income")
    const orders = await axios.get("http://localhost:8000/api/order/lastmonth-orders")
    const panding = await axios.get("http://localhost:8000/api/order/panding-orders")
    console.log(income,orders,panding);
    
    setBaseData({income:income.data.data[0].totalIncome,orders:orders.data.data[0].orders,panding:panding.data.data[0].orders})
  }
useEffect(()=>{
  fetchData();
},[])
  return (
    <main className='relative justify-between overflow-x-auto w-full h-full px-5 pt-[40px] '>
      <div className='z-10 w-full h-full'>
        <div className="hading mb-3 flex justify-start items-center">
         <h1 className='text-2xl font-semibold font-poppins'>Dashboard</h1>
        </div>
        <div className='w-full  justify-between flex-col gap-[20px] items-center'>
          <div className=' flex gap-3 rounded-lg justify-between income h-full w-full bg-black-200 p-3 px-4'>
            <div className='flex-col flex gap-2 px-4  p-2 bg-black-400 rounded-lg'>
              <h2 className='text-[18px] text-white-800  font-popins font-semibold'>Last Month Revenue</h2>
              <p className='text-green-500'>₹ {baseData.income}</p>
            </div>
            <div className='flex-col flex gap-2 p-2 px-4 bg-black-400 rounded-lg'>
              <h2 className='text-[18px]   text-white-800 font-popins font-semibold'>Last Months Orders</h2>
              <p className='text-purple'>{baseData.orders}</p>
            </div>
            <div className='flex-col flex gap-2 p-2 px-4 bg-black-400 rounded-lg'>
              <h2 className='text-[18px]  font-popins text-white-800 font-semibold'>Panding Orders</h2>
              <p className='text-purple'>{baseData.panding}</p>
            </div>
          </div>
          <div className='flex justify-center items-center w-full h-full'>
          <Popular/>
          </div>
          <div >
          <Order/>
          </div>
        </div>
     
      </div>
    </main>
  )
}

export default Dashboard
