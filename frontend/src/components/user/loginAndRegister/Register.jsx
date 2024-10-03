import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="col-lg-6">
      <div className="login-register-wrap">
        <div className="login-register-title">
          <h1>Register</h1>
        </div>
        <div className="login-register-form">
          <form action="#">
            <div className="login-register-input-style input-style">
              <label>Username *</label>
              <input type="text" />
            </div>
            <div className="login-register-input-style input-style">
              <label>Email address *</label>
              <input type="email" />
            </div>
            <div className="login-register-input-style input-style">
              <label>Password *</label>
              <input type="password" />
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
