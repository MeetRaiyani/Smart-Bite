import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/card";
import toast from "react-hot-toast";
const Offer = ({isLogin}) => {
  const cartItems = useSelector((state) => state.cart.itemsList);

  const [record, setRecord] = useState([]);
  const dispatch = useDispatch();

  const AddItem = (val) => {
    
    dispatch(cartActions.addToCart({
      name:val.foodItem.name,
      id:val.foodItem._id,
      price:val.foodItem.price,
      image:val.foodItem.image,
      category:val.foodItem.category,
    }))
  }

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
     setRecord(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <section className="offer-section">
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
                <span>today offer</span>
                <h1>special Items</h1>
              </div>
              <div className="main-cart flex">
                {
                  record && record.map((val) => {

                    return (
                      <div className="cart" key={val._id}>
                        <div className="content" >
                          <div className="image">
                            <div className="title">
                              <h5>available</h5>
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
                              
                                  <NavLink to={`/addtocart/${val._id}`}>Order</NavLink>
                                
                            </div>
                            <img src={val.foodItem.image} height={250}  alt="" />
                          </div>
                          <div className="details flex">
                            <ul className="flex">
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                            </ul>
                            <p>{val.foodItem.name}</p><span>₹{val.foodItem.price}</span>
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
export default Offer;