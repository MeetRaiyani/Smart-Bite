
import "./products.css";
import React, { useEffect, useState } from "react";
import { DataMenu } from "../../Apimenu";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/card";
import axios from "axios";
import toast from "react-hot-toast";
const Products = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const [record, setRecord] = useState([]);
  const url = 'http://localhost:8000'
  const dispatch = useDispatch();
  const AddItem = (val) => {
    const { name, _id, price, image, category } = val;
    dispatch(cartActions.addToCart({
      name,
      id:_id,
      price,
      image,
      category,
    }))
  }
  const fetchData = async ()=>{
    const response = await axios.get(`${url}/api/foodItem/list`);

    if(response.data.data){
      setRecord(response.data.data);
    }
  }
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
  useEffect(() => {
    fetchData();
    window.scrollTo(0,0);
  }, [setRecord])

  return (
    <>
      <section className="product-section">
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
              <div className="heading">
                <span>Top Products</span>
                <h1>All Items</h1>
              </div>
              <div className="main-cart flex">
                {
                  record && record.map((val) => {
                    const { _id, price, name, image, category } = val;
                    console.log(_id);
                    
                    return (
                      <div className="cart" key={_id}>
                        <div className="content" >
                          <div className="image">
                            <div className="title">
                              <h5>availabel</h5>
                            </div>
                            <div className="addtocart">
                            <button onClick={() => { 
                                if(isLogin){
                                  AddItem(val)
                                  return toast.success("Item added successfully")
                                }
                                return toast.error("Please Login first")
                              }}>Add to cart</button>
                            </div>
                            <div className="btn flex">
                              <NavLink to={`/addtocart/${_id}`}>Order</NavLink>
                            </div>
                            <img src={image} height={250}  alt="" />
                          </div>
                          <div className="details flex">
                            <ul className="flex">
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                            </ul>
                            <p>{name}</p><span>₹{price}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Products;