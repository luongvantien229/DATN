import React from "react"; // Đừng quên import React
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector
import CartItem from "./CartItem";

export default function CartTableContent() {
  const cartItems = useSelector((state) => state.cart.cartItems); // Lấy danh sách sản phẩm từ Redux store
  const dispatch = useDispatch();
  const sub_total = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  return (
    <div className="row">
      <div className="col-12">
        <form action="#">
          <div className="cart-table-content">
            <div className="table-content table-responsive table-content-cart">
            {cartItems && cartItems.length > 0 ? (
                  <>
              <table>
                    <thead>
                      <tr>
                        <th className="width-thumbnail">Sản phẩm</th>
                        <th className="width-name"></th>
                        <th className="width-price">Giá</th>
                        <th className="width-quantity">Số lượng</th>
                        <th className="width-subtotal">Thành tiền</th>
                        <th className="width-remove"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                      ))}
                    </tbody>
                    <thead>
                      <tr>
                        <td colSpan={3} className="px-0">
                          <th className="width-thumbnail">Tổng cộng</th>
                        </td>
                        <th colSpan={3} className="text-center">
                          <span
                            className="badge bg-danger rounded-pill"
                            style={{
                              fontSize: "1.25rem",
                              fontWeight: "bold",
                              marginLeft: 60,
                            }}
                          >
                            {sub_total.toLocaleString("vi-VN")}đ
                          </span>
                        </th>
                      </tr>
                    </thead>
                  
                
              </table>
              </>
              ) : (
                <img src="http://www.tienngocnosa.com/assets/images/empty_cart.png" alt="" className="img-no-cart"/>
              )}
            </div>
            <div className="cart-shiping-update-wrapper">
              <div className="continure-clear-btn">
                <div className="continure-btn">
                  <Link to="/shop">Tiếp tục mua sắm</Link>
                </div>
                {/* <div className="clear-btn">
                  <a href="#">
                    <i className="fal fa-times"></i> Xóa giỏ hàng
                  </a>
                </div> */}
              </div>
              {/* <div className="update-btn">
                <a href="cart.html">Cập nhật giỏ hàng</a>
              </div> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
