import React, { forwardRef, useImperativeHandle, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductArena1 = forwardRef((props, ref) => {
  const [products, setProducts] = useState([]); // State để lưu danh sách sản phẩm
  const [loading, setLoading] = useState(true); // State để kiểm tra trạng thái tải

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

  console.log(products); // Xem nội dung của products

  return (
    <div className="product-container d-flex">
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div
            className="product-slider-active-1 nav-style-2 product-hm1-mrg"
            key={product.id} // Sử dụng id của sản phẩm làm key
          >
            <div className="product-plr-1">
              <div className="single-product-wrap">
                <div className="product-badges product-badges-mrg">
                  <span className="discount red">
                    {product.favorite ? "Favorite" : "26%"} {/* Hiển thị trạng thái yêu thích */}
                  </span>
                </div>
                <div className="product-img-action-wrap mb-20 mt-25">
                  <div className="product-img product-img-zoom">
                    <Link to={`/product-detail/${product.id}`}>
                      <img className="default-img" src={product.image} alt={product.name} /> {/* Hình ảnh sản phẩm */}
                    </Link>
                  </div>
                  <div className="product-action-1">
                    <button aria-label="Add To Cart">
                      <i className="far fa-shopping-bag"></i> {/* Biểu tượng thêm vào giỏ hàng */}
                    </button>
                    <button aria-label="Add To Wishlist">
                      <i className="far fa-heart"></i> {/* Biểu tượng thêm vào danh sách yêu thích */}
                    </button>
                    <button aria-label="Compare">
                      <i className="far fa-signal"></i> {/* Biểu tượng so sánh */}
                    </button>
                  </div>
                </div>
                <div className="product-content-wrap">
                  {/* Kiểm tra category_id và lấy tên danh mục */}
                  {product.category ? (
                    <div className="product-category">
                      <a href="shop.html">{product.category.name}</a> {/* Hiển thị tên danh mục */}
                    </div>
                  ) : (
                    <div className="product-category">
                      Category Not Available
                    </div> // Hiển thị nếu không có danh mục
                  )}
                  <h2>
                    <Link to={`/product-detail/${product.id}`}>
                      {product.name} {/* Tên sản phẩm */}
                    </Link>
                  </h2>
                  <div className="product-price">
                    <span className="new-price">${product.price}</span> {/* Giá sản phẩm */}
                    {/* <span className="old-price">{product.old_price}</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Không có sản phẩm</p> // Thông báo nếu không có sản phẩm nào
      )}
    </div>
  );
});

export default ProductArena1;
