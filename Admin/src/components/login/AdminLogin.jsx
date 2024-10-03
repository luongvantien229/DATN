import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminLogin() {
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

  return (
    <section
      className="vh-100 bg-image"
      style={{ backgroundImage: `url('${imagePath}')` }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Đăng Nhập</h2>
                  <form method="POST" onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="email"
                        placeholder="Nhập Email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        name="password"
                        placeholder="Nhập Mật Khẩu"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">
                      Đăng nhập
                    </button>
                  </form>

                  <p className="text-center text-muted mt-5 mb-0">
                    Chưa có tài khoản?{" "}
                    <a href="/register" className="fw-bold text-body">
                      <u>Đăng ký ở đây</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
