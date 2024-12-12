import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    lock: false,
    points: "",
    role_id: "",
    password: "",
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null); // Trạng thái lỗi
  const [success, setSuccess] = useState(false); // Trạng thái thành công
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formData = new FormData();
    Object.entries(user).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.post("http://localhost:8000/api/users/store", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccess(true); // Thành công
      setTimeout(() => navigate("/users"), 2000); // Chuyển hướng sau 2 giây
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "Đã có lỗi xảy ra khi thêm người dùng."
      );
      console.error("Lỗi:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Thêm Người Dùng</h5>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">Người dùng đã được thêm thành công!</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Tên</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Số điện thoại</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Địa chỉ</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={user.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Vai trò</label>
              <select
                className="form-control"
                name="role_id"
                value={user.role_id}
                onChange={handleChange}
                required
              >
                <option value="">Chọn Vai Trò</option>
                <option value="1">Quản trị viên</option>
                <option value="2">Người dùng</option>
                <option value="3">Quản lý</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Điểm</label>
              <input
                type="number"
                className="form-control"
                name="points"
                value={user.points}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="lock"
                checked={user.lock}
                onChange={handleChange}
              />
              <label className="form-check-label">Khóa tài khoản</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Hình ảnh hồ sơ</label>
              <input
                type="file"
                className="form-control"
                onChange={handleImageChange}
                accept="image/*"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Thêm Người Dùng
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
