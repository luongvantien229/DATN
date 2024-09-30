import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); // Tách đường dẫn thành các phần

  // Nếu người dùng đang ở trang chủ thì không hiển thị Breadcrumb
  if (location.pathname === "/") {
    return null;
  }

  // Tạo ra các tên tùy chỉnh cho các đường dẫn
  const breadcrumbNameMap = {
    "/about": "Giới thiệu",
    "/shop": "Cửa hàng",
    "/contact": "Liên hệ",
    "/blog": "Bài viết",
    "/cart": "Giỏ hàng",
    "/product-detail": "Chi tiết sản phẩm",
  };

  return (
    <div className="breadcrumb-area breadcrumb-area-padding-2 bg-gray-2">
      <div className="custom-container">
        <div className="breadcrumb-content text-center">
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1; // Kiểm tra xem có phải mục cuối cùng không
              const name =
                breadcrumbNameMap[to] ||
                value.charAt(0).toUpperCase() + value.slice(1);

              return (
                <li
                  key={to}
                  className={`${isLast ? "active" : ""}`} // Thêm class "active" nếu là mục cuối
                >
                    {isLast ? (
                        name
                    ) : (
                        <Link to={to}>{name}</Link>
                    )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
