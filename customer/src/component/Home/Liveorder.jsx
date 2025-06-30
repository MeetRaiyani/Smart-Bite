import React from "react";

const Liveorder = () => {
  return (
    <>
      <section className="liveorder-section">
       
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
            <div className="video-box">
          <video src="../../../Image/8922353-uhd_4096_2160_25fps.mp4" autoPlay muted loop />
        </div>
              {/* <div className="heading flex">
                <span>order Now</span>
                <div className="title flex">
                  <div className="image">
                    <img src="../../../Image/rev-img.png" alt="" />
                  </div>
                  <h1>order dish</h1>
                  <div className="image">
                    <img src="../../../Image/rev-img.png" alt="" />
                  </div>
                </div>

              </div>
              <div className="main-box flex">
                <div className="box">
                  <div className="content">
                    <ol>
                      <li><p>stap 1:- <span>select table number</span></p></li>
                      <li> <p> stap 2:- <span>select which dish you order</span></p></li>
                      <li> <p>stap 3:- <span>click to order </span></p> </li>
                      <li> <p>sorry for waiting with in 10 minuts your order is deliver on your tabel</p></li>
                    </ol>
                  </div>
                </div>
                <div className="box">
                  <div className="content">
                    <form action="#" className="flex">
                      <div className="select-box">
                        <ul>
                          <li ><p className="flex">tabel <span>01</span> </p></li>
                          <li ><p className="flex">tabel <span>02</span> </p></li>
                          <li ><p className="flex">tabel <span>03</span> </p></li>
                          <li ><p className="flex">tabel <span>04</span> </p></li>
                          <li ><p className="flex">tabel <span>05</span> </p></li>
                          <li ><p className="flex">tabel <span>06</span> </p></li>
                          <li ><p className="flex">tabel <span>07</span> </p></li>
                          <li ><p className="flex">tabel <span>08</span> </p></li>
                          <li ><p className="flex">tabel <span>09</span> </p></li>
                          <li ><p className="flex">tabel <span>10</span> </p></li>
                        </ul>
                      </div>
                      <div className="select-box">
                        <ul>
                          {
                            DataMenu.map((val) => {
                              const { id, name, price, category } = val;
                              return (
                                <li key={id} ><p className="flex"><span>{id}</span>{name} <span>₹{price}</span></p></li>
                              );
                            })
                          }
                        </ul>         
                         </div>
                      <div className="btn flex">
                        <button type="submit" onClick={() => {
                          let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                          clicksound.play();
                        }}>order</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Liveorder;