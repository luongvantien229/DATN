import React from "react";

export default function Index() {
  return (
    <div className="pro-pagination-style text-center mt-55">
      <ul>
        <li>
          <a className="active" href="#">
            1
          </a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a className="next" href="#">
            <i className="far fa-angle-double-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
