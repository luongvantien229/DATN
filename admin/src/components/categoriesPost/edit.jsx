import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditCategoryPost = () => {
  const { id } = useParams(); // Lấy ID danh mục bài viết từ URL
  const [categoryPost, setCategoryPost] = useState({
    name: "",
    slug: "",
    status: false,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); // Trạng thái thành công
  const [loading, setLoading] = useState(false); // Trạng thái loading
  const navigate = useNavigate();

  // Hàm tạo slug
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

  useEffect(() => {
    const fetchCategoryPost = async () => {
      const token = localStorage.getItem("token");
      setLoading(true); // Bắt đầu loading
      try {
        const response = await axios.get(
          `http://localhost:8000/api/category_posts/show/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCategoryPost(response.data);
      } catch (error) {
        setError("Lỗi khi lấy thông tin danh mục bài viết.");
        console.error(
          "Lỗi:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false); // Kết thúc loading
      }
    };

    fetchCategoryPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCategoryPost({
      ...categoryPost,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "name" && { slug: generateSlug(value) }), // Cập nhật slug khi tên thay đổi
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("name", categoryPost.name);
    formData.append("slug", categoryPost.slug);
    formData.append("status", categoryPost.status ? 1 : 0);
    setLoading(true); // Bắt đầu loading

    try {
      await axios.post(
        `http://localhost:8000/api/category_posts/update/${id}`,
        categoryPost,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            _method: "put",
          },
        }
      );
      setSuccess(true); // Đặt trạng thái thành công
      setTimeout(() => {
        navigate("/category_posts"); // Navigate to the categories list after success
      }, 2000);
    } catch (error) {
      setError("Lỗi khi cập nhật danh mục bài viết.");
      console.error(
        "Lỗi:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false); // Kết thúc loading
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Chỉnh sửa danh mục bài viết</h5>
        <div className="card-body">
          {loading && <div>Đang tải...</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">Cập nhật thành công!</div>}
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
              Cập nhật danh mục bài viết
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCategoryPost;
