import { Link } from "react-router-dom";

export default function HeaderBottomAction() {
  return (
    <div className="header-action-right">
      <div className="header-action">
        <div className="header-action-icon">
          <a className="search-active" href="#">
            <i className="far fa-search"></i>
          </a>
        </div>
        <div className="header-action-icon">
          <a href="wishlist.html">
            <i className="far fa-heart"></i>
          </a>
        </div>
        <div className="header-action-icon header-action-mrg-none">
          <Link to="/cart">
            <i className="far fa-shopping-bag"></i>
            <span className="pro-count blue">02</span>
          </Link>
          <div className="cart-dropdown-wrap">
            <ul>
              <li>
                <div className="shopping-cart-img">
                  <a href="product-details.html">
                    <img alt="" src="assets/images/cart/cart-1.jpg" />
                  </a>
                </div>
                <div className="shopping-cart-title">
                  <h4>
                    <a href="product-details.html">Surgical Latex Gloves</a>
                  </h4>
                  <h3>
                    <span>1 × </span>$10.00
                  </h3>
                </div>
                <div className="shopping-cart-delete">
                  <a href="#">
                    <i className="far fa-times"></i>
                  </a>
                </div>
              </li>
              <li>
                <div className="shopping-cart-img">
                  <a href="product-details.html">
                    <img alt="" src="assets/images/cart/cart-2.jpg" />
                  </a>
                </div>
                <div className="shopping-cart-title">
                  <h4>
                    <a href="product-details.html">Surgical Latex Gloves</a>
                  </h4>
                  <h3>
                    <span>1 × </span>$10.00
                  </h3>
                </div>
                <div className="shopping-cart-delete">
                  <a href="#">
                    <i className="far fa-times"></i>
                  </a>
                </div>
              </li>
            </ul>
            <div className="shopping-cart-footer">
              <div className="shopping-cart-total">
                <h4>
                  Total <span>$383.00</span>
                </h4>
              </div>
              <div className="shopping-cart-button">
                <a href="cart.html">View cart</a>
                <a href="checkout.html">Checkout</a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-action-icon d-block d-lg-none">
          <div className="burger-icon">
            <span className="burger-icon-top"></span>
            <span className="burger-icon-bottom"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
