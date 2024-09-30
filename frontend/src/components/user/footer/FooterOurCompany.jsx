import { Link } from "react-router-dom";

export default function FooterOurCompany() {
  return (
    <div className="col-width-22 custom-common-column">
      <div className="footer-widget mb-40">
        <h3 className="footer-title">Công Ty Chúng Tôi</h3>
        <div className="footer-info-list">
          <ul>
            <li>
              <a href="about-us.html"> Về Chúng Tôi</a>
            </li>
            <li>
              <a href="terms-of-service.html"> Điều Khoản Dịch Vụ </a>
            </li>
            <li>
              <a href="privacy-policy.html"> Chính Sách Bảo Mật</a>
            </li>
            <li>
              <a href="blog.html"> Blog Của Chúng Tôi</a>
            </li>
            <li>
              <a href="contact-us.html"> Liên Hệ </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
