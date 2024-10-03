import { Link } from "react-router-dom";

export default function HeaderTopHeaderInfoRight() {
  return (
    <div className="col-xl-3 col-lg-4">
      <div className="header-info header-info-right">
        <ul>
          <li>
            <Link className="language-dropdown-active" to="#">
              Việt Nam <i className="fa fa-chevron-down"></i>
            </Link>
            <ul className="language-dropdown">
              <li>
                <Link to="#">English</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/login-register">Đăng nhập / Đăng kí</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
