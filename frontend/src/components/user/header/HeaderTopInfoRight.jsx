import { Link } from "react-router-dom";

export default function HeaderTopHeaderInfoRight() {
  return (
    <div className="col-xl-3 col-lg-4">
      <div className="header-info header-info-right">
        <ul>
          <li>
<<<<<<< HEAD
            <Link className="language-dropdown-active" to="#">
              Việt Nam <i className="fa fa-chevron-down"></i>
            </Link>
            <ul className="language-dropdown">
              <li>
                <Link to="#">English</Link>
=======
            <a className="language-dropdown-active" href="#">
            Tiếng Anh <i className="fa fa-chevron-down"></i>
            </a>
            <ul className="language-dropdown">
              <li>
                <a href="#">Tiếng Pháp</a>
              </li>
              <li>
                <a href="#">Tiếng Đức.</a>
              </li>
              <li>
                <a href="#">Tiếng Việt</a>
>>>>>>> db1e6f75e6617de2481a44874d250c7fe519e36f
              </li>
            </ul>
          </li>
          <li>
<<<<<<< HEAD
            <Link to="/login-register">Đăng nhập / Đăng kí</Link>
=======
            <Link to="/login-register">Đăng nhập / Đăng ký</Link>
>>>>>>> db1e6f75e6617de2481a44874d250c7fe519e36f
          </li>
        </ul>
      </div>
    </div>
  );
}
