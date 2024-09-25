import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductArena2 = () => {
  // Dữ liệu JSON giả với 8 sản phẩm
  const productsData = [
    {
      id: 1,
      name: "Disposable Hand Wash Gel",
      category: "Personal",
      price_range: "$20.00 - $27.00",
      badge: "Hot",
      image: "assets/images/product/product-8.jpg",
      hover_image: "assets/images/product/product-8-2.jpg",
    },
    {
      id: 2,
      name: "Reusable Face Mask",
      category: "Health",
      price_range: "$15.00 - $18.00",
      badge: "New",
      image: "assets/images/product/product-2.jpg",
      hover_image: "assets/images/product/product-2-2.jpg",
    },
    {
      id: 3,
      name: "Organic Hand Sanitizer",
      category: "Personal",
      price_range: "$12.00 - $15.00",
      badge: "Sale",
      image: "assets/images/product/product-3.jpg",
      hover_image: "assets/images/product/product-3-2.jpg",
    },
    {
      id: 4,
      name: "Aloe Vera Face Cream",
      category: "Beauty",
      price_range: "$30.00 - $40.00",
      badge: "Best Seller",
      image: "assets/images/product/product-4.jpg",
      hover_image: "assets/images/product/product-4-2.jpg",
    },
  ];

  const [products, setProducts] = useState([]);

  // Lấy dữ liệu sản phẩm khi component được mount
  useEffect(() => {
    if (products.length === 0) {
      setProducts(productsData.slice(0, 4)); // Lấy 4 sản phẩm đầu tiên
    }
  }, [products]);

  return (
    <div className="product-container d-flex">
      {products.map((product) => (
        <div className="product-plr-1" key={product.id}>
          <div className="single-product-wrap">
            <div className="product-img-action-wrap mb-20">
              <div className="product-img product-img-zoom">
                <a href="product-details.html">
                  <img
                    className="default-img"
                    src={product.image}
                    alt={product.name}
                  />
                  <img
                    className="hover-img"
                    src={product.hover_image}
                    alt={product.name}
                  />
                </a>
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
              <div className="product-badges product-badges-position product-badges-mrg">
                <span className="hot yellow">{product.badge}</span>
              </div>
            </div>
            <div className="product-content-wrap">
              <div className="product-category">
                <a href="shop.html">{product.category}</a>
              </div>
              <h2>
                <a href="product-details.html">{product.name}</a>
              </h2>
              <div className="product-price">
                <span>{product.price_range}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductArena2;

<div className="product-plr-1">
  <div className="single-product-wrap">
    <div className="product-img-action-wrap mb-20">
      <div className="product-img product-img-zoom">
        <a href="product-details.html">
          <img
            className="default-img"
            src="assets/images/product/product-8.jpg"
            alt=""
          />
          <img
            className="hover-img"
            src="assets/images/product/product-8-2.jpg"
            alt=""
          />
        </a>
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
      <div className="product-badges product-badges-position product-badges-mrg">
        <span className="hot yellow">Hot</span>
      </div>
    </div>
    <div className="product-content-wrap">
      <div className="product-category">
        <a href="shop.html">Hospital Equipment</a>
      </div>
      <h2>
        <a href="product-details.html">Men V-Neck Scrub Top</a>
      </h2>
      <div className="product-price">
        <span>$25.00 - $27.00 </span>
      </div>
    </div>
  </div>
</div>;
