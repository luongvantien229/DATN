import { Link } from "react-router-dom";

export default function bannerArena1() {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
      <div className="banner-wrap wow tmFadeInUp mb-30">
        <div className="banner-img banner-img-zoom">
          <a href="product-details.html">
            <img src="assets/images/banner/brand.webp" alt="" />
          </a>
        </div>
        {/* <div className="banner-content-1">
          <span>Personal</span>
          <h2>Temperature Gun</h2>
          <h3>$35.00</h3>
          <div className="btn-style-1">
            <a
              className="font-size-14 btn-1-padding-2"
              href="product-details.html"
            >
              Shop now{" "}
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
