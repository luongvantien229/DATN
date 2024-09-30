import { Link } from "react-router-dom";

export default function CartItem() {
  return (
    <div className="col-lg-4 col-md-12 col-12">
      <div className="coupon-wrap mb-40">
        <h4>Giảm giá tích điểm</h4>
        <div className="coupon-content common-form-style">
          <p>Nhập mã tích điểm của bạn nếu bạn có.</p>
          <div className="input-style coupon-content-mrg">
            <input type="text" placeholder="Mã tích điểm" />
          </div>
          <div className="common-btn-style">
            <a className="common-btn-padding-2" href="#">
              Áp dụng tích điểm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
