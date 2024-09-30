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
            <h5 className="card-header">Sản phẩm</h5>
            <Link to="/add-products">
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
                <th>Ảnh</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Danh mục</th>
                <th>Thương hiệu</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              <tr>
                <td>1</td>
                <td>
                  <img
                    src="assets/img/products/P00641.webp" // Direct path to the image
                    alt="product"
                    className="img-fluid" // Bootstrap class for responsive images
                  />
                </td>
                <td>
                  {/* <i className="bx bxl-angular bx-md text-danger me-4"></i>{" "} */}
                  <span>Hoạt huyết nhất nhất</span>
                </td>
                <td>250.000đ</td>
                <td>Thuốc không kê đơn</td>
                <td>Nhat Nhat</td>
                <td>
                  <span className="badge bg-label-primary me-1">Hoạt động</span>
                </td>
                <td>
                  <Link to="/edit-products">
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
