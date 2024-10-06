
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import ProductDetail_Left from "./ProductDetail_Left";
import ProductDetail_Right from "./ProductDetail_Right";

export default function ProductDetail() {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/product_detail/${id}`); // Sử dụng id ở đây
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (id) {
      fetchProductDetail(); // Gọi hàm chỉ khi có id
    }
  }, [id]); // Thêm id vào dependency array

  // Nếu product chưa được tải, có thể hiển thị loading hoặc placeholder
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-wrap-top">
      <div className="row">
        <ProductDetail_Left product={product} />
        <ProductDetail_Right product={product} />
      </div>
    </div>
  );
}

