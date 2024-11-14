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
  const [captcha, setCaptcha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recaptchaResponse = window.grecaptcha.getResponse();
    if (!recaptchaResponse) {
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Vui lòng xác minh reCAPTCHA.",
      });
      return;
    }

    try {
      const response = await axios.post(
        "/auth/register",
        {
          name,
          email,
          password,
          password2,
          'g-recaptcha-response': recaptchaResponse,
        }
      );

      // If successful
      if (response && response.data) {
        Swal.fire({
          icon: "success",
          title: "Đăng Ký Thành Công",
          text: "Bạn sẽ được chuyển hướng đến bảng điều khiển.",
        }).then(() => {
          navigate("/login-register");
          window.location.reload();
        });
      }

    } catch (error) {
      if (error.response) {
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
            text: `Email đã tồn tại.`,
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
                type="password"
                name="password2"
                placeholder="Nhập Lại Mật Khẩu"
                className="form-control"
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
            
            {/* Add Google reCAPTCHA */}
            <div className="g-recaptcha" data-sitekey="6LdPo2oqAAAAAI3NTsOV8sCti5T2SODCiC20eZHa"></div>

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
