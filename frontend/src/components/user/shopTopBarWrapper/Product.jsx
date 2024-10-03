import React from "react";

export default function Index() {
  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-12 col-sm-6 wow tmFadeInUp">
      <div className="single-product-wrap mb-50">
        <div className="product-img-action-wrap mb-10">
          <div className="product-img product-img-zoom">
            <a href="product-details.html">
              <img
                className="default-img"
                src="assets/images/product/20240930044533-0-P27558.jpg"
                alt=""
              />
              <img
                className="hover-img"
                src="assets/images/product/P27558_2.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="product-action-1">
            <button aria-label="Add To Cart">
              <i className="far fa-shopping-bag"></i>
            </button>
            <button aria-label="Add To Wishlist">
              <i className="far fa-heart"></i>
            </button>
            <button aria-label="Compare">
              <i className="far fa-signal"></i>
            </button>
          </div>
          <div className="product-badges product-badges-position product-badges-mrg">
            <span className="red-2">Sold out</span>
          </div>
        </div>
        <div className="product-content-wrap">
          <h2>
            <a href="product-details.html">Viên uống OPTIBAC Intimate Flora For Women</a>
          </h2>
          <div className="product-price">
            <span className="new-price">400.000đ</span>
            <span className="old-price">500.400đ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
