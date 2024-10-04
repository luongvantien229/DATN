import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCategories = () => {
  const [category, setCategory] = useState({
    name: "",
    slug: "",
    sort_order: 0,
    showHome: false,
    status: false,
    image: null,
  });
  const [image, setImage] = useState(null); // For storing selected image
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation

  // Slug generation function
  const generateSlug = (text) => {
    text = text.toLowerCase();
    text = text
      .replace(/á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/g, "a")
      .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/g, "e")
      .replace(/i|í|ì|ỉ|ĩ|ị/g, "i")
      .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/g, "o")
      .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/g, "u")
      .replace(/ý|ỳ|ỷ|ỹ|ỵ/g, "y")
      .replace(/đ/g, "d");

    text = text.replace(/[\'\"\`\~\!\@\#\$\%\^\&\*\(\)\+\=\[\]\{\}\|\\\;\:\,\.\/\?\>\<\-\_]/g, "");
    text = text.replace(/\s+/g, "-").replace(/-+/g, "-").trim("-");
    return text;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCategory({
      ...category,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "name" && { slug: generateSlug(value) }), // Update slug when name changes
    });
  };

  // Handle file input change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("name", category.name);
    formData.append("slug", category.slug);
    formData.append("sort_order", category.sort_order);
    formData.append("showHome", category.showHome ? 1 : 0);
    formData.append("status", category.status ? 1 : 0);
    if (image) {
      formData.append("image", image); // Add image to form data if selected
    }

    try {
      await axios.post("http://localhost:8000/api/categories/store", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Correct content type for file uploads
        },
      });

      // Reset form fields after successful submission
      setCategory({
        name: "",
        slug: "",
        status: false,
        image: null,
      });
      setImage(null);
      alert("Danh mục được thêm thành công!");
      navigate("/categories"); // Navigate to the categories list after success
    } catch (error) {
      // Error handling
      setError(
        error.response?.data?.message || "Đã có lỗi xảy ra khi thêm danh mục!"
      );
      console.error(
        "Lỗi thêm danh mục:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Thêm danh mục mới</h5>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Tên danh mục</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={category.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Slug</label>
              <input
                type="text"
                className="form-control"
                name="slug"
                value={category.slug}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Ảnh danh mục</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Số thứ tự</label>
              <input
                type="number"
                className="form-control"
                name="sort_order"
                value={category.sort_order}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="showHome"
                checked={category.showHome}
                onChange={handleChange}
              />
              <label className="form-check-label">Hiện trên trang chủ</label>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="status"
                checked={category.status}
                onChange={handleChange}
              />
              <label className="form-check-label">Kích hoạt</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Thêm danh mục
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategories;
