import React from "react";

export default function BannerArenaRight() {
  return (
    <div className="col-lg-4">
      <div className="banner-wrap wow tmFadeInUp mb-30">
        <div className="banner-img banner-img-zoom">
          <a href="product-details.html">
            <img src="assets/images/banner/banner-7.jpg" alt="" />
          </a>
        </div>
        <div className="banner-content-3">
          <span>Home Medical Supplies</span>
          <h2>Digital Thermometer</h2>
          <h4>$45.00 - $55.00</h4>
          <div className="btn-style-1">
            <a
              className="font-size-14 btn-1-padding-2"
              href="product-details.html"
            >
              Shop now{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
