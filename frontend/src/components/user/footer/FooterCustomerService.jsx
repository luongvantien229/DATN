import { Link } from "react-router-dom";

export default function FooterCustomerService() {
  return (
    <div className="col-width-22 custom-common-column">
      <div className="footer-widget mb-40">
        <h3 className="footer-title">Dịch Vụ Khách Hàng</h3>
        <div className="footer-info-list">
          <ul>
            <li>
              <a href="#"> Các Tùy Chọn Vận Chuyển</a>
            </li>
            <li>
              <a href="wishlist.html"> Danh Sách Yêu Thích </a>
            </li>
            <li>
              <a href="my-account.html"> Tài Khoản Của Tôi </a>
            </li>
            <li>
              <a href="return-policy.html"> Chính Sách Đổi Trả </a>
            </li>
            <li>
              <a href="#"> Câu Hỏi Thường Gặp Về Mua Sắm </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
