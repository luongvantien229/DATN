import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function HeaderTopHeaderInfoRight() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kiểm tra người dùng đã đăng nhập chưa
  const [userDetails, setUserDetails] = useState({}); // Lưu trữ thông tin người dùng
  const navigate = useNavigate(); // Điều hướng trang

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    // Lưu token vào localStorage nếu có trong URL
    if (token) {
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(!!localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) fetchUserDetails(); // Nếu người dùng đã đăng nhập, tải thông tin người dùng
  }, [isLoggedIn]);

  const fetchUserDetails = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/auth/your_profile"
      );
      setUserDetails(response.data || response.data.user || {});
    } catch (error) {
      if (error.response?.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Xác thực thất bại",
          text: "Vui lòng đăng nhập lại.",
        }).then(() => {
          handleLogout();
        });
      }
    }
  };

  const handleLogout = async (event) => {
    if (event) event.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/auth/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("User");
      setIsLoggedIn(false);
      Swal.fire({
        title: "Bạn đã đăng xuất thành công!",
        text: "Cảm ơn bạn đã sử dụng dịch vụ.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/"); // Điều hướng về trang chủ sau khi đăng xuất
      });
    } catch (error) {
      Swal.fire({
        title: "Lỗi!",
        text: "Đã xảy ra lỗi khi đăng xuất. Vui lòng thử lại.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="col-xl-3 col-lg-4">
      <div className="header-info header-info-right">
        <ul>
          {isLoggedIn ? (
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <div className="name_user">
                {userDetails.name ? userDetails.name : "Chưa có tên người dùng"}
              </div>
              <div className="avatar avatar-online">
                <img
                  src="/assets/images/avatars/1.png"
                  alt="Hình đại diện người dùng"
                  className="w-px-40 h-auto rounded-circle"
                />
              </div>
              <ul className="language-dropdown">
                <li className="nav-item lh-1 me-4 hihi">
                  <Link
                    className="github-button"
                    to="/user-profile"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themeselection/sneat-html-admin-template-free trên GitHub"
                  >
                    Thông tin cá nhân
                  </Link>
                </li>
                <li className="nav-item lh-1 me-4 hihi">
                  <Link
                    className="github-button"
                    to="/#"
                    onClick={handleLogout}
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themeselection/sneat-html-admin-template-free trên GitHub"
                  >
                    Thoát
                  </Link>
                </li>
              </ul>
            </li>
          ) : (
            <li className="nav-item lh-1 me-4 hihi">
              <Link
                className="github-button"
                to="/login-register"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star themeselection/sneat-html-admin-template-free trên GitHub"
              >
                Đăng ký / Đăng nhập
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
