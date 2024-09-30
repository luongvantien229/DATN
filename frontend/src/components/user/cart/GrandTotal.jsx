import { Link } from "react-router-dom";

export default function GrandTotal() {
  return (
    <div className="col-lg-6 col-md-6 col-12">
      <div className="grand-total-wrap mb-40">
        <ul>
          <li>
            Tổng phụ <h4>$180.00</h4>
          </li>
          <li>
            Phí vận chuyển{" "}
            <h4>
              <span>Phí cố định:</span>$5.00
            </h4>
          </li>
        </ul>
        <div className="grand-total">
          <h4>
            Tổng cộng <span>$185.00</span>
          </h4>
        </div>
        <div className="grand-total-btn">
          <a href="checkout.html">Thanh toán</a>
        </div>
      </div>
    </div>
  );
}
