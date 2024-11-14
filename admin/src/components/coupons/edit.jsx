import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditCoupon = () => {
  const { id } = useParams(); // Get coupon ID from URL
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
  const [loading, setLoading] = useState(false); // Loading state
  const [success, setSuccess] = useState(false); // Success state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoupon = async () => {
      const token = localStorage.getItem("token");
      setLoading(true); // Start loading
      try {
        const response = await axios.get(
          `http://localhost:8000/api/coupons/show/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCoupon(response.data);
      } catch (error) {
        setError("Error fetching coupon details.");
        console.error("Error:", error.response ? error.response.data : error.message);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchCoupon();
  }, [id]);

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
    setLoading(true); // Start loading

    try {
      await axios.post(
        `http://localhost:8000/api/coupons/update/${id}`,
        { ...coupon, _method: "put" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess(true);
      setError(null);
      setTimeout(() => navigate("/coupons"), 2000); // Navigate after 2 seconds
    } catch (error) {
      setError("Error updating the coupon.");
      console.error("Error:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Edit Coupon</h5>
        <div className="card-body">
          {loading && <div>Loading...</div>}
          {success && <div className="alert alert-success">Coupon updated successfully!</div>}
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
              <select
                name="condition"
                value={coupon.condition}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Chọn condition</option>
                <option value={1}>%</option>
                <option value={2}>Đ</option>
                
              </select>
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
              Update Coupon
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCoupon;
