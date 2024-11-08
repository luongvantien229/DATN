import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCoupon = () => {
  const [coupon, setCoupon] = useState({
    name: "",
    user_id: "",
    time: "",
    condition: "",
    number: "",
    code: "",
    date_start: "",
    date_end: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoupon({
      ...coupon,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:8000/api/coupons/store", coupon, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Coupon added successfully!");
      navigate("/coupons"); // Redirect to coupon list after successful creation
    } catch (error) {
      setError("Error occurred while adding the coupon!");
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Add Coupon</h5>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Coupon Name</label>
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
              <label className="form-label">User ID</label>
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
              <label className="form-label">Time</label>
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
              <label className="form-label">Condition</label>
              <input
                type="text"
                className="form-control"
                name="condition"
                value={coupon.condition}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Number</label>
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
              <label className="form-label">Code</label>
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
              <label className="form-label">Start Date</label>
              <input
                type="date"
                className="form-control"
                name="date_start"
                value={coupon.date_start}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">End Date</label>
              <input
                type="date"
                className="form-control"
                name="date_end"
                value={coupon.date_end}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Coupon
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoupon;
