import React from "react";
import ProductArena2 from "./productArea2";
import useSlick from "../../../hooks/user/slick";

export default function Index() {
  const { productArena2 } = useSlick(); // Lấy các ref từ hook

  return (
    <div className="product-area pb-70">
      <div className="custom-container">
        <div className="section-title-btn-wrap mb-35">
          <div className="section-title-1">
            <h2>Hot items</h2>
          </div>
          <div className="btn-style-2">
            <a href="#">
              View all products <i className="far fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        {/* <div ref={productArena2} className="product-slider-active-1 nav-style-2 nav-style-2-modify-2">
          {[...Array(5)].map((_, index) => (
            <ProductArena2 key={index} />
          ))}
        </div> */}
        <ProductArena2 ref={productArena2} />
      </div>
    </div>
  );
}
