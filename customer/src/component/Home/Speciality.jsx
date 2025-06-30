import React from "react";
import { NavLink } from "react-router-dom";
const Speciality = () => {
  return (
    <>
      <section className="speciality-section">
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
                <div className="box">
                  <div className="image">
                    <img src="../../../Image/main-img-5.jpg" alt="" />
                  </div>
                </div>
                <div className="box">
                <div className="heading flex">
                <span>recommendations</span>
                <div className="title flex">
                  <div className="image">
                    <img src="../../../Image/rev-img.png" alt="" />
                  </div>
                  <h2>our best specialites</h2>
                  <div className="image">
                    <img src="../../../Image/rev-img.png" alt="" />
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectet adipisicing eli sed do eiu sm od tempor incididunt ut abore et dolore mag aliqua. Ut enim ad minm eniam quis nostrud.</p>
                <div className="btn">
                <NavLink>view all</NavLink>
                </div>
                
              </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Speciality;