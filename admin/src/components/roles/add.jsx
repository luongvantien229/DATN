import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddRoles = () => {
  const [role, setRole] = useState({ name: "", status: false });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); // Trạng thái thành công
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRole({
      ...role,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:8000/api/roles/store", role, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess(true); // Set success to true on successful addition
      setTimeout(() => {
        navigate("/roles"); // Redirect to roles list after 2 seconds
      }, 2000);
    } catch (error) {
      setError("Đã xảy ra lỗi khi thêm vai trò!"); // Set error message in Vietnamese
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Thêm vai trò</h5>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">Vai trò đã được thêm thành công!</div>} {/* Success message */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Tên vai trò</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={role.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="status"
                checked={role.status}
                onChange={handleChange}
              />
              <label className="form-check-label">Hoạt động</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Thêm vai trò
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRoles;
