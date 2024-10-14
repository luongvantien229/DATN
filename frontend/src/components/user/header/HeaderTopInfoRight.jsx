import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function HeaderTopHeaderInfoRight() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({}); // Khởi tạo dưới dạng đối tượng rỗng

  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     try {
  //       const token = localStorage.getItem("token");

  //       if (!token) {
  //         navigate("/login");
  //         return;
  //       }

  //       const response = await axios.get(
  //         "http://127.0.0.1:8000/api/auth/your_profile",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       // Đặt chi tiết người dùng trực tiếp từ response.data
  //       setUserDetails(response.data);
  //     } catch (error) {
  //       if (error.response?.status === 401) {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Xác Thực Thất Bại",
  //           text: "Vui lòng đăng nhập lại.",
  //         }).then(() => {
  //           navigate("/login");
  //         });
  //       } else {
  //         console.error("Lỗi khi lấy thông tin người dùng:", error);
  //       }
  //     }
  //   };
  //   fetchUserDetails();
  // }, [navigate]);

  return (
    <div className="col-xl-3 col-lg-4">
      <div className="header-info header-info-right">
        <ul>
          <li>
            <a className="language-dropdown-active" href="#">
            Tiếng Anh <i className="fa fa-chevron-down"></i>
            </a>
            <ul className="language-dropdown">
              <li>
                <a href="#">Tiếng Pháp</a>
              </li>
              <li>
                <a href="#">Tiếng Đức.</a>
              </li>
              <li>
                <a href="#">Tiếng Việt</a>
              </li>
            </ul>
          </li>
            <li className="nav-item lh-1 me-4 hihi">
              <a
                className="github-button"
                href="/"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star themeselection/sneat-html-admin-template-free trên GitHub"
              >
                Name:{userDetails.name}
              </a>
            </li>
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <Link
                className="nav-link hide-arrow p-0"
                to="#"
                data-bs-toggle="dropdown"
              >
                <div className="avatar avatar-online">
                  <img
                    src="/assets/images/avatars/1.png"
                    alt="Hình đại diện người dùng"
                    className="w-px-40 h-auto rounded-circle"
                  />
                </div>
              </Link>
              </li>
              <li className="nav-item lh-1 me-4 hihi">
              <a
                className="github-button"
                href="/"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star themeselection/sneat-html-admin-template-free trên GitHub"
              >
                Thoát
              </a>
            </li>
          <li>
            <Link to="/login-register">Đăng nhập / Đăng kí</Link>
          </li>
        </ul>
        
      </div>
    </div>
  );
}
