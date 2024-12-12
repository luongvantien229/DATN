import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditBanners = () => {
  const { id } = useParams();
  const [banner, setBanner] = useState({
    name: "",
    description: "",
    size: "",
    status: false,
    image_path: null,
  });

  const [existingImage, setExistingImage] = useState(null);
  const [success, setSuccess] = useState(false); // Trạng thái thành công
  const [error, setError] = useState(null); // Trạng thái lỗi
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8000/api/banners/show/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBanner(response.data);
        setExistingImage(response.data.image_path);
      } catch (error) {
        setError("Đã có lỗi xảy ra khi lấy quảng cáo!");
      }
    };

    fetchBanner();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (name === "image_path") {
      const file = files[0];
      if (file && file.size > 2 * 1024 * 1024) {
        setError("Dung lượng ảnh vượt quá 2MB");
        return;
      }
      setBanner({ ...banner, image_path: file });
    } else {
      setBanner({ ...banner, [name]: type === "checkbox" ? checked : value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false); // Đặt lại trạng thái thành công trước khi gửi
    setError(null); // Đặt lại trạng thái lỗi trước khi gửi
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("name", banner.name);
    formData.append("description", banner.description);
    formData.append("size", banner.size);
    formData.append("status", banner.status ? 1 : 0);

    if (banner.image_path && banner.image_path !== existingImage) {
      formData.append("image_path", banner.image_path);
    }

    try {
      await axios.post(
        `http://localhost:8000/api/banners/update/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: {
            _method: "PUT",
          },
        }
      );
      setSuccess(true); // Cập nhật trạng thái thành công
      setTimeout(() => navigate("/banners"), 2000); // Điều hướng sau 2 giây
    } catch (error) {
      const errMsg =
        error.response?.data?.message ||
        "Đã có lỗi xảy ra khi cập nhật quảng cáo!";
      setError(errMsg);
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Chỉnh sửa quảng cáo</h5>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          {success && (
            <div className="alert alert-success">Cập nhật thành công!</div>
          )}
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
              <label className="form-label">Miêu tả</label>
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
              <label className="form-label">Kích cỡ</label>
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
              <label className="form-label">Ảnh Banner</label>
              {existingImage ? (
                existingImage.includes("http") ? (
                  <div className="mb-3">
                    <img
                      src={existingImage}
                      alt={banner.name}
                      style={{ width: "100px" }}
                    />
                  </div>
                ) : (
                  <div className="mb-3">
                    <img
                      src={`http://localhost:8000/assets/uploads/banner/${existingImage}`}
                      alt={banner.name}
                      style={{ width: "100px" }}
                    />
                  </div>
                )
              ) : (
                <p>Không có ảnh</p>
              )}
              <input
                type="file"
                name="image_path"
                className="form-control"
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
              <label className="form-check-label">Kích hoạt</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Cập nhật quảng cáo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBanners;
