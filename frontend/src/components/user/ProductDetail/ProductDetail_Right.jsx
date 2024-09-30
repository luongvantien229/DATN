import React, { useState } from "react"; // Import useState từ React
// import React from "react";
import { Link } from "react-router-dom";

export default function ProductDetail_Right() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value > 0) {
      setQuantity(Number(value));
    }
  };
  return (
    <div className="col-lg-6 col-md-6">
      <div className="product-details-content pro-details-content-pl">
        <div className="pro-details-category">
          <ul>
            <li>
              <a href="shop-filter.html">Dụng cụ y tế tại nhà </a> /{" "}
            </li>
            <li>
              <a href="shop-filter.html">Nhà thuốc </a>
            </li>
          </ul>
        </div>
        <h1> Gel tay khô kháng khuẩn</h1>
        <div className="pro-details-brand-review">
          <div className="pro-details-brand">
            <span>
              {" "}
              Thương hiệu: <a href="shop.html">BioZen</a>
            </span>
          </div>
          <div className="pro-details-rating-wrap">
            <span>5.00</span>
            <div className="pro-details-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <a href="#"> (2 đánh giá)</a>
          </div>
        </div>
        <div className="pro-details-price-short-description">
          <div className="pro-details-price">
            <span className="new-price">$19.00 - $29.00</span>
            <span className="old-price">$19.00 - $35.00</span>
          </div>
          <div className="pro-details-short-description">
            <p>
              Tiêu diệt 99.99% vi khuẩn mà không cần nước. Có chiết xuất lô hội.
            </p>
          </div>
        </div>
        <div className="pro-details-color-wrap">
          <span>Màu sắc</span>
          <div className="pro-details-color-list pro-details-color-mrg tooltip-style-3">
            <ul>
              <li>
                <a aria-label="Xanh lá" className="green" href="#">
                  xanh lá
                </a>
              </li>
              <li>
                <a aria-label="Hồng" className="pink" href="#">
                  hồng
                </a>
              </li>
              <li>
                <a aria-label="Xanh bột" className="powder-blue" href="#">
                  xanh bột
                </a>
              </li>
              <li>
                <a aria-label="Tím" className="purple" href="#">
                  tím
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pro-details-quality-stock-area">
          <span>Số lượng</span>
          <div className="pro-details-quality-stock-wrap">
            <div className="product-quality">
              <input
                className="cart-plus-minus-box input-text qty text"
                name="qtybutton"
                type="number" // Thêm type để người dùng chỉ có thể nhập số
                value={quantity} // Sử dụng state để điều khiển giá trị
                onChange={handleQuantityChange} // Hàm xử lý khi giá trị thay đổi
              />
            </div>
            <div className="pro-details-stock">
              <span>
                <i className="fas fa-check-circle"></i> 6 trong kho
              </span>
            </div>
          </div>
        </div>
        <div className="pro-details-action-wrap">
          <div className="pro-details-add-to-cart">
            <button>Thêm vào giỏ hàng</button>
          </div>
          <div className="pro-details-action tooltip-style-4">
            <button aria-label="Thêm vào danh sách yêu thích">
              <i className="fad fa-heart"></i>{" "}
            </button>
            <button aria-label="Thêm vào so sánh">
              <i className="far fa-signal"></i>{" "}
            </button>
          </div>
        </div>
        <div className="product-details-meta">
          <ul>
            <li>
              <span>Mã sản phẩm:</span> SF1133569600-1{" "}
            </li>
            <li>
              <span>Thẻ: </span> <a href="#">covid19</a> /{" "}
              <a href="#">chăm sóc tại nhà</a> / <a href="#">Nhà thuốc</a>
            </li>
          </ul>
        </div>
        <div className="product-details-social tooltip-style-4">
          <a aria-label="Facebook" className="facebook" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a aria-label="Twitter" className="twitter" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a aria-label="Linkedin" className="linkedin" href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a aria-label="Tumblr" className="tumblr" href="#">
            <i className="fab fa-tumblr-square"></i>
          </a>
          <a aria-label="Email" className="envelope" href="#">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
