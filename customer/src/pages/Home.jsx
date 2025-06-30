import React, { useEffect, useState } from "react";
import Ourmenu from "../component/Home/Ourmenu";
import Homeabout from "../component/Home/Homeabout";
import Tips from "../component/Home/Tips";
import Offer from "../component/Home/Offer";
import RastaurantImage from "../component/Home/RastaurantImage";
import Slider from "../component/Home/Slider";
import Speciality from "../component/Home/Speciality";
import Liveorder from "../component/Home/Liveorder";
const Home = () => { 
  const [isLogin,setIsLogin] = useState(false)
  const isLoggedin = ()=>{
    const response = localStorage.getItem("restaurantLogin")
    if(response){
      setIsLogin(true)
    }
  }
  useEffect(()=>{
    window.scrollTo(0, 0);
    isLoggedin();
  },[])
  return (
    <>   
      <Slider />
      <Homeabout />
      <Liveorder />
      <RastaurantImage />
      <Speciality />
      <Offer isLogin={isLogin}/>
      <Tips />   
    </>
  );
}
export default Home;