import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBanners = () => {
  const [banner, setBanner] = useState({
    name: "",
    description: "",
    size: "1", // Kích thước mặc định
    status: false,
    image_path: null,
  });
  const [success, setSuccess] = useState(false); // Trạng thái thành công
  const [error, setError] = useState(null); // Trạng thái lỗi
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (name === "image_path") {
      const file = files[0];
      if (file && file.size > 2 * 1024 * 1024) {
        setError("Kích thước tệp vượt quá 2MB");
        return;
      }
      setBanner({ ...banner, image_path: file });
    } else {
      setBanner({ ...banner, [name]: type === "checkbox" ? checked : value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("name", banner.name);
    formData.append("description", banner.description);
    formData.append("size", banner.size);
    formData.append("status", banner.status ? 1 : 0);
    formData.append("image_path", banner.image_path);

    try {
      await axios.post("http://localhost:8000/api/banners/store", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccess(true); // Hiển thị thông báo thành công
      setError(null); // Xóa thông báo lỗi
      setTimeout(() => {
        navigate("/banners"); // Chuyển hướng sau 2 giây
      }, 2000);
    } catch (error) {
      const errMsg = error.response?.data?.message || "Đã xảy ra lỗi!";
      const validationErrors = error.response?.data?.errors;
      if (validationErrors) {
        setError(Object.values(validationErrors).flat().join("\n"));
      } else {
        setError(errMsg);
      }
      setSuccess(false); // Xóa thông báo thành công nếu có lỗi
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Thêm Banner Mới</h5>
        <div className="card-body">
          {success && (
            <div className="alert alert-success">Thêm banner thành công!</div>
          )}
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Tên Banner</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={banner.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mô Tả</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={banner.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Kích Thước</label>
              <select
                name="size"
                value={banner.size}
                onChange={handleChange}
                className="form-control"
              >
                <option value={1}>800x600</option>
                <option value={2}>650x250</option>
                <option value={3}>525x425</option>
                <option value={4}>250x200</option>
                <option value={5}>400x125</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Tải Ảnh</label>
              <input
                type="file"
                className="form-control"
                name="image_path"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="status"
                checked={banner.status}
                onChange={handleChange}
              />
              <label className="form-check-label">Kích Hoạt</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Thêm Banner
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBanners;
