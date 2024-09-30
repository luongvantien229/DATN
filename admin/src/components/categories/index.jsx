import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h5 className="card-header">Hàng kẻ sọc</h5>
            <Link to="/add-categories">
              <button type="button" className="btn rounded-pill btn-primary m-6">
                Thêm
              </button>
            </Link>
          </div>
        </div>

        <div className="table-responsive text-nowrap">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Dự án</th>
                <th>Khách hàng</th>
                <th>Người dùng</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              <tr>
                <td>
                  <i className="bx bxl-angular bx-md text-danger me-4"></i>{" "}
                  <span>Dự án Angular</span>
                </td>
                <td>Albert Cook</td>
                <td>
                  <ul className="list-unstyled m-0 avatar-group d-flex align-items-center">
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Lilian Fuller"
                    >
                      <img
                        src="../assets/img/avatars/5.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Sophia Wilkerson"
                    >
                      <img
                        src="../assets/img/avatars/6.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Christina Parker"
                    >
                      <img
                        src="../assets/img/avatars/7.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                  </ul>
                </td>
                <td>
                  <span className="badge bg-label-primary me-1">Hoạt động</span>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="">
                        <i className="bx bx-edit-alt me-1"></i> Chỉnh sửa
                      </a>
                      <a className="dropdown-item" href="">
                        <i className="bx bx-trash me-1"></i> Xóa
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="bx bxl-react bx-md text-info me-4"></i>{" "}
                  <span>Dự án React</span>
                </td>
                <td>Barry Hunter</td>
                <td>
                  <ul className="list-unstyled m-0 avatar-group d-flex align-items-center">
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Lilian Fuller"
                    >
                      <img
                        src="../assets/img/avatars/5.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Sophia Wilkerson"
                    >
                      <img
                        src="../assets/img/avatars/6.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Christina Parker"
                    >
                      <img
                        src="../assets/img/avatars/7.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                  </ul>
                </td>
                <td>
                  <span className="badge bg-label-success me-1">Hoàn thành</span>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="">
                        <i className="bx bx-edit-alt me-1"></i> Chỉnh sửa
                      </a>
                      <a className="dropdown-item" href="">
                        <i className="bx bx-trash me-1"></i> Xóa
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="bx bxl-vuejs bx-md text-success me-4"></i>{" "}
                  <span>Dự án VueJs</span>
                </td>
                <td>Trevor Baker</td>
                <td>
                  <ul className="list-unstyled m-0 avatar-group d-flex align-items-center">
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Lilian Fuller"
                    >
                      <img
                        src="../assets/img/avatars/5.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Sophia Wilkerson"
                    >
                      <img
                        src="../assets/img/avatars/6.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Christina Parker"
                    >
                      <img
                        src="../assets/img/avatars/7.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                  </ul>
                </td>
                <td>
                  <span className="badge bg-label-info me-1">Đã lên lịch</span>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="">
                        <i className="bx bx-edit-alt me-1"></i> Chỉnh sửa
                      </a>
                      <a className="dropdown-item" href="">
                        <i className="bx bx-trash me-1"></i> Xóa
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="bx bxl-bootstrap bx-md text-primary me-4"></i>{" "}
                  <span>Dự án Bootstrap</span>
                </td>
                <td>Jerry Milton</td>
                <td>
                  <ul className="list-unstyled m-0 avatar-group d-flex align-items-center">
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Lilian Fuller"
                    >
                      <img
                        src="../assets/img/avatars/5.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Sophia Wilkerson"
                    >
                      <img
                        src="../assets/img/avatars/6.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      title="Christina Parker"
                    >
                      <img
                        src="../assets/img/avatars/7.png"
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                  </ul>
                </td>
                <td>
                  <span className="badge bg-label-warning me-1">Chưa hoàn thành</span>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="">
                        <i className="bx bx-edit-alt me-1"></i> Chỉnh sửa
                      </a>
                      <a className="dropdown-item" href="">
                        <i className="bx bx-trash me-1"></i> Xóa
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
