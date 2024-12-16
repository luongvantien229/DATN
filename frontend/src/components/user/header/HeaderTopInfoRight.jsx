import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function HeaderTopHeaderInfoRight() {
  const isLoggin = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const User = JSON.parse(localStorage.getItem("User")) || {};


  // Tạo axios instance với interceptor
  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
      "Content-Type": "application/json",
    },
  });

   // Hàm làm mới token
   const refreshToken = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return null;

      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/refresh",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { access_token } = response.data;
      localStorage.setItem("token", access_token);
      return access_token;
    } catch (error) {
      console.error("Lỗi khi làm mới token:", error);
      return null;
    }
  };

  // Interceptor để xử lý tự động làm mới token
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          error.config.headers["Authorization"] = `Bearer ${newToken}`;
          return axiosInstance(error.config);
        } else {
          Swal.fire({
            icon: "error",
            title: "Phiên đã hết hạn",
            text: "Vui lòng đăng nhập lại.",
          });
          navigate("/login-register");
        }
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // Store the token in localStorage and clear token from URL
      localStorage.setItem("token", token);
    // Adjust the path if needed

      Swal.fire({
        icon: "success",
        title: "Đăng Nhập Thành Công",
        // text: "Bạn sẽ được chuyển hướng đến tr.",
      });
    } 

    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://127.0.0.1:8000/api/auth/your_profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Đặt chi tiết người dùng trực tiếp từ response.data
        setUserData(response.data);
      } catch (error) {
         
          console.error("Lỗi khi lấy thông tin người dùng:", error);
        
      }
    };
    fetchUserDetails();
  }, [navigate]);

  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      localStorage.removeItem("token");
      localStorage.removeItem("User");
      Swal.fire({
        title: "Đăng xuất thành công!",
        text: response.data.message,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/");
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
          {/* <li>
            <a className="language-dropdown-active" href="#">
              Tiếng Việt <i className="fa fa-chevron-down"></i>
            </a>
            <ul className="language-dropdown">
              <li>
                <a href="#">Tiếng Anh</a>
              </li>
            </ul>
          </li> */}
          {isLoggin ? (
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <div className="name_user">
                {(User && User.name) ||
                  (userData && userData.name) ||
                  "Chưa có tên người dùng"}
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
                    Thông tin tài khoản
                  </Link>
                </li>
                {/* <li className="nav-item lh-1 me-4 hihi">
                  <Link
                    className="github-button"
                    to="/user-profile#orders"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themeselection/sneat-html-admin-template-free trên GitHub"
                  >
                    Đơn hàng
                  </Link>
                </li>
                <li className="nav-item lh-1 me-4 hihi">
                  <Link
                    className="github-button"
                    to="/user-profile#account-info"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themeselection/sneat-html-admin-template-free trên GitHub"
                  >
                    Đổi mật khẩu
                  </Link>
                </li> */}
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
                    Đăng xuất
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
