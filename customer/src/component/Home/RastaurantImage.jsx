import React, { useEffect, useRef, useState } from "react";
const RastaurantImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    const handleMouseOverEvent = (index) => () => handleMouseOver(index);
    // Attach event listeners after component mounts
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.addEventListener('mouseover', handleMouseOverEvent(index));
      }
    });

    // Clean up event listeners
    return () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          card.removeEventListener('mouseover', handleMouseOverEvent(index));
        }
      });
    };
  }, []);
  return (
    <section className="rastaurantimage-section">
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
                <span>our rastaurant images</span>
                <div className="title flex">
                  <div className="image">
                    <img src="../../Image/logo.png" alt="" />
                  </div>
                  <h1>Ma annapurana</h1>
                  <div className="image">
                    <img src="../../Image/logo.png" alt="" />
                  </div>
                </div>
                <p>Since our establishment on <span>November 13, 2004</span>, Ma Annapurna Restaurant has been serving delicious flavors with love and dedication. We are grateful for your continued support in making us one of the finest dining spots in Gujarat!</p>

              </div>
         
            <div className="main-card">
              <div className="image-bg">
                <img
                  src="../../../Image/AdobeStock_98997233_Preview-transformed.jpeg"
                  alt=""
                  className={activeIndex === 0 ? "active" : ""}
                  ref={(el) => (imagesRef.current[0] = el)}
                />
                <img
                  src="../../../Image/DeWatermark.ai_1724153376362.png"
                  alt=""
                  className={activeIndex === 1 ? "active" : ""}
                  ref={(el) => (imagesRef.current[1] = el)}
                />
                <img
                  src="../../../Image/siting.jpeg.jpg"
                  alt=""
                  className={activeIndex === 2 ? "active" : ""}
                  ref={(el) => (imagesRef.current[2] = el)}
                />
                <img
                  src="../../../Image/home.png"
                  alt=""
                  className={activeIndex === 3 ? "active" : ""}
                  ref={(el) => (imagesRef.current[3] = el)}
                />
                <img
                  src="../../../Image/outside.png"
                  alt=""
                  className={activeIndex === 4 ? "active" : ""}
                  ref={(el) => (imagesRef.current[4] = el)}
                />
              </div>
              {[0, 1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="card"
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <div className="content">
                  <div className="image flex">
                    <img src="/Image/logo.png" alt="" />
                  </div>                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RastaurantImage;
