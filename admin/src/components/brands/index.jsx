import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

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
            <h5 className="card-header">Thương hiệu</h5>
            <Link to="/add-brands">
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
                <th>id</th>
                <th>Tên</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              <tr>
                <td>1</td>
                <td>
                  {/* <i className="bx bxl-angular bx-md text-danger me-4"></i>{" "} */}
                  <span>Listerine</span>
                </td>
                <td>
                  <span className="badge bg-label-primary me-1">Hoạt động</span>
                </td>
                <td>
                <Link to="/edit-brands">
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
