import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { Link } from "react-router-dom";

const ProductArena1 = forwardRef((props, ref) => {
  // JSON giả với 8 sản phẩm
  const productsData = [
    {
      id: 1,
      name: "Disposable Hand Wash Gel",
      category: "Personal",
      new_price: 20.0,
      old_price: 27.0,
      discount: "-26%",
      image: "assets/images/product/product-1.jpg",
      sold: 4,
      available: 2,
    },
    {
      id: 2,
      name: "Reusable Face Mask",
      category: "Health",
      new_price: 15.0,
      old_price: 18.0,
      discount: "-16%",
      image: "assets/images/product/product-2.jpg",
      sold: 10,
      available: 5,
    },
    {
      id: 3,
      name: "Organic Hand Sanitizer",
      category: "Personal",
      new_price: 12.0,
      old_price: 15.0,
      discount: "-20%",
      image: "assets/images/product/product-3.jpg",
      sold: 8,
      available: 3,
    },
    {
      id: 4,
      name: "Aloe Vera Face Cream",
      category: "Beauty",
      new_price: 30.0,
      old_price: 40.0,
      discount: "-25%",
      image: "assets/images/product/product-4.jpg",
      sold: 12,
      available: 6,
    },
    {
      id: 5,
      name: "Vitamin C Tablets",
      category: "Health",
      new_price: 25.0,
      old_price: 30.0,
      discount: "-17%",
      image: "assets/images/product/product-5.jpg",
      sold: 15,
      available: 10,
    },
    {
      id: 6,
      name: "Essential Oil Diffuser",
      category: "Home",
      new_price: 50.0,
      old_price: 65.0,
      discount: "-23%",
      image: "assets/images/product/product-6.jpg",
      sold: 20,
      available: 8,
    },
    {
      id: 7,
      name: "Organic Cotton Towels",
      category: "Home",
      new_price: 35.0,
      old_price: 42.0,
      discount: "-17%",
      image: "assets/images/product/product-7.jpg",
      sold: 18,
      available: 7,
    },
    {
      id: 8,
      name: "Reusable Water Bottle",
      category: "Fitness",
      new_price: 18.0,
      old_price: 22.0,
      discount: "-18%",
      image: "assets/images/product/product-8.jpg",
      sold: 9,
      available: 4,
    },
  ];

  const [products, setProducts] = useState([]);

  // Chỉ lấy 4 sản phẩm đầu tiên từ danh sách
  useEffect(() => {
    if (products.length === 0) {
      setProducts(productsData.slice(0, 5)); // Lấy 4 sản phẩm đầu tiên
    }
  }, [products]);

  return (
    <div className="product-container d-flex">
      {products.map((product) => (
        <div
          className="product-slider-active-1 nav-style-2 product-hm1-mrg"
          ref={ref} key={product.id}
        >
          <div className="product-plr-1" >
            <div className="single-product-wrap">
              <div className="product-badges product-badges-mrg">
                <span className="discount red">{product.discount}</span>
              </div>
              <div className="product-content-wrap">
                <div className="product-category">
                  <a href="shop.html">{product.category}</a>
                </div>
                <h2>
                  <a href="/product-detail">{product.name}</a>
                </h2>
                <div className="product-price">
                  <span className="new-price">${product.new_price}</span>
                  <span className="old-price">{product.old_price}</span>
                </div>
              </div>
              <div className="product-img-action-wrap mb-20 mt-25">
                <div className="product-img product-img-zoom">
                  <a href="/product-detail">
                    <img className="default-img" src={product.image} alt="" />
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
              </div>
              <div className="product-stock">
                <div className="status-bar">
                  <div className="sold-bar sold-bar-width-33"></div>
                </div>
                <div className="product-stock-status">
                  <div className="sold stock-status-same-style">
                    <span className="label">Sold: </span>
                    <span className="value">{product.sold}</span>
                  </div>
                  <div className="available stock-status-same-style">
                    <span className="label">Available: </span>
                    <span className="value">{product.available}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default ProductArena1;
