import { Link } from "react-router-dom";

export default function HeaderTopHeaderInfoRight() {
  return (
    <div className="col-xl-3 col-lg-4">
      <div className="header-info header-info-right">
        <ul>
          <li>
            <a className="language-dropdown-active" href="#">
              English <i className="fa fa-chevron-down"></i>
            </a>
            <ul className="language-dropdown">
              <li>
                <a href="#">Français</a>
              </li>
              <li>
                <a href="#">Deutsch</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/login-register">Log In / Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
