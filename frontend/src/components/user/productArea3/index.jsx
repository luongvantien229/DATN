import React, { useEffect, useState } from "react";
import ProductArena3 from "./productArea3";
import useSlick from "../../../hooks/user/slick";
import axios from "axios";
import "./style.scss";
import { Link } from "react-router-dom";
export default function Index() {
  const { productArena1 } = useSlick();
  const [newproducts, setNewProducts] = useState([]);
  const fetchNewProducts = async () => {
    try {
      const response = await axios.get("/new_products");
      setNewProducts(response.data.new_products || []);
    } catch (error) {
      console.error("Error fetching new products:", error);
    }
  };
  useEffect(() => {
    fetchNewProducts();
  }, []);
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    try {
      const response = await axios.get("/get_categories_home");
      setCategories(response.data || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const [currentCategory, setCurrentCategory] = useState(0); // ID mặc định
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
  const [bannerImg1, setBannerImg1] = useState([]);

  const fetchBannerImg1 = async () => {
    try {
      const response = await axios.get("/banners/size/5");
      setBannerImg1(response.data || []);
    } catch (error) {
      console.error("Error fetching slider images:", error);
    }
  };
  useEffect(() => {
    fetchBannerImg1();
  }, []);
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
          <button
            className={`btn me-2 ${
              currentCategory === 0 ? "btn-primary" : "btn-outline-secondary"
            }`}
            onClick={() => setCurrentCategory(0)}
          >
            Sản phẩm mới
          </button>
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
          {currentCategory === 0
            ? newproducts
                .slice(0, 5)
                .map((product) => (
                  <ProductArena3 key={product.id} product={product} />
                ))
            : filteredProducts
                .slice(0, 5)
                .map((product) => (
                  <ProductArena3 key={product.id} product={product} />
                ))}
          {/* {filteredProducts.slice(0, 5).map((product) => (
            <ProductArena3 key={product.id} product={product} />
          ))} */}
        </div>
        <div className="row mt-5 g-4 productArea3-banner">
          {bannerImg1.slice(0, 3).map((item) => (
            <div className="col-md-6">
              <div className="banner bg-primary text-white text-center rounded">
                <Link to={item.banner_link ? item.banner_link : "/"}>
                  <div>
                    <img src={item.image_path} alt={item.title} />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
