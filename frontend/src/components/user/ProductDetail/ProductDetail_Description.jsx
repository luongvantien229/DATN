import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Thêm import useParams

export default function ProductDetail_Description() {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState(null); // Khởi tạo state cho sản phẩm

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/product_detail/${id}`);
        const data = await response.json();
        setProduct(data.product); // Giả sử dữ liệu trả về có cấu trúc như bạn đã cung cấp
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    fetchProductDetail();
  }, [id]);

  // Nếu chưa có sản phẩm, có thể hiển thị thông báo đang tải
  if (!product) {
    return <p>Đang tải dữ liệu sản phẩm...</p>;
  }

  return (
    <div className="product-details-description">
      <div className="entry-product-section-heading">
        <h2>Mô tả</h2>
      </div>
      <p>{product.description}</p> {/* Hiển thị mô tả sản phẩm */}
      <div>
        <h4>Thành phần:</h4>
        <p>{product.ingredient}</p>
      </div>
      <div>
        <h4>Cách sử dụng:</h4>
        <p>{product.uses}</p>
      </div>
      <div>
        <h4>Hướng dẫn sử dụng:</h4>
        <p>{product.user_manual}</p>
      </div>
    </div>
  );
}
