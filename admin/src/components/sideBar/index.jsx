import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  // State để theo dõi mục menu đang hoạt động
  const [activeMenu, setActiveMenu] = useState("/");

  // Hàm xử lý khi nhấp vào mục menu
  const handleMenuClick = (path) => {
    setActiveMenu(path);
  };

  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <Link to="/" className="app-brand-link">
          <span className="app-brand-logo demo"></span>
          <span className="app-brand-text demo menu-text fw-bold ms-2">
            sneat
          </span>
        </Link>

        <a
          href="/"
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm d-flex align-items-center justify-content-center"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li className={`menu-item ${activeMenu === "/" ? "active open" : ""}`}>
          <Link
            to="/"
            className="menu-link"
            onClick={() => handleMenuClick("/")}
          >
            <i className="menu-icon tf-icons bx bx-home-smile"></i>
            <div className="text-truncate" data-i18n="Bảng điều khiển">
              Bảng điều khiển
            </div>
          </Link>
          </li>
          {/* <ul class="menu-sub"> */}
            <li
              className={`menu-item ${
                activeMenu === "/brands" ? "active open" : ""
              }`}
            >
              <Link
                to="/brands"
                className="menu-link"
                onClick={() => handleMenuClick("/brands")}
              >
                <i className="menu-icon tf-icons bx bx-layout"></i>
                <div className="text-truncate" data-i18n="Thương hiệu">
                  Thương hiệu
                </div>
              </Link>
            </li>
            <li
              className={`menu-item ${
                activeMenu === "/categories" ? "active open" : ""
              }`}
            >
              <Link
                to="/categories"
                className="menu-link"
                onClick={() => handleMenuClick("/categories")}
              >
                <i className="menu-icon tf-icons bx bx-layout"></i>
                <div className="text-truncate" data-i18n="Danh mục">
                  Danh mục
                </div>
              </Link>
            </li>
            <li
              className={`menu-item ${
                activeMenu === "/product-types" ? "active open" : ""
              }`}
            >
              <Link
                to="/product-types"
                className="menu-link"
                onClick={() => handleMenuClick("/product-types")}
              >
                <i className="menu-icon tf-icons bx bx-layout"></i>
                <div className="text-truncate" data-i18n="Dạng sản phẩm">
                  Dạng sản phẩm
                </div>
              </Link>
            </li>
            <li
              className={`menu-item ${
                activeMenu === "/products" ? "active open" : ""
              }`}
            >
              <Link
                to="/products"
                className="menu-link"
                onClick={() => handleMenuClick("/products")}
              >
                <i className="menu-icon tf-icons bx bx-layout"></i>
                <div className="text-truncate" data-i18n="Sản phẩm">
                  Sản phẩm
                </div>
              </Link>
            </li>
            <li
              className={`menu-item ${
                activeMenu === "/roles" ? "active open" : ""
              }`}
            >
              <Link
                to="/roles"
                className="menu-link"
                onClick={() => handleMenuClick("/roles")}
              >
                <i className="menu-icon tf-icons bx bx-layout"></i>
                <div className="text-truncate" data-i18n="vai trò">
                  Vai trò
                </div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/login">
                <button type="button" className="btn btn-primary">
                  Đăng Nhập
                </button>
              </Link>
            </li>
          </ul>
        
      {/* </ul> */}
    </aside>
  );
}
