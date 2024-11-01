import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/auth/register",
        {
          name,
          email,
          password,
          password2,
        }
      );
      

      // Kiểm tra nếu phản hồi và dữ liệu tồn tại
      if (response && response.data) {
        // Lưu token vào localStorage

        Swal.fire({
          icon: "success",
          title: "Đăng Ký Thành Công",
          text: "Bạn sẽ được chuyển hướng đến bảng điều khiển.",
        }).then(() => {
          // Điều hướng đến bảng điều khiển
          navigate("/login-register");
          
          // Làm mới trang sau khi người dùng nhấn OK
          window.location.reload();
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
            text: "Vui lòng thử lại.",
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
  return (
    <div className="col-lg-6">
      <div className="login-register-wrap">
        <div className="login-register-title">
          <h1>Register</h1>
        </div>
        <div className="login-register-form">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="login-register-input-style input-style">
              <label>Username *</label>
              <input 
                type="text" 
                name="name"
                placeholder="Nhập Username"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="login-register-input-style input-style">
              <label>Email address *</label>
              <input 
                type="email" 
                name="email"
                placeholder="Nhập Email"
                     className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* console.log('Thông tin cần log:', data); */}

            <div className="login-register-input-style input-style">
              <label>Password *</label>
              <input 
                type="password" 
                name="password"
                placeholder="Nhập Mật Khẩu"
                     className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-register-input-style input-style">
              <label>Password 2*</label>
              <input 
                type="password2" 
                name="password2"
                placeholder="Nhập Lại Mật Khẩu"
                className="form-control"
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
            <div className="privacy-policy-wrap">
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a href="#">privacy policy</a>
              </p>
            </div>
            <div className="login-register-btn">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
