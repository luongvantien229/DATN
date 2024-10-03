import { Link } from "react-router-dom";

export default function ProductArena2() {
  return (
    <div className="product-plr-1">
      <div className="single-product-wrap">
        <div className="product-img-action-wrap mb-20">
          <div className="product-img product-img-zoom">
            <a href="product-details.html">
              <img
                className="default-img"
                src="assets/images/product/20240930044533-0-P27558.jpg"
                alt=""
              />
              <img
                className="hover-img"
                src="assets/images/product/P27558_2.jpg"
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
          <h2>
            <a href="product-details.html">Viên uống OPTIBAC Intimate Flora For Women</a>
          </h2>
          <div className="product-price">
            <span>495.000 ₫/Hộp </span>
          </div>
        </div>
      </div>
    </div>
  );
}