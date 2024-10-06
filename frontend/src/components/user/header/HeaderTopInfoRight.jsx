import { Link } from "react-router-dom";

export default function HeaderTopHeaderInfoRight() {
  return (
    <div className="col-xl-3 col-lg-4">
      <div className="header-info header-info-right">
        <ul>
          <li>
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
