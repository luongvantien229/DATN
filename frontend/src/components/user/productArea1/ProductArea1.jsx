import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const ProductArena1 = forwardRef(({ product }, ref) => {
  return (
    <div className="product-plr-1">
      <div className="single-product-wrap">
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
            <Link to={`/product-detail/${product.id}`}>
              <img
                className="default-img"
                src={product.image || "assets/images/product/default.png"} // Sử dụng ảnh từ sản phẩm
                alt={product.name} // Tên sản phẩm
              />
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
        </div>
        <div className="product-content-wrap">
          <h2>
            <Link to={`/product-detail/${product.id}`}>{product.name}</Link> {/* Tên sản phẩm */}
          </h2>
          <div className="product-price">
            <span className="new-price">{Number(product.price).toLocaleString()}đ</span> {/* Giá sản phẩm */}
            {/* Nếu có giá cũ, hiển thị tại đây */}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductArena1;
