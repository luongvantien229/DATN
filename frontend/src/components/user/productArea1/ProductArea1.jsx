import { Link } from "react-router-dom";

export default function ProductArena1() {
  return (
    <div className="product-plr-1">
      <div className="single-product-wrap">
        <div className="product-badges product-badges-mrg">
          <span className="discount red">-26%</span>
        </div>
        <div className="product-content-wrap">
          <div className="product-category">
            <a href="shop.html">Personal</a>
          </div>
          <h2>
            <a href="/product-detail">Disposable Hand Wash Gel</a>
          </h2>
          <div className="product-price">
            <span className="new-price">$20.00</span>
            <span className="old-price">$27.00</span>
          </div>
        </div>
        <div className="product-img-action-wrap mb-20 mt-25">
          <div className="product-img product-img-zoom">
            <a href="/product-detail">
              <img
                className="default-img"
                src="assets/images/product/product-1.jpg"
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
        </div>
        <div className="product-stock">
          <div className="status-bar">
            <div className="sold-bar sold-bar-width-33"></div>
          </div>
          <div className="product-stock-status">
            <div className="sold stock-status-same-style">
              <span className="label">Sold: </span>
              <span className="value">4</span>
            </div>
            <div className="available stock-status-same-style">
              <span className="label">Available: </span>
              <span className="value">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
