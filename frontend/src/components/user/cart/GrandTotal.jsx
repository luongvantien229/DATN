import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import Stripe from '../payments/Stripe';

export default function GrandTotal() {
  const { cartItems } = useSelector((state) => state.cart);
  const sub_total = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  const shippingFee = 50000;
  const total = sub_total + shippingFee;

  return (
    <div className="col-lg-6 col-md-6 col-12">
      <div className="grand-total-wrap mb-40">
        <ul>
          <li>
            Tổng phụ <h4> {sub_total.toLocaleString("vi-VN")}đ</h4>
          </li>
          <li>
            Phí vận chuyển{" "}
            <h4>
              <span>Phí cố định:</span>
              {shippingFee.toLocaleString("vi-VN")}đ
            </h4>
          </li>
        </ul>
        <div className="grand-total">
          <h4>
            Tổng cộng <span> {total.toLocaleString("vi-VN")}đ</span>
          </h4>
        </div>

        <div className="grand-total-btn">{total > 50000 && <Stripe />}</div>

      </div>
    </div>
  );
}
