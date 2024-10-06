import { Link } from "react-router-dom";

export default function ProductArena2({ product }) {
  return (
    <div className="product-plr-1">
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
          <div className="product-badges product-badges-position product-badges-mrg">
            <span className="hot yellow">Hot</span>
          </div>
        </div>
        <div className="product-content-wrap">
          <h2>
            <Link to={`/product-detail/${product.id}`}>{product.name}</Link>
          </h2>
          <div className="product-price">
            <span>{product.price} ₫</span>
          </div>
        </div>
      </div>
    </div>
  );
}
