import { Link } from "react-router-dom";

export default function GrandTotal() {
  return (
    <div className="col-lg-6 col-md-6 col-12">
    <div className="grand-total-wrap mb-40">
      <ul>
        <li>
          Subtotal <h4>$180.00</h4>
        </li>
        <li>
          Shipping{" "}
          <h4>
            <span>Flat rate:</span>$5.00
          </h4>
        </li>
      </ul>
      <div className="grand-total">
        <h4>
          Total <span>$185.00</span>
        </h4>
      </div>
      <div className="grand-total-btn">
        <a href="checkout.html">Checkout</a>
      </div>
    </div>
  </div>
  );
}
