  import React, { useState } from "react";
  import axios from "axios";
  import Swal from "sweetalert2";
  import { Link, useNavigate } from "react-router-dom";

  export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState(""); 
    const [errorMessage, setErrorMessage] = useState('');
    const [serverError, setServerError] = useState("");
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let isValid = true;
      // Reset error messages
      setEmailError("");
      setPasswordError("");
      setServerError("");

      // Kiểm tra nếu email hoặc mật khẩu không đủ ký tự
      if (email.length < 5 || !emailRegex.test(email)) {
        setEmailError("Email không hợp lệ.");
        return;
      }

      if (password.length < 6) {
        setPasswordError("Mật khẩu phải có ít nhất 6 ký tự.");
        return;
      }

      if (!isValid) return;

      try {
        const response = await axios.post(
          "/auth/login",
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
          }).then(() => {
            // Điều hướng đến bảng điều khiển
            navigate("/");
            
            // Làm mới trang sau khi người dùng nhấn OK
            window.location.reload();
          });;
        }
        
        // const user = await axios.get('/auth/your_profile', {
        //   headers: {
        //     'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        //   },
        // });
        // localStorage.setItem('user_name', user.data.name)
        
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            setErrorMessage("Email hoặc mật khẩu không hợp lệ. Vui lòng thử lại.");
          } else {
            setErrorMessage(`Lỗi: ${error.response.status}. Vui lòng thử lại sau.`);
          }
        } else {
          setErrorMessage("Vui lòng kiểm tra kết nối của bạn và thử lại.");
        }
      }
    };

    const handleGoogleLogin = async () => {
      const backendUrl = axios.defaults.baseURL
      
      const googleLoginUrl = `${backendUrl}/login-google`;
  
      try {
        window.location.href = googleLoginUrl;
      } catch (error) {
        console.error("Error during Google login:", error);
      }
    };
    const imagePath = process.env.PUBLIC_URL + "/images/bg-image.webp";
  <section
        className="vh-100 bg-image"
        style={{ backgroundImage: `url('${imagePath}')` }}
      >
    </section>
    return (
    
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
                    {emailError && (
                      <div style={{ color: "red", marginTop: "5px" }}>{emailError}</div>
                    )}
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
                        {passwordError && (
                          <div style={{ color: "red", marginTop: "5px" }}>{passwordError}</div>
                        )}
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
                      {errorMessage && (
                      <div style={{ color: "red", marginTop: "10px" }}>
                      {errorMessage}
                      </div>
        )}
                    </div>
                  </form>
                  <div id="dngooggle" className="text-center mt-5">
                  <Link onClick={handleGoogleLogin} style={{ background: 'none', border: 'none', padding: 0 }}>
                    <img width="300" src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png" alt="Sign in with Google" />
                  </Link>
                </div>
                </div>
              </div>
            </div>
            // </section>
    );
  }

  // export default YourComponent;
          


    