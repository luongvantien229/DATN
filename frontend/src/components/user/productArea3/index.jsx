import React, { useEffect, useState } from "react";
import ProductArena3 from "./productArea3";
import useSlick from "../../../hooks/user/slick";
import axios from "axios";
import "./style.scss";
export default function Index() {
  const { productArena1 } = useSlick();
  const categories = [
    { id: 1, name: "Sản phẩm mới" },
    { id: 2, name: "Thuốc thông thường cảm sốt" },
    { id: 3, name: "Chăm sóc sức khỏe" },
    { id: 4, name: "Thiết bị y tế" },
    { id: 5, name: "Chăm sóc sắc đẹp" },
    { id: 6, name: "Sữa cho cả nhà" },
    { id: 7, name: "Vitamin tổng hợp" },
  ];
  const [currentCategory, setCurrentCategory] = useState(1); // ID mặc định
  const [filteredProducts, setFilteredProducts] = useState([]);
  const fetchProductsByCategory = async (categoryId) => {
    try {
      const response = await axios.get(
        `/get_products_by_category/${categoryId}`
      );
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };
  useEffect(() => {
    fetchProductsByCategory(currentCategory);
  }, [currentCategory]);
  return (
    <div className="product-area pb-70 productArea3">
      <div className="custom-container">
        <div className="section-title-btn-wrap mb-35">
          <div className="section-title-1">
            <h2>Gợi ý hôm nay</h2>
          </div>
        </div>
        <div className="d-flex align-items-center mb-5">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`btn me-2 ${
                currentCategory === category.id
                  ? "btn-primary"
                  : "btn-outline-secondary"
              }`}
              onClick={() => setCurrentCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div
          ref={productArena1}
          className="product-slider-active-1 nav-style-2 nav-style-2-modify-2 d-flex"
        >
          {filteredProducts.slice(0, 5).map((product) => (
            <ProductArena3 key={product.id} product={product} />
          ))}
        </div>
        <div className="row mt-5 g-4 productArea3-banner">
          <div className="col-md-6">
            <div className="banner bg-primary text-white text-center rounded">
              <div>
                <img
                  src="https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/1920x565_1_a50e0dee4c.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner bg-info text-white text-center rounded">
              <div>
                <img
                  src="https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/1920x565_deb9cb8e87.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}