import React from "react";
import { NavLink } from "react-router-dom";
const Tips = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.querySelector(".marquee-inner");
    const speed = 1; // Scrolling Speed
    let scrollAmount = 0;
    let isHovered = false;
    // Duplicates the content
    const marqueeContent = marquee.innerHTML;
    marquee.innerHTML += marqueeContent;
  
    const startScrolling = () => {
      if (!isHovered) {
        scrollAmount -= speed;
        if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
          scrollAmount = 0;
        }
        marquee.style.transform = `translateX(${scrollAmount}px)`;
      }
      requestAnimationFrame(startScrolling);
    };
  
    marquee.addEventListener("mouseover", () => {
      isHovered = true;
    });
  
    marquee.addEventListener("mouseout", () => {
      isHovered = false;
    });
  
    startScrolling();
  });
  return (
    <>
      <section className="tips-section">
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
                  <div className="heading flex">
                    <span>our food philosophy</span>
                    <div className="title flex">
                      <div className="image">
                        <img src="../../../Image/rev-img.png" alt="" />
                      </div>
                      <h2>our tips</h2>
                      <div className="image">
                        <img src="../../../Image/rev-img.png" alt="" />
                      </div>
                    </div>
                   <p> At Radhe Krishna Restaurant, we believe that freshness is the key to great taste! 🍽️✨ That's why we use only the finest ingredients, sourced daily, to bring you authentic flavors and a delightful dining experience.</p>
                    <div className="btn">
                      <NavLink>read more</NavLink>
                    </div>

                  </div>
                </div>
                <div className="box flex">
                  <div className="image"><img src="../../../Image/main-img-6.jpg" alt="" /></div>
                  <div className="image"><img src="../../../Image/main-img-8.jpg" alt="" /></div>
                </div>
              </div>
            </div>
            <div class="marquee">
              <div class="marquee-inner">
                <img src="../../../Image/DeWatermark.ai_1724153328569.png" alt="" />
                <img src="../../../Image/DeWatermark.ai_1724153406090.png" alt="" />
                <img src="../../../Image/DeWatermark.ai_1724153406090.png" alt="" />
                <img src="../../../Image/AdobeStock_446859522_Preview.jpeg" alt="" />
                <img src="../../../Image/AdobeStock_647347899_Preview.jpeg" alt="" />
                <img src="../../../Image/AdobeStock_647349442_Preview.jpeg" alt="" />
                <img src="../../../Image/inner-pages-gallery-img-8.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Tips;