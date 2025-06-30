import React, { useEffect, useState } from "react";
import './scroll.css'

const Popular = () => {
  const [popularDishes, setPopularDishes] = useState([]); 
  const fetchData = async () => {
    let response;
    await fetch("http://localhost:8000/api/foodItem/popular")
      .then((res) => res.json())
      .then((data) => {
        response = data;
      })
      .catch((err) => {
        console.log(err);
      });

    if (response?.data) {
     setPopularDishes(response.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  let number = 1;

  return (
    <div className="w-full p-4 rounded-lg ">
      <div className="flex items-center w-full text-[20px]  font-poppins font-semibold">
        <h2 className="text-white-800">Trending Orders</h2>
      </div>
      <div className="orders flex  flex-col w-full ">
        {Array.isArray(popularDishes) && popularDishes.length ? (
          <div className="flex max-md:flex-wrap">
            {popularDishes.map((dish) => (
              <div
                key={dish._id}
                className="flex-col  text-center items-center mr-4 p-2 pb-4 bg-black-300   w-full rounded-[8px] mt-2 relative"
              >
                <div className="flex mb-2 justify-center">
                  <img
                    src={dish.foodItem.image || "/user.jpg"}
                    alt=""
                    className="h-[150px] items-center rounded-[4px] w-full object-cover"
                  />
                </div>
                <div className="flex-col w-full">
                    <div className="flex mb-1 justify-between items-center">
                        <p className="text-gray-300 text-[20px] capitalize">{dish.foodItem.name}</p>
                        <p className="text-gray-400"><span className="text-green-500">₹ {dish.foodItem.price}</span></p>
                    </div>
                    <div className="flex justify-between w-full">
                        <p className="text-gray-400 text-[13px]">Order <span className=" text-red-400">{dish.quantity}</span></p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex w-full text-white-400 h-full text-3xl justify-center items-center">
            Data is fetching
          </div>
        )}
      </div>
    </div>
  );
};

export default Popular;
