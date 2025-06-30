import React, { useEffect, useState } from "react";
import "./addtocart.css";
import { DataMenu } from "../../Apimenu";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/card";
import axios from "axios";
import toast from "react-hot-toast";
const Addtocart = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [incMoney, setIncmoney] = useState(0);
  const [incItem, setIncitem] = useState(1)


  const cartItems = useSelector((state) => state.cart.itemsList);
  const dispatch = useDispatch();
  
  const AddItem = (val) => {
    if (val) {  // Adjust this based on actual structure
      dispatch(
        cartActions.addToCart({
          name: val.name,   // Adjust based on actual keys
          id: val._id,
          price: val.price,
          quantity:incItem,
          image: val.image,
          category: val.category,
        })
      );
      toast.success("Item added successfully");
    } else {
      toast.error("Invalid item data");
    }
  };
  
  const incricebtn = (price) => {
    setIncitem((prev)=>prev + 1);
    setIncmoney(prev=>prev + price);
  }
  const decricebtn = (price) => {
    if (incItem === 1 || incItem < 1) {
    }
    else {
      setIncitem(incItem - 1);
      setIncmoney(incMoney - price)
    }
  }

  const fetchData = async ()=>{
    const response = await axios.post("http://localhost:8000/api/foodItem/fetch-food",{id});
    if(response.data.success){
      setData([response.data.data]);
     
    }
    else
    {
     toast.error("Error")
    }
  }

  useEffect(() => {
      window.scrollTo(0, 0);
    
    fetchData();
  }, [])

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
      <section className="addtocart-section">
        
        <div className="bg-shadow">
        </div>
        <div className="container">
          <div className="row">
            <div className="border flex">
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
            </div>
            <div className="content">
         
              <div className="main-box flex">
                {
                  data && data.map((val) => {
                    const { id, name, image, price,description } = val;
                    return (
                      <div className="box" key={id}>
                        <div className="content flex">
                          <div className="image flex">
                            <img src={image} alt="product-photo" />
                          </div>
                          <div className="details">
                            <marquee behavior="scroll" direction="left">hurry up order fast before food is out off stock</marquee>
                            <h2>{name}</h2>
                            <p>{description} you trust of ma annapurna restaurant than we gives 100% garanty you can not unsetisfy our service</p>
                            <h5>₹{price}</h5>
                            <div className="btn">
                              <ul>
                                <li  className="flex">
                                <button type="button" onClick={() => incricebtn(price)}>+</button>
                                <h5>{incItem}</h5>
                                  <button type="button" onClick={() => decricebtn(price)}>-</button>
                                </li>
                                <li>
                                <button type="button" onClick={() => { 
                                if(isLogin){
                                  AddItem(val)
                                  return toast.success("Item added successfully")
                                }
                                return toast.error("Please Login first")
                              }}>Add to cart</button></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );

                  })
                }  
                <div className="box">
          <video src="/Image/4268006-uhd_3840_2160_30fps.mp4" className="video" autoPlay muted loop />
        </div>           
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Addtocart;