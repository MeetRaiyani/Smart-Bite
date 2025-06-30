import React, { useEffect, useState } from 'react'
import "./MyOrder.css"
import axios from 'axios';

const MyOrder = () => {

    const [data,setData] = useState([])
    const token = localStorage.getItem("restaurantLogin");

    const fetchOrders = async () =>{
        const response = await axios.post('http://localhost:8000/api/order/userorders',{token},{headers:{token}});

        setData(response.data.data);
        console.log(response.data.data);
        
        
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }else{

        }
    },[token])


  return (
    <section className='my-orders'>
        <div className='container'>
        <h2>MyOrders</h2>
            {data.map((order,index)=>{
                return(<div key={index} className='my-orders-order'>
                    <img src="/Image/parcel.png" height={100} alt="parcel image" />
                    <p className='order-list'>{order.orderItems.map((item,index)=>{
                        if(index==order.orderItems.length-1){
                            return item.foodItem.name+" x "+item.quantity;
                        }
                        else{
                            return item.foodItem.name+" x "+item.quantity+" , ";
                        }
                    })}</p>
                    <p>
                        ₹{order.totalAmount}
                    </p>
                    <p>
                        Items: {order.orderItems.length}
                    </p>
                    <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                </div>)
            })}
        </div>
      
    </section>
  )
}

export default MyOrder
