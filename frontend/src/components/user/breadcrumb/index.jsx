import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); // Tách đường dẫn thành các phần

  // Tạo ra các tên tùy chỉnh cho các đường dẫn
  const breadcrumbNameMap = {
    "/about": "Giới thiệu",
    "/shop": "Cửa hàng",
    "/contact": "Liên hệ",
    "/blog": "Bài viết",
    "/cart": "Giỏ hàng",
    "/product": "Sản phẩm", // Cập nhật để hiển thị cho sản phẩm
  };

  const [slug, setSlug] = useState("");

  // Lấy slug từ API dựa trên ID trong đường dẫn
  useEffect(() => {
    const fetchProduct = async () => {
      const id = pathnames[pathnames.length - 1]; // Lấy ID từ đường dẫn
      if (!isNaN(id)) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/product_detail/${id}`);
          const data = await response.json();
          setSlug(data.product.slug); // Lưu slug từ API
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
    };

    fetchProduct();
  }, [pathnames]);

  // Nếu người dùng đang ở trang chủ thì không hiển thị Breadcrumb
  if (location.pathname === "/") {
    return null;
  }

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
                (isLast && slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : value.charAt(0).toUpperCase() + value.slice(1));

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
