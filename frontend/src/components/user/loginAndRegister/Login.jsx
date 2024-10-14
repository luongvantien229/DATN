import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login",
        {
          email,
          password,
        }
      );

      // Kiểm tra nếu phản hồi và dữ liệu tồn tại
      if (response && response.data) {
        // Lưu token vào localStorage
        localStorage.setItem("token", response.data.access_token);

        // Điều hướng đến bảng điều khiển
        navigate("/");

        Swal.fire({
          icon: "success",
          title: "Đăng Nhập Thành Công",
          text: "Bạn sẽ được chuyển hướng đến bảng điều khiển.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Lỗi",
          text: "Không nhận được dữ liệu từ máy chủ.",
        });
      }
    } catch (error) {
      // Xử lý lỗi và ghi lại chúng
      if (error.response) {
        // Xử lý lỗi cụ thể cho 401 Unauthorized
        if (error.response.status === 401) {
          Swal.fire({
            icon: "error",
            title: "Không Được Phép",
            text: "Email hoặc mật khẩu không hợp lệ. Vui lòng thử lại.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Lỗi",
            text: `Lỗi: ${error.response.status}. Vui lòng thử lại sau.`,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Lỗi Mạng",
          text: "Vui lòng kiểm tra kết nối của bạn và thử lại.",
        });
      }
    }
  };

  const imagePath = process.env.PUBLIC_URL + "/images/bg-image.webp";
<section
      className="vh-100 bg-image"
      style={{ backgroundImage: `url('${imagePath}')` }}
    >
  </section>
  return (
    // <section
    //   className="vh-100 bg-image"
    //   style={{ backgroundImage: `url('${imagePath}')` }}
    // >
    <div className="col-lg-6">
            <div className="login-register-wrap login-register-gray-bg">
              <div className="login-register-title">
                <h1>Login</h1>
              </div>
              <div className="login-register-form">
              <form method="POST" onSubmit={handleSubmit}>
                  <div className="login-register-input-style input-style input-style-white">
                    <label>Username or email address *</label>                   
                     <input
                     type="text"
                     name="email"
                     placeholder="Nhập Email"
                     className="form-control"
                     onChange={(e) => setEmail(e.target.value)}
                   />                   
                  </div>
                  <div className="login-register-input-style input-style input-style-white">
                    <label>Password *</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Nhập Mật Khẩu"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
                  <div className="lost-remember-wrap">
                    <div className="remember-wrap">
                      <input type="checkbox" />
                      <span>Remember me</span>
                    </div>
                    <div className="lost-wrap">
                      <a href="#">Lost your password?</a>
                    </div>
                  </div>
                  <div className="login-register-btn">
                    <button type="submit">Log in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          // </section>
  );
}
