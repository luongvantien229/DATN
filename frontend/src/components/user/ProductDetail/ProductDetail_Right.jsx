import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductDetail_Right({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [brands, setBrands] = useState([]); // State để lưu trữ thương hiệu

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value > 0) {
      setQuantity(Number(value));
    }
  };

  // Lấy danh sách thương hiệu
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/all_brands");
        const data = await response.json();
        setBrands(data.brands); // Giả sử data.brands chứa danh sách thương hiệu
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  // Tìm thương hiệu tương ứng với sản phẩm
  const brand = brands.find(brand => brand.id === product.brand_id); // Giả sử product.brand_id chứa ID thương hiệu

  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(product.price);

  return (
    <div className="col-lg-6 col-md-6">
      <div className="product-details-content pro-details-content-pl">
        <div className="pro-details-category">
          <ul>
            <li>
              <a href="shop-filter.html">Dụng cụ y tế tại nhà</a> /
            </li>
            <li>
              <a href="shop-filter.html">Nhà thuốc</a>
            </li>
          </ul>
        </div>
        <h1>{product.name}</h1>
        <div className="pro-details-brand-review">
          <div className="pro-details-brand">
            <span>Thương hiệu: <a href="shop.html">{brand ? brand.name : "Đang tải..."}</a></span>
          </div>
          <div className="pro-details-rating-wrap">
            <span>5.00</span>
            <div className="pro-details-rating">
              {/* Hiển thị sao */}
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <a href="#">(2 đánh giá)</a>
          </div>
        </div>
        <div className="pro-details-price-short-description">
          <div className="pro-details-price">
            <span className="new-price">{formattedPrice}</span>
            {/* Nếu có giá cũ, có thể hiển thị */}
            {/* <span className="old-price">$19.00 - $35.00</span> */}
          </div>
          <div className="pro-details-short-description">
            <p>{product.description}</p>
          </div>
        </div>
        <div className="pro-details-quality-stock-area">
          <span>Số lượng</span>
          <div className="pro-details-quality-stock-wrap">
            <div className="product-quality">
              <input
                className="cart-plus-minus-box input-text qty text"
                name="qtybutton"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <div className="pro-details-stock">
              <span>
                <i className="fas fa-check-circle"></i> {product.qty} trong kho
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
              <i className="fad fa-heart"></i>
            </button>
            <button aria-label="Thêm vào so sánh">
              <i className="far fa-signal"></i>
            </button>
          </div>
        </div>
        <div className="product-details-meta">
          <ul>
            <li><span>Mã sản phẩm:</span> {product.sku}</li>
            <li>
              <span>Thẻ:</span> <a href="#">covid19</a> / <a href="#">chăm sóc tại nhà</a> / <a href="#">Nhà thuốc</a>
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
