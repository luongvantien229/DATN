import React, { useState } from 'react'; // Import useState từ React
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
              <a href="shop-filter.html">Home Medical Supplies </a> /{" "}
            </li>
            <li>
              <a href="shop-filter.html">Pharmacy </a>
            </li>
          </ul>
        </div>
        <h1> Anti-septic Dry Hand Gel</h1>
        <div className="pro-details-brand-review">
          <div className="pro-details-brand">
            <span>
              {" "}
              Brands: <a href="shop.html">BioZen</a>
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
            <a href="#"> (2 reviews)</a>
          </div>
        </div>
        <div className="pro-details-price-short-description">
          <div className="pro-details-price">
            <span className="new-price">$19.00 - $29.00</span>
            <span className="old-price">$19.00 - $35.00</span>
          </div>
          <div className="pro-details-short-description">
            <p>Kills 99.99% of germs without water. With Aloe Vera Extract.</p>
          </div>
        </div>
        <div className="pro-details-color-wrap">
          <span>Color</span>
          <div className="pro-details-color-list pro-details-color-mrg tooltip-style-3">
            <ul>
              <li>
                <a aria-label="Green" className="green" href="#">
                  green
                </a>
              </li>
              <li>
                <a aria-label="Pink" className="pink" href="#">
                  pink
                </a>
              </li>
              <li>
                <a aria-label="Powder blue" className="powder-blue" href="#">
                  powder-blue
                </a>
              </li>
              <li>
                <a aria-label="Purple" className="purple" href="#">
                  purple
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pro-details-quality-stock-area">
          <span>Quantity</span>
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
                <i className="fas fa-check-circle"></i> 6 in stock
              </span>
            </div>
          </div>
        </div>
        <div className="pro-details-action-wrap">
          <div className="pro-details-add-to-cart">
            <button>Add to cart</button>
          </div>
          <div className="pro-details-action tooltip-style-4">
            <button aria-label="Add To Wishlist">
              <i className="fad fa-heart"></i>{" "}
            </button>
            <button aria-label="Add To Compare">
              <i className="far fa-signal"></i>{" "}
            </button>
          </div>
        </div>
        <div className="product-details-meta">
          <ul>
            <li>
              <span>Sku:</span> SF1133569600-1{" "}
            </li>
            <li>
              <span>Tags: </span> <a href="#">covid19</a> /{" "}
              <a href="#">homecare</a> / <a href="#">Pharmacy</a>
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
