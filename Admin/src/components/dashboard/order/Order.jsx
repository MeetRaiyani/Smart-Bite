import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdMore } from "react-icons/io";
import OrderItem from "./OrderItem";
import axios from "axios";

const Order = () => {
  const [ordersData, setOrdersData] = useState([]);

  const fetchData = async () => {
    let response;
    await fetch("http://localhost:8000/api/order/recent")
      .then((res) => res.json())
      .then((data) => {
        response = data;
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(response);

    if (response?.data) {
      // console.log(response.data);
      setOrdersData(response.data);
    }
  };

  const statusChangeHandle = async (i, value) => {
    const newArray = [...ordersData];
    newArray[i].status = value;
    const data = newArray[i];
    console.log(data)
    await axios.post("http://localhost:8000/api/order/update-status",data)

    await fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full h-full p-4 rounded-lg">
      <div className="flex items-center w-full text-[20px] mb-4 font-poppins font-semibold">
        <h2 className="text-white-800">Recent Orders</h2>
      </div>
      <div className="orders flex flex-col w-full ">
        {Array.isArray(ordersData) && ordersData.length ? (
          <div className="flex flex-col p-4 gap-2 bg-black-200 rounded-md">
            <div className="grid max-md:grid-cols-5 grid-cols-6  gap-1 text-center items-center justify-between w-full bg-black-200 p-2 relative ">
              <p>id</p>
              <p>Customer</p>
              <p className="max-md:hidden">Dishes</p>
              <p>Price</p>
              <p>status</p>
              <p>Action</p>
            </div>
            {ordersData.map((order, i) => (
              <OrderItem
                key={order._id}
                order={order}
                i={i}
                statusChangeHandle={statusChangeHandle}
              />
            ))}
          </div>
        ) : (
          <div className="flex w-full text-white-400 h-full text-3xl justify-center items-center">
            No Data is available
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
