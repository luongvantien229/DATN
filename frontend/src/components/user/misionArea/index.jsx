import React from "react";
import Counter from "../../../hooks/user/counterUp";

export default function Index() {
  return (
    <div className="mision-area bg-gray-2 pt-65 pb-45">
      <div className="container">
        <div className="section-title-2 mb-45 wow tmFadeInUp">
          <h2>
            {" "}
            We provide and extend personalized & innovative healthcare services
            to its customers.
          </h2>
          <p>
            We have recently organised a new office location at 33 Queens
            Square, Leeds to cater for the growth of business for North of UK
            and Scotland locations.{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 col-sm-6 wow tmFadeInUp">
            <div className="medizin-box mb-30" data-vivus-hover>
              <div className="icon-box-wrapper">
                <div className="medizin-icon-wrap">
                  <img
                    className="svgInject"
                    src="assets/images/icon-img/linea-basic-compass.svg"
                    alt=""
                  />
                </div>
                <div className="icon-box-content">
                  <div className="title">
                    <h3>Our Vision</h3>
                  </div>
                  <ul>
                    <li>Good Service</li>
                    <li>For Community</li>
                    <li>Long Term Development</li>
                    <li>Save Our Planet</li>
                    <li>Help People</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12 col-sm-6 wow tmFadeInUp">
            <div className="medizin-box mb-30" data-vivus-hover>
              <div className="icon-box-wrapper">
                <div className="medizin-icon-wrap">
                  <img
                    className="svgInject"
                    src="assets/images/icon-img/linea-basic-flag2.svg"
                    alt=""
                  />
                </div>
                <div className="icon-box-content">
                  <div className="title">
                    <h3>Our Promise</h3>
                  </div>
                  <ul>
                    <li>Sustainable Relationship</li>
                    <li>Renew Commitment</li>
                    <li>Provide The Best Solution</li>
                    <li>Profitable Relationship</li>
                    <li>Adapt With People's Needs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12 col-sm-6 wow tmFadeInUp">
            <div className="medizin-box mb-30" data-vivus-hover>
              <div className="icon-box-wrapper">
                <div className="medizin-icon-wrap">
                  <img
                    className="svgInject"
                    src="assets/images/icon-img/linea-basic-life-buoy.svg"
                    alt=""
                  />
                </div>
                <div className="icon-box-content">
                  <div className="title">
                    <h3>Our Mision</h3>
                  </div>
                  <ul>
                    <li>Change The Habits</li>
                    <li>Best Quality</li>
                    <li>Think Big Do Bigger</li>
                    <li>Stablity & competence</li>
                    <li>Safer & Better Life</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
