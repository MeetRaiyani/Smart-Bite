import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css"
const Slider = () => {
  return (
    <>
      <section className="slider-section">
        <div className="bg-poster">
        </div>
        <div className="container">
          <div className="row">
            <div className="border">
            </div>
            <div className="content">
              <div className="details ">
                <span>Try our Dishes</span>
                <div className="title flex ">
                  <div className="image flex"><img src="../../../Image/rev-img.png" alt="" /></div>
                  <h2>Exquisite Eats</h2>
                  <div className="image"><img src="../../../Image/rev-img.png" alt="" /></div>
                </div>
                <p>Our commitment to fresh ingredients and top-quality dishes sets us apart, making our prices slightly higher than other restaurants.</p>
                <div className="btn flex">
                  <NavLink to="/login">login</NavLink>

                </div>
              
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Slider;