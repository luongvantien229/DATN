import React from "react";
import Product from "./Product";
import Pagination from "../pagination";

export default function Index() {
  return (
    <div className="col-lg-9">
      <div className="shop-topbar-wrapper">
        <div className="totall-product">
          <p>
            {" "}
            We found <span>51</span> products available for you
          </p>
        </div>
        <div className="sort-by-product-area">
          <div className="sort-by-product-wrap">
            <div className="sort-by">
              <span>
                <i className="far fa-align-left"></i>Sort by:
              </span>
            </div>
            <div className="sort-by-dropdown-wrap">
              <span>
                {" "}
                Default <i className="far fa-angle-down"></i>
              </span>
            </div>
          </div>
          <div className="sort-by-dropdown">
            <ul>
              <li>
                <a className="active" href="#">
                  Default
                </a>
              </li>
              <li>
                <a href="#">Popularity</a>
              </li>
              <li>
                <a href="#">Average rating</a>
              </li>
              <li>
                <a href="#">Latest</a>
              </li>
              <li>
                <a href="#">Price: low to high</a>
              </li>
              <li>
                <a href="#">Price: high to low</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shop-bottom-area">
        <div className="row">
            {[...Array(20)].map((_, index) => (
                <Product key={index} />
            ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
