import React from "react";
const Homeabout = () => {
  return (
    <>
      <section className="Homeabout-section">
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
              <div className="heading flex">
                <span>our story</span>
                <div className="title flex">
                  <div className="image">
                    <img src="../../../Image/rev-img.png" alt="" />
                  </div>
                  <h1>about us</h1>
                  <div className="image">
                    <img src="../../../Image/rev-img.png" alt="" />
                  </div>
                </div>
                <p>We don’t cut corners on quality. Our dishes are fresh, delicious, and made with the best ingredients, which is why our prices are a bit higher than the rest.</p>
              </div>
              <div className="main-box flex">
                <div className="box" data-aos="slide-left">
                  <div className="image">
                  <div className="hover"></div>
                    <img src="../../../Image/main-img-1.jpg" alt="" />
                  </div>
                </div>
                <div className="box" data-aos="slide-top">
                  <div className="image">                  
                    <img src="../../../Image/Screenshot__5_-removebg-preview.png" alt="" />
                  </div>
                </div>
                <div className="box"data-aos="slide-right">
                  <div className="image">
                  <div className="hover"></div>
                    <img src="../../../Image/main-img-2.jpg" alt="" />
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
export default Homeabout;