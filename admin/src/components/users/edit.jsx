import React from "react";
import { Link } from "react-router-dom";

const EditUser = () => {
  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row">
        <div className="col-xl">
          <div className="card mb-6">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Chỉnh sửa người dùng</h5>
              <small className="text-body float-end">Nhãn mặc định</small>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-username">
                    Tên Người Dùng
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-default-username"
                    placeholder="Nguyễn Văn A"
                    defaultValue="Nguyễn Văn A" // Giá trị mặc định cho người dùng
                  />
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="basic-default-email"
                    placeholder="nguyen.vana@example.com"
                    defaultValue="nguyen.vana@example.com" // Giá trị mặc định cho email
                  />
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-phone">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    id="basic-default-phone"
                    className="form-control phone-mask"
                    placeholder="012 345 6789"
                    defaultValue="012 345 6789" // Giá trị mặc định cho số điện thoại
                  />
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-password">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    id="basic-default-password"
                    className="form-control"
                    placeholder="********"
                  />
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-role">
                    Quyền
                  </label>
                  <select
                    id="basic-default-role"
                    className="form-control"
                    defaultValue="user" // Giá trị mặc định cho quyền
                  >
                    <option value="user">Người dùng</option>
                    <option value="admin">Quản trị viên</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="form-label" htmlFor="basic-default-address">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-default-address"
                    placeholder="123 Đường ABC"
                    defaultValue="123 Đường ABC" // Giá trị mặc định cho địa chỉ
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Cập nhật
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
