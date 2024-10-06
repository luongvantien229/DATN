import { Link } from "react-router-dom";

export default function HeaderTopHeaderInfo() {
  return (
    <div className="col-xl-3 col-lg-4">
      <div className="header-info">
        <ul>
          <li>
            <Link to="#">(+88) - 1990 - 6886</Link>
          </li>
          <li>
<<<<<<< HEAD
            <Link target="_blank" to="https://www.google.com/maps">
              Vị trí cửa hàng
            </Link>
=======
            <a target="_blank" href="https://www.google.com/maps">
              Địa chỉ cửa hàng
            </a>
>>>>>>> db1e6f75e6617de2481a44874d250c7fe519e36f
          </li>
        </ul>
      </div>
    </div>
  );
}
