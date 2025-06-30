import React from "react";
import { NavLink } from "react-router-dom";
import "./about.css"
const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="bg-poster"></div>
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
                <h1>about us</h1>
              </div>
              <div className="rastaurant-life">
                <div className="content">

                  <div className="main-box flex">

                    <div className="box">
                      <div className="heading flex">
                        <span>rastaurant life</span>
                        <div className="title flex">
                          <div className="Image flex"><img src="./Image/rev-img.png" alt="" /></div>
                          <h2>ABOUT US</h2>
                          <div className="Image flex"><img src="./Image/rev-img.png" alt="" /></div>
                        </div>

                      </div>
                      <ul>
                        <li><p>Lorem ipsum dolor sit amet, consecte turn se adipisicing elit, sed do eiusmod tempor ens incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci reprehenderit in voluptate velit esse cillu sint occaecat error sit volu.</p></li>
                        <li><p>Cupidatat non proident, sunt in culpa qui cia deserunt mollit anim id est laborum. Sed utsa tat monullamco laboris nisi ut aliquip exe ne com odoconsequat. Duis aute irure dolor in per spiciamt vsun.</p></li>
                        <li><p>aperiam, eaque ipsa quae ab illo inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nem odit aut fugit, sed quia consequ un turmagnido lors.</p></li>
                        <li><NavLink>Read More</NavLink></li>
                      </ul>
                    </div>
                    <div className="box">
                      <div className="image flex">
                        <img src="./Image/AdobeStock_322495633_Preview.jpeg" alt="" />
                      </div>
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
export default About;