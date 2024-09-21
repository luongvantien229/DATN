import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="col-lg-6">
            <div className="login-register-wrap login-register-gray-bg">
              <div className="login-register-title">
                <h1>Login</h1>
              </div>
              <div className="login-register-form">
                <form action="#">
                  <div className="login-register-input-style input-style input-style-white">
                    <label>Username or email address *</label>
                    <input type="text" />
                  </div>
                  <div className="login-register-input-style input-style input-style-white">
                    <label>Password *</label>
                    <input type="password" />
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
  );
}
