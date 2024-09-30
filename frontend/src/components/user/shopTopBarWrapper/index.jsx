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
            Chúng tôi đã tìm thấy <span>51</span> sản phẩm có sẵn cho bạn
          </p>
        </div>
        <div className="sort-by-product-area">
          <div className="sort-by-product-wrap">
            <div className="sort-by">
              <span>
                <i className="far fa-align-left"></i>Sắp xếp theo:
              </span>
            </div>
            <div className="sort-by-dropdown-wrap">
              <span>
                {" "}
                Mặc định <i className="far fa-angle-down"></i>
              </span>
            </div>
          </div>
          <div className="sort-by-dropdown">
            <ul>
              <li>
                <a className="active" href="#">
                  Mặc định
                </a>
              </li>
              <li>
                <a href="#">Phổ biến</a>
              </li>
              <li>
                <a href="#">Đánh giá trung bình</a>
              </li>
              <li>
                <a href="#">Mới nhất</a>
              </li>
              <li>
                <a href="#">Giá: thấp đến cao</a>
              </li>
              <li>
                <a href="#">Giá: cao đến thấp</a>
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
