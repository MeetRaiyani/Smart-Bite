import React from "react";
import "./gallery.css"
const Gallery = () => {
  return (
    <>
      <section className="Gallery-section">
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
                <h1>Gallery</h1>
              </div>
              <div className="main-box">
                <div className="box">
                  <ul className="flex">
                    <li><div className="image" data-aos="slide-right"><div className="hover"></div><img src="./Image/inner-pages-gallery-img-1.jpg" alt="" /></div></li>
                    <li><div className="image" data-aos="slide-up"><div className="hover"></div><img src="./Image/inner-pages-gallery-img-2.jpg" alt="" /></div></li>
                    <li><div className="image" data-aos="slide-left"><div className="hover"></div><img src="./Image/inner-pages-gallery-img-3.jpg" alt="" /></div></li>
                    <li><div className="image" data-aos="slide-left"><div className="hover"></div><img src="./Image/inner-pages-gallery-img-4.jpg" alt="" /></div></li>
                    <li><div className="image"><div className="hover"></div><img src="./Image/inner-pages-gallery-img.png" alt="" /></div></li>
                    <li><div className="image" data-aos="slide-right"><div className="hover"></div><img src="./Image/inner-pages-gallery-img-5.jpg" alt="" /></div></li>
                    <li><div className="image" data-aos="slide-left"><div className="hover"></div><img src="./Image/inner-pages-gallery-img-6.jpg" alt="" /></div></li>
                    <li><div className="image" data-aos="slide-down"><div className="hover"></div><img src="./Image/inner-pages-gallery-img-7.jpg" alt="" /></div></li>
                    <li><div className="image" data-aos="slide-right"><div className="hover"></div><img src="./Image/inner-pages-gallery-img-8.jpg" alt="" /></div></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );

}
export default Gallery;