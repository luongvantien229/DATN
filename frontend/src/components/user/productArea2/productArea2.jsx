import React, { forwardRef, useImperativeHandle, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductArena2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hàm fetchProducts để lấy dữ liệu sản phẩm từ API
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/products/index");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data); // Xem dữ liệu trả về từ API
        // Cập nhật products từ data và giới hạn xuống 5 sản phẩm
        setProducts(data.data.slice(0, 5)); // Lấy 5 sản phẩm đầu tiên
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Đặt trạng thái tải là false sau khi hoàn thành
      }
    };

    fetchProducts(); // Gọi hàm fetchProducts
  }, []); // Chỉ chạy khi component mount

  // Kiểm tra xem có đang tải không
  if (loading) {
    return <div>Loading...</div>; // Hiển thị khi đang tải
  }

  return (
    <div className="product-container d-flex">
    {Array.isArray(products) && products.length > 0 ? (
      products.map((product) => (
        <div className="product-plr-1" key={product.id}>
          <div className="single-product-wrap">
            <div className="product-img-action-wrap mb-20">
              <div className="product-img product-img-zoom">
                <Link to={`/product-detail/${product.id}`}>
                  <img className="default-img" src={product.image} alt={product.name} />
                  <img className="hover-img" src={product.image} alt={product.name} />
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
              {/* <div className="product-badges product-badges-position product-badges-mrg">
                <span className="hot yellow">{product.badge}</span>
              </div> */}
            </div>
            <div className="product-content-wrap">
              <div className="product-category">
                <Link to="/shop">{product.category}</Link>
              </div>
              <h2>
                <Link to={`/product-detail/${product.id}`}>{product.name}</Link>
              </h2>
              {/* <div className="product-price">
                <span>{product.price_range}</span>
              </div> */}
            </div>
          </div>
        </div>
      ))
    ) : (
      <p>Không có sản phẩm</p> // Thông báo nếu không có sản phẩm nào
    )}
    </div>
  );
};

export default ProductArena2; // Đảm bảo rằng bạn xuất component này
