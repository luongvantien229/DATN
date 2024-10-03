import { Link } from "react-router-dom";

export default function SingleContactInfo() {
  return (
    <div className="contact-info-wrap-2 mb-40">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 col-sm-5 wow tmFadeInUp">
          <div className="single-contact-info3-wrap mb-30">
            <div className="single-contact-info3-icon">
              <i className="fal fa-map-marker-alt"></i>
            </div>
            <div className="single-contact-info3-content">
              <h3>Địa chỉ</h3>
              <p className="width-1">
                152 Đoàn Văn Bơ Phường 9 Quận 4
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 col-sm-7 wow tmFadeInUp">
          <div className="single-contact-info3-wrap mb-30">
            <div className="single-contact-info3-icon">
              <i className="fal fa-phone"></i>
            </div>
            <div className="single-contact-info3-content">
              <h3>Liên hệ</h3>
              <p>
                Di động: <span>(+61) - 1990 - 6886</span>
              </p>
              <p>
                Đường dây nóng: <span>1800 - 1102</span>
              </p>
              <p>
                Email: <span>contact@medizin.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 col-sm-12 wow tmFadeInUp">
          <div className="single-contact-info3-wrap mb-30">
            <div className="single-contact-info3-icon">
              <i className="fal fa-clock"></i>
            </div>
            <div className="single-contact-info3-content">
              <h3>Giờ làm việc</h3>
              <p>Thứ Hai - Thứ Sáu: 09:00 - 20:00</p>
              <p>Thứ Bảy & Chủ Nhật: 10:30 - 22:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
