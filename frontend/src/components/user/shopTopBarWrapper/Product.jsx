import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "../../../redux/slices/cartSlice";
import { addToWishList } from "../../../redux/slices/wishlistSlice";

export default function Product({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = {
      ...product,
      quantity: 1,
    };

    dispatch(addToCart(item));
  };

  const handleAddToWishlist = async () => {
    const item = {
      ...product,
    };
    dispatch(addToWishList(item));

    try {
      
      const response = await axios.post(
        `/products/${product.id}/increment-favorite`
      );
      console.log(response.data.message); 
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      
    }
  };
  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-12 col-sm-6 wow tmFadeInUp">
      <div className="single-product-wrap mb-50">
        <div className="product-img-action-wrap mb-10">
          <div className="product-img product-img-zoom">
           
            <Link to={`/product-detail/${product.slug}/${product.id}`}>
              <img
                className="default-img"
                src={product.image || "assets/images/product/default.png"} // Sử dụng ảnh từ sản phẩm
                alt={product.name} // Tên sản phẩm
              />
               <img className="hover-img" src={product.image} alt={product.name} />
            </Link>
           
            
          </div>
          <div className="product-action-1">
          <button aria-label="Add To Cart" onClick={handleAddToCart}>
              <i className="far fa-shopping-bag"></i>
            </button>
            <button aria-label="Add To Wishlist" onClick={handleAddToWishlist}>
              <i className="far fa-heart"></i>
            </button>
          </div>
          <div className="product-badges product-badges-position product-badges-mrg">
            <span className="red-2">Sold out</span>
          </div>
        </div>
        <div className="product-content-wrap">
          <h2>
          <Link to={`/product-detail/${product.slug}/${product.id}`}>{product.name}</Link> {/* Tên sản phẩm */}
          </h2>
          <div className="product-price">
          <span className="new-price">{Number(product.price).toLocaleString()}đ</span> {/* Giá sản phẩm */}
            {/* <span className="old-price">500.400đ</span> */}
            <span className="old-price">{Number(product.price_cost).toLocaleString()} đ</span> {/* Giá sản phẩm */}
          </div>
        </div>
      </div>
    </div>
  );
}
