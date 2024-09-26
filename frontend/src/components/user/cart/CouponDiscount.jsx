import { Link } from "react-router-dom";

export default function CartItem() {
  return (
    <div className="col-lg-4 col-md-12 col-12">
        <div className="coupon-wrap mb-40">
          <h4>Coupon Discount </h4>
          <div className="coupon-content common-form-style">
            <p>Enter your coupon code if you have one. </p>
            <div className="input-style coupon-content-mrg">
              <input type="text" placeholder="Coupon code" />
            </div>
            <div className="common-btn-style">
              <a className="common-btn-padding-2" href="#">
                Apply coupon
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
