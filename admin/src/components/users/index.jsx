import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h5 className="card-header">Người dùng</h5>
            <Link to="/add-users">
              <button
                type="button"
                className="btn rounded-pill btn-primary m-6"
              >
                Thêm
              </button>
            </Link>
          </div>
        </div>

        <div className="table-responsive text-nowrap">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Tên Người Dùng</th>
                <th>Email</th>
                <th>SĐT</th>
                <th>Quyền</th>
                <th>Trạng thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              <tr>
                <td>
                  <span>Nguyễn Phan Hoàng Việt</span>
                </td>
                <td>viet.nguyenphanhoang@gmail.com</td>
                <td>0902945908</td>
                <td>admin</td>
                <td>
                  <span className="badge bg-label-primary me-1">Hoạt động</span>
                </td>
                <td>
                  <Link to="/edit-users">
                    <button
                      type="button"
                      className="btn btn-primary me-2" // Primary button for Edit
                    >
                      <i className="bx bx-edit-alt me-1"></i> Sửa
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      type="button"
                      className="btn btn-danger" // Danger button for Delete
                    >
                      <i className="bx bx-trash me-1"></i> Xóa
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Nguyễn Phan Hoàng Việt</span>
                </td>
                <td>viet.nguyenphanhoang@gmail.com</td>
                <td>0902945908</td>
                <td>admin</td>
                <td>
                  <span className="badge bg-label-primary me-1">Hoạt động</span>
                </td>
                <td>
                  <Link to="/edit-user">
                    <button
                      type="button"
                      className="btn btn-primary me-2" // Primary button for Edit
                    >
                      <i className="bx bx-edit-alt me-1"></i> Sửa
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      type="button"
                      className="btn btn-danger" // Danger button for Delete
                    >
                      <i className="bx bx-trash me-1"></i> Xóa
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Nguyễn Phan Hoàng Việt</span>
                </td>
                <td>viet.nguyenphanhoang@gmail.com</td>
                <td>0902945908</td>
                <td>admin</td>
                <td>
                  <span className="badge bg-label-primary me-1">Hoạt động</span>
                </td>
                <td>
                  <Link to="/edit-user">
                    <button
                      type="button"
                      className="btn btn-primary me-2" // Primary button for Edit
                    >
                      <i className="bx bx-edit-alt me-1"></i> Sửa
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      type="button"
                      className="btn btn-danger" // Danger button for Delete
                    >
                      <i className="bx bx-trash me-1"></i> Xóa
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Nguyễn Phan Hoàng Việt</span>
                </td>
                <td>viet.nguyenphanhoang@gmail.com</td>

                <td>0902945908</td>
                <td>admin</td>
                <td>
                  <span className="badge bg-label-primary me-1">Hoạt động</span>
                </td>
                <td>
                  <Link to="/edit-user">
                    <button
                      type="button"
                      className="btn btn-primary me-2" // Primary button for Edit
                    >
                      <i className="bx bx-edit-alt me-1"></i> Sửa
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      type="button"
                      className="btn btn-danger" // Danger button for Delete
                    >
                      <i className="bx bx-trash me-1"></i> Xóa
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Nguyễn Phan Hoàng Việt</span>
                </td>
                <td>viet.nguyenphanhoang@gmail.com</td>

                <td>0902945908</td>
                <td>admin</td>
                <td>
                  <span className="badge bg-label-primary me-1">Hoạt động</span>
                </td>
                <td>
                  <Link to="/edit-user">
                    <button
                      type="button"
                      className="btn btn-primary me-2" // Primary button for Edit
                    >
                      <i className="bx bx-edit-alt me-1"></i> Sửa
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      type="button"
                      className="btn btn-danger" // Danger button for Delete
                    >
                      <i className="bx bx-trash me-1"></i> Xóa
                    </button>
                  </Link>
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
