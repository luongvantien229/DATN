import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    lock: false,
    points: 0,
    role_id: "", 
    password: "",
    image: null,
  });
  
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // Trạng thái thành công

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/api/users/show/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser({
          ...response.data,
          password: "", // Không hiển thị password cũ
        });
      } catch (err) {
        setError("Lỗi khi tải thông tin người dùng!");
        console.error(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setUser({ ...user, [name]: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setUser({ ...user, [name]: type === "checkbox" ? checked : value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setLoading(true);
    const formData = new FormData();
    Object.keys(user).forEach((key) => {
      if (user[key] !== null && user[key] !== "") {
        formData.append(key, user[key]);
      }
    });

    try {
      await axios.post(`http://localhost:8000/api/users/update/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        data: {
          _method: "put",
        },
      });
      setSuccess(true); // Đánh dấu trạng thái thành công
      alert("Cập nhật thông tin người dùng thành công!");
      
      // Chuyển hướng sau khi cập nhật thành công
      setTimeout(() => navigate("/users"), 2000); // Sau 2 giây sẽ chuyển hướng
    } catch (err) {
      setError("Lỗi khi cập nhật thông tin người dùng!");
      console.error(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Chỉnh sửa thông tin người dùng</h5>
        <div className="card-body">
          {loading && <div>Đang tải...</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">Cập nhật thành công!</div>} {/* Thông báo thành công */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Tên người dùng</label>
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
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mật khẩu mới (tuỳ chọn)</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Vai trò</label>
              <select
                className="form-control"
                name="role_id"
                value={user.role_id}
                onChange={handleChange}
              >
                <option value={1}>Quản trị viên</option>
                <option value={2}>Người dùng</option>
                <option value={3}>Quản lý</option>
              </select>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="lock"
                checked={user.lock}
                onChange={handleChange}
              />
              <label className="form-check-label">Khoá tài khoản</label>
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
            <div className="mb-3">
              <label className="form-label">Ảnh đại diện</label>
              <input
                type="file"
                className="form-control"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />
              {preview && <img src={preview} alt="Preview" className="mt-3" style={{ width: "100px", height: "100px", objectFit: "cover" }} />}
            </div>
            <button type="submit" className="btn btn-primary">
              Cập nhật thông tin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
