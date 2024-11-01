import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/slices/cartSlice";
export default function HeaderBottomAction() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const sub_total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingFee = 50000;
  const total = sub_total + shippingFee;
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
            <span className="pro-count blue">{cartItems.length}</span>
          </Link>
          <div className="cart-dropdown-wrap">
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <div className="shopping-cart-img">
                    <a href="product-details.html">
                      <img
                        alt={item.name}
                        src={item.image || "assets/images/cart/cart-1.jpg"}
                      />
                    </a>
                  </div>
                  <div className="shopping-cart-title">
                    <h4>
                      <a href="product-details.html">{item.name}</a>
                    </h4>
                    <h3>
                      <span>{item.quantity} × </span>
                      {item.price.toLocaleString("vi-VN")}đ
                    </h3>
                  </div>
                  <div className="shopping-cart-delete">
                    <a href="#" onClick={() => dispatch(removeFromCart(item))}>
                      <i className="far fa-times"></i>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <div className="shopping-cart-footer">
              <div className="shopping-cart-total">
                Phí vận chuyển{" "}
                <h4>
                  {shippingFee.toLocaleString("vi-VN")}đ
                </h4>
                <h4>
                  Tổng cộng <span>{total.toLocaleString("vi-VN")}đ</span>
                </h4>
              </div>
              <div className="shopping-cart-button">
                <a href="/cart">View cart</a>
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
