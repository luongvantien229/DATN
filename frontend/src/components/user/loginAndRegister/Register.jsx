import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({}); // Lưu lỗi ở đây
  const [captchaReady, setCaptchaReady] = useState(false);

  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setCaptchaReady(true);
          if (!window.grecaptcha.rendered) {
            window.grecaptcha.render("recaptcha-container", {
              sitekey: "6LdPo2oqAAAAAI3NTsOV8sCti5T2SODCiC20eZHa", // Thay bằng sitekey của bạn
            });
            window.grecaptcha.rendered = true; // Đánh dấu đã render
          }
        });
      }
    };

    if (typeof window.grecaptcha === "undefined") {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      script.onload = loadRecaptcha;
      document.body.appendChild(script);
    } else {
      loadRecaptcha();
    }
  }, []);

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let validationErrors = {};
    if (!name.trim()) {
      validationErrors.name = "Tên không được để trống.";
    }
    if (!emailRegex.test(email)) {
      validationErrors.email = "Email không hợp lệ.";
    }
    if (password.length < 6) {
      validationErrors.password = "Mật khẩu phải có ít nhất 6 ký tự.";
    }
    if (password !== password2) {
      validationErrors.password2 = "Mật khẩu không khớp.";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // const validateForm = () => {
  //   if (!name.trim()) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Lỗi",
  //       text: "Tên người dùng không được để trống.",
  //     });
  //     return false;
  //   }
  //   if (!email.trim() || !/^[^\s@]+@gmail\.com$/.test(email)) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Lỗi",
  //       text: "Vui lòng nhập email hợp lệ với miền @gmail.com.",
  //     });
  //     return false;
  //   }
  //   if (!password.trim() || password.length < 6) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Lỗi",
  //       text: "Mật khẩu phải có ít nhất 6 ký tự.",
  //     });
  //     return false;
  //   }
  //   if (password !== password2) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Lỗi",
  //       text: "Mật khẩu xác nhận không khớp.",
  //     });
  //     return false;
  //   }
  //   if (!captchaReady) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Lỗi",
  //       text: "reCAPTCHA chưa sẵn sàng. Vui lòng thử lại sau.",
  //     });
  //     return false;
  //   }
  //   const recaptchaResponse = window.grecaptcha.getResponse();
  //   if (!recaptchaResponse) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Lỗi",
  //       text: "Vui lòng xác minh reCAPTCHA.",
  //     });
  //     return false;
  //   }
  //   return true;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!validateForm()) {
    //   return;
    // }

    const recaptchaResponse = window.grecaptcha.getResponse();

    if (!validate()) {
      return; // Dừng xử lý nếu có lỗi validate
    }

    try {
      const response = await axios.post("/auth/register", {
        name,
        email,
        password,
        password2,
        "g-recaptcha-response": recaptchaResponse,
      });

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
        Swal.fire({
          icon: "error",
          title: "Lỗi",
          text: error.response.data.message || "Đã xảy ra lỗi. Vui lòng thử lại.",
        });
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
          <h1>Đăng kí</h1>
        </div>
        <div className="login-register-form">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="login-register-input-style input-style">
              <label>Tên hiển thị *</label>
              <input
                type="text"
                name="name"
                placeholder="Nhập Username"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
               {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>
            <div className="login-register-input-style input-style">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Nhập Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
               {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div className="login-register-input-style input-style">
              <label>Mật khẩu *</label>
              <input
                type="password"
                name="password"
                placeholder="Nhập Mật Khẩu"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>
            <div className="login-register-input-style input-style">
              <label>Nhập lại mật khẩu*</label>
              <input
                type="password"
                name="password2"
                placeholder="Nhập Lại Mật Khẩu"
                className="form-control"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
              {errors.password2 && <p style={{ color: "red" }}>{errors.password2}</p>}
            </div>

            <div id="recaptcha-container" style={{ marginBottom: "15px" }}></div>

            <div className="privacy-policy-wrap">
              <p>
              Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của
                bạn trên toàn bộ trang web này, để quản lý quyền truy cập vào tài
                khoản của bạn và cho các mục đích khác được mô tả trong chính sách
                bảo mật của chúng tôi.{" "}
                {/* <a href="#">privacy policy</a>. */}
              </p>
            </div>
            <div className="login-register-btn">
              <button type="submit">Đăng kí</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
