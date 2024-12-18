import React, { useEffect, useState } from "react";
import ProductArena4 from "./productArea4";
import useSlick from "../../../hooks/user/slick";
import axios from "axios"; // Đảm bảo bạn đã cài đặt axios
import "./style.scss";
import { Link } from "react-router-dom";
export default function Index() {
  const categories = [
    { id: 1, name: "Nam giới" },
    { id: 2, name: "Phụ nữ" },
    { id: 3, name: "Trẻ em" },
    { id: 4, name: "Mẹ và bé" },
    { id: 5, name: "Người cao tuổi" },
    { id: 6, name: "Người mang thai" },
    { id: 7, name: "Người tiểu đường" },
  ];
  const { productArena1 } = useSlick(); // Lấy các ref từ hook
  const [currentCategory, setCurrentCategory] = useState(1);
  // Lưu trữ danh sách sản phẩm theo đối tượng
  const [objectProducts, setObjectProducts] = useState([]);
  const getProductByCategory = async (category) => {
    try {
      const response = await axios.get(`/get_products_by_category/${category}`);
      setObjectProducts(response.data);
    } catch (error) {
      console.error("Error fetching products by category: ", error);
    }
  };
  const filteredProducts = objectProducts.filter(
    (product) => product.category == currentCategory
  );
  useEffect(() => {
    getProductByCategory(currentCategory);
  }, [currentCategory]);

  const [viewProducts, setViewProducts] = useState([]);
  useEffect(() => {
    // Hàm gọi API để lấy sản phẩm yêu thích
    const fetchFavoriteProducts = async () => {
      try {
        const response = await axios.get("/get_products_view_most");

        setViewProducts(response.data);
      } catch (error) {
        console.error("Error fetching favorite products:", error);
      }
    };

    fetchFavoriteProducts();
  }, []);

  const [bannerImg1, setBannerImg1] = useState([]);
  const fetchBannerImg1 = async () => {
    try {
      const response = await axios.get("/banners/size/3");
      setBannerImg1(response.data || []);
    } catch (error) {
      console.error("Error fetching slider images:", error);
    }
  };
  useEffect(() => {
    fetchBannerImg1();
  }, []);
  // const filteredProducts = objectProducts.filter(
  //   (product) => product.category == currentCategory
  // );
  return (
    <div className="product-area pb-70 productArea4">
      <div className="custom-container">
        <div className="section-title-btn-wrap mb-35">
          <div className="section-title-1">
            <h2>Sản phẩm xem nhiều</h2>
          </div>
          <div className="btn-style-2">
            <Link to="/shop?view=view">
              Xem tất cả sản phẩm <i className="far fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-3 banner_view">
            {bannerImg1.slice(0, 3).map((item) => (
                <Link to={item.banner_link ? item.banner_link : "/"}>
                  <div>
                    <img src={item.image_path} alt={item.title} />
                  </div>
                </Link>
          ))}
          </div>
          <div className="col-9">
            <div
              ref={productArena1}
              className="product-slider-active-1 nav-style-2 nav-style-2-modify-2 d-flex"
            >
              {/* Render 4 sản phẩm đầu tiên */}
              {viewProducts.slice(0, 4).map((product) => (
                <ProductArena4 key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}