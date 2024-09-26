import React from "react";

export default function BannerArenaLeft() {
  return (
    <div className="col-lg-8">
      <div className="banner-wrap wow tmFadeInUp mb-30">
        <div className="banner-img banner-img-zoom">
          <a href="product-details.html">
            <img src="assets/images/banner/banner-6.jpg" alt="" />
          </a>
        </div>
        <div className="banner-content-2">
          <h2>Independent Living</h2>
          <h3 className="d-none d-sm-block">Classic Personal Vaporizer</h3>
          <h4>$35.00</h4>
          <div className="btn-style-1">
            <a
              className="font-size-14 btn-1-padding-2"
              href="product-details.html"
            >
              Shop now{" "}
            </a>
          </div>
        </div>
        <div className="banner-badge-2 banner-badge-2-position1">
          <h3>
            <span>Best</span>
            Selling
          </h3>
        </div>
      </div>
    </div>
  );
}
