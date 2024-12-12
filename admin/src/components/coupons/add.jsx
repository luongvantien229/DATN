import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddCoupon = () => {
  const [coupon, setCoupon] = useState({
    name: "",
    number: "",
    code: "",
    time: "",
    condition: "",
    date_start: null, // Lưu dưới dạng Date object
    date_end: null,   // Lưu dưới dạng Date object
    status: false,    // Checkbox trạng thái
    user_id: "",
  });

  const [error, setError] = useState(null); // Trạng thái lỗi
  const [success, setSuccess] = useState(false); // Trạng thái thành công
  const navigate = useNavigate();

  const handleDateChange = (name, date) => {
    setCoupon((prevState) => ({
      ...prevState,
      [name]: date,
    }));
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCoupon({
      ...coupon,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formattedCoupon = {
      ...coupon,
      date_start: formatDate(coupon.date_start),
      date_end: formatDate(coupon.date_end),
    };

    try {
      await axios.post("http://localhost:8000/api/coupons/store", formattedCoupon, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess(true); // Đánh dấu thành công
      setError(null); // Reset lỗi
      setTimeout(() => {
        navigate("/coupons"); // Navigate to the categories list after success
      }, 2000);
    } catch (error) {
      setError("Có lỗi xảy ra khi thêm mã giảm giá!"); // Cập nhật thông báo lỗi
      setSuccess(false); // Đánh dấu thất bại
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Thêm Mã Giảm Giá</h5>
        <div className="card-body">
          {success && <div className="alert alert-success">Mã giảm giá đã được thêm thành công!</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Tên Mã Giảm Giá</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={coupon.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mã Người Dùng</label>
              <input
                type="number"
                className="form-control"
                name="user_id"
                value={coupon.user_id}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Thời Gian</label>
              <input
                type="text"
                className="form-control"
                name="time"
                value={coupon.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Điều Kiện</label>
              <select
                name="condition"
                value={coupon.condition}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Chọn Điều Kiện</option>
                <option value={1}>%</option>
                <option value={2}>Đ</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Số Lượng</label>
              <input
                type="number"
                className="form-control"
                name="number"
                value={coupon.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mã Giảm Giá</label>
              <input
                type="text"
                className="form-control"
                name="code"
                value={coupon.code}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Ngày Bắt Đầu</label>
              <DatePicker
                selected={coupon.date_start}
                onChange={(date) => handleDateChange("date_start", date)}
                className="form-control"
                dateFormat="dd/MM/yyyy"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Ngày Kết Thúc</label>
              <DatePicker
                selected={coupon.date_end}
                onChange={(date) => handleDateChange("date_end", date)}
                className="form-control"
                dateFormat="dd/MM/yyyy"
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="status"
                checked={coupon.status}
                onChange={handleChange}
              />
              <label className="form-check-label">Hoạt Động</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Thêm Mã Giảm Giá
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoupon;
