import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import ProductArena1 from "./ProductArea1";
import useSlick from "../../../hooks/user/slick";
import axios from "axios";
import Style from "./style.scss";
import { Link } from "react-router-dom";

export default function Index() {
  const { productArena1 } = useSlick(); // Lấy các ref từ hook

  // Xác định thời gian đếm ngược
  const now = new Date();
  const midnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1, // Ngày mai 12:00 AM
    0,
    0,
    0,
    0
  ).getTime();

  // State để lưu trữ sản phẩm mới
  const [newProducts, setNewProducts] = useState([]);

  // Hàm để lấy sản phẩm mới từ API
  const fetchNewProducts = async () => {
    try {
      const response = await axios.get("/get_products_sold_most");

      console.log(response.data); // In ra để kiểm tra dữ liệu
      setNewProducts(response.data || []); // Đảm bảo new_products là một mảng
    } catch (error) {
      console.error("Error fetching new products:", error);
    }
  };

  // Gọi hàm fetchNewProducts khi component được mount
  useEffect(() => {
    fetchNewProducts();
  }, []);

  return (
    <div className="product-area pt-80 pb-75 productArea1">
      <div className="custom-container">
        <div className="product-area-border">
          <div className="section-title-timer-wrap">
            <div className="section-title-1 section-title-timer-wrap1">
              <h2>Sản phẩm bán chạy</h2>
            </div>
          </div>
          <div className="section-title-timer-wrap section-title-timer-wrap2">
            <div className="section-title-1">
              <Link to="/shop?sold=sold">xem tất cả</Link>
            </div>
          </div>
          <div
            className="product-slider-active-1 nav-style-2 product-hm1-mrg d-flex"
            ref={productArena1}
          >
            {/* Render các sản phẩm mới */}
            {newProducts.map((product) => (
              <ProductArena1 key={product.id} product={product} /> // Pass product to the component
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
