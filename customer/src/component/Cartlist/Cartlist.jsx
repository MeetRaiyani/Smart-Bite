import React, { useEffect } from "react";
import "./cartlist.css"
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/card";
import axios from "axios";
const Cartlist = () => {
  const dispatch = useDispatch();
  let FinalPrice = 0;
  const cartItem = useSelector((state) => state.cart.itemsList);
  cartItem.forEach(element => {
    FinalPrice += element.totleprice;
  });
  const Increment = (val) => {
    const { name, id, price,quantity, image, category } = val;

    dispatch(
      cartActions.addToCart(
        {
          name,
          id,
          price,
          quantity:1,
          image,
          category,
        }
      )
    )
  }
  const Decrement = (val) => {
    dispatch(cartActions.removeFromCart(val.id));
  }

  const submitHandler= async(e)=>{
    e.preventDefault();
    let orderItems = [...cartItem];
    console.log(orderItems);
    const token = localStorage.getItem('restaurantLogin')
    let OrderData = {
      totalAmount:FinalPrice,
      orderItems,
      token
    }
    let response = await axios.post('http://localhost:8000/api/order/place-order',OrderData,{headers:{token}})

    if(response.data.success){
      const {session_url}= response.data.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error")
    }

  }

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
      <section className="cartlist-section">
        <div className="container">

          <div className="row">
            <div className="border flex">
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
            </div>
            <form className="content" onSubmit={submitHandler}>
              <div className="main-box">
                {cartItem.length ? "":
                (<div className="emptyCart">
                  <p>
                    No Food Selected Please Add the Food
                  </p>
                  <div className="link">
                    <Link to={"/"}>
                    <p>Go To Dishes</p>
                    </Link>
                  </div>
                </div>)}
                {cartItem.map((val) => {
                  const { id, name, quantity, totleprice, price, image, category } = val;
                  return (
                    <div className="box" key={id}>
                      <div className="content flex">
                        <div className="image">
                          <img src={image} alt="" />
                        </div>
                        <div className="details flex">
                          <ul className="flex">
                            <li> <h5>{name}</h5></li>
                            <li><p>{category}</p></li>
                            <li className="flex">
                              <button type="button" onClick={() => Increment(val)}><i className="fa-solid fa-square-plus"></i></button>
                              <p>{quantity}</p>
                              <button type="button" onClick={() => Decrement(val)}><i className="fa-solid fa-square-minus"></i></button></li>
                            <li><p>price:- {price}</p></li>
                            <li><p>finalprice:- {totleprice}</p></li>
                          </ul>
                        </div>
                      </div>
                    </div>



                  );
                })}

              </div>
              <div className="finalprice flex">
                <h5>total:- ₹{FinalPrice}</h5>
                <button type="submit">PayNow</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cartlist;