import React, { useContext, useState } from "react";
import "./payment.css"
import { NavLink } from "react-router-dom";
const Payment = () => {

  // const {getTotalCartAmount,token,food_list,cartItems,url}= useContext(Storage)

  const [data,setData] = useState({
    name:"",
    phone:"",
    address:"",
  })
  const onChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData(data =>({...data,[name]:value}))
  }
  const placeOrder = async(e)=>{

  }

  return (
    <>
      <section className="payment-section">
        <div className="container">
          <div className="row">
            <div className="border flex">
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
            </div>
            <form className="place-order content flex" onSubmit={placeOrder}>
              <div className="heading flex">
                <div className="image">
                  <img src="/Image/rev-img.png" alt="" />
                </div>
                <h1>final payment</h1>
                <div className="image">
                  <img src="/Image/rev-img.png" alt="" />
                </div>
              </div>
              <div className="form-box">
                <form action="#" className="flex">
                  <div className="input-box">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="name" required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="mnumber">mobile number</label>
                    <input type="number" placeholder="+91 0123456789" required />
                  </div>
                  <div className="textarea-box">
                    <label htmlFor="address">address</label>
                    <textarea name="address" id="address" required rows={2} placeholder="enter your address"></textarea>
                  </div>
                  <div className="btn flex">
                    <button type="submit">order</button>
                  </div>
                </form>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Payment;