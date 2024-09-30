import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { Link } from "react-router-dom";

const ProductArena1 = forwardRef((props, ref) => {
  return (
    <div className="product-plr-1">
      <div className="single-product-wrap">
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
            <Link to="/product-detail">
              <img
                className="default-img"
                src="assets/images/product/P00641_1.png"
                alt=""
              />
            </Link>
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
        </div>
        <div className="product-badges product-badges-mrg">
          <span className="discount red">-26%</span>
        </div>
        <div className="product-content-wrap">
          <h2>
            <Link to="/product-detail">Hoạt Huyết Nhất Nhất</Link>
          </h2>
          <div className="product-price">
            <span className="new-price">120.000đ</span>
            <span className="old-price">100.000đ</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductArena1;
