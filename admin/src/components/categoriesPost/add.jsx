import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCategoryPost = () => {
  const [categoryPost, setCategoryPost] = useState({ name: "", slug: "", status: false });
  const [error, setError] = useState(null); // Trạng thái lỗi
  const [success, setSuccess] = useState(false); // Trạng thái thành công
  const navigate = useNavigate();

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

    text = text.replace(
      /[\'\"\`\~\!\@\#\$\%\^\&\*\(\)\+\=\[\]\{\}\|\\\;\:\,\.\/\?\>\<\-\_]/g,
      ""
    );
    text = text.replace(/\s+/g, "-").replace(/-+/g, "-").trim("-");
    return text;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCategoryPost({
      ...categoryPost,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "name" && { slug: generateSlug(value) }),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:8000/api/category_posts/store", categoryPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess(true); // Cập nhật trạng thái thành công
      setTimeout(() => {
        navigate("/category_posts"); // Navigate to the categories list after success
      }, 2000);
    } catch (error) {
      setError("Đã có lỗi xảy ra khi thêm danh mục bài viết!"); // Hiển thị thông báo lỗi
      console.error("Lỗi:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Thêm danh mục bài viết</h5>
        <div className="card-body">
          {success && <div className="alert alert-success">Danh mục bài viết đã được thêm thành công!</div>} {/* Hiển thị thông báo thành công */}
          {error && <div className="alert alert-danger">{error}</div>} {/* Hiển thị thông báo lỗi */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Tên danh mục</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={categoryPost.name}
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
                value={categoryPost.slug}
                readOnly
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="status"
                checked={categoryPost.status}
                onChange={handleChange}
              />
              <label className="form-check-label">Hoạt động</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Thêm danh mục bài viết
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryPost;
