
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail_Left from "./ProductDetail_Left";
import ProductDetail_Right from "./ProductDetail_Right";

export default function ProductDetail() {
  const { id , slug } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        // Kiểm tra slug và id trước khi gọi API
        console.log("Fetching product with slug:", slug, "and id:", id);
        
        const response = await fetch(`http://127.0.0.1:8000/api/product_detail/${slug}/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
        setProduct(data.product);
        console.log("Sản phẩm:", data.product);
        
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (id && slug) {
      fetchProductDetail(); // Gọi hàm chỉ khi có id và slug
    }
  }, [id, slug]); // Thêm id vào dependency array

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

