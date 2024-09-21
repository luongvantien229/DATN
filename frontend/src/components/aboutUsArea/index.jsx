import React from "react";
import CounterUp from "../../hooks/counterUp";

export default function Index() {
  return (
    <div className="about-us-area fix about-us-img pt-65 pb-75">
      <div className="container">
        <div className="section-title-2 mb-35 wow tmFadeInUp">
          <h2>
            {" "}
            We provide and extend personalized & innovative healthcare services
            to its customers.
          </h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-img wow tmFadeInUp">
              <img src="assets/images/banner/banner-9.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-content wow tmFadeInUp">
              <div className="total-years">
                <h2 className="count"><CounterUp end={29} duration={2} /></h2>
                <h4>
                  Years <br />
                  Experience
                  <br />
                  Working
                </h4>
              </div>
              <h3>High quality medical equipment and supplies</h3>
              <p>
                We have decades of experience selling medical equipment and
                supplies and managing healthcare facilities. We started Medizin
                Medical Supplies to provide an easy way for organizations to
                purchase high quality medical equipment and supplies from
                leading manufacturers.
              </p>
              <p>
                Customer excellence has always been a top priority and it always
                will be. Thank you for visiting our site. We look forward to
                working with you!
              </p>
              <div className="about-btn">
                <a href="#">
                  Discover now <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mouse-scroll-area-2" id="scene">
        <div data-depth="0.3" className="layer about-us-shape-1">
          <div className="medizin-shape"></div>
        </div>
      </div>
    </div>
  );
}
