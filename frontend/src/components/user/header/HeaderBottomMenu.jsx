import { Link } from "react-router-dom";
import './header.scss';

export default function HeaderBottomMenu() {
  return (
    <div className="main-menu main-menu-padding-1 main-menu-lh-1 d-none d-lg-block hover-boder">
              <nav>
                <ul>
                  <li>
                    <Link className="active" to="/">
                      Trang chủ
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      Giới thiệu
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop">
                      Cửa hàng
                    </Link>
                  </li>
                  <li className="position-static">
                    <Link to="/shop">
                      Danh mục <i className="fa fa-chevron-down"></i>
                    </Link>
                    <ul className="mega-menu">
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">
                          Thuốc
                        </a>
                        <ul>
                          <li>
                            <Link to="/shop">
                              Thuốc không kê đơn           
                            </Link>
                          </li>
                          <li>
                            <Link to="/shop">
                              Thuốc kê đơn
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">
                          Thực phẩm chức năng
                        </a>
                        <ul>
                          <li>
                            <Link to="/shop">
                              Chăm sóc sắc đẹp
                            </Link>
                          </li>
                          <li>
                            <Link to="/shop">
                              Nhóm tim mạch
                            </Link>
                          </li>
                          <li>
                            <Link to="/shop">Nhóm hô hấp</Link>
                          </li>
                          <li>
                            <Link to="/shop">Chăm sóc tóc</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-22">
                        <a className="menu-title" href="#">
                          Thiết bị y tế
                        </a>
                        <ul>
                          <li>
                            <Link to="/shop">Máy đo đường huyết</Link>
                          </li>
                          <li>
                            <Link to="/shop">
                              Nhiệt kế
                            </Link>
                          </li>
                          <li>
                            <Link to="/shop">
                              Máy đo huyết áp
                            </Link>
                          </li>
                          <li>
                            <Link to="/shop">
                              Máy đo khí xung
                            </Link>
                          </li>
                          <li>
                            <Link to="/shop">
                              Thiết bị y tế khác
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-mega-menu sub-mega-menu-width-34">
                        <div className="menu-banner-wrap">
                          <Link to="/shop">
                            <img
                              src="assets/images/banner/menu-banner.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="menu-banner-content">
                            <h4>Personal</h4>
                            <h3>
                              Temperature <br /> Gun
                            </h3>
                            <div className="menu-banner-price">
                              <span className="new-price">$35.00</span>
                              <span className="old-price">$45.00</span>
                            </div>
                            <div className="menu-banner-btn">
                              <Link to="/shop">Shop now</Link>
                            </div>
                          </div>
                          <div className="menu-banner-discount">
                            <h3>
                              <span>22%</span>
                              off
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/blog">
                      Bài viết 
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">Liên hệ</Link>
                  </li>
                </ul>
              </nav>
            </div>
  );
}
