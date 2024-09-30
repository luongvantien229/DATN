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
            <Link target="_blank" to="https://www.google.com/maps">
              Vị trí cửa hàng
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
