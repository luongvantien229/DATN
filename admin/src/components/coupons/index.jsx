import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'datatables.net-dt/css/dataTables.dataTables.css';
import $ from 'jquery';
import 'datatables.net';

const Coupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const tableInitialized = useRef(false);

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8000/api/coupons/index",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCoupons(response.data.data);
      } catch (error) {
        setError("Đã có lỗi xảy ra khi lấy danh sách mã giảm giá!");
        console.error(
          "Lỗi khi lấy dữ liệu:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCoupons();
  }, []);

  useEffect(() => {
    if (!loading && coupons.length > 0 && !tableInitialized.current) {
      $("#MyTable").DataTable({
        paging: true,
        searching: true,
      });
      tableInitialized.current = true;
    }
  }, [coupons, loading]); // Sử dụng coupons trong dependency để chỉ gọi khi dữ liệu thay đổi
  

  const deleteCoupon = async (id) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa mã giảm giá này không?"
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8000/api/coupons/destroy/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCoupons(coupons.filter((coupon) => coupon.id !== id));
    } catch (error) {
      setError("Đã có lỗi xảy ra khi xóa mã giảm giá!");
      console.error(
        "Lỗi khi xóa:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const toggleCouponStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 1 ? 0 : 1;
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:8000/api/coupons/update-status/${id}`,
        { id, status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Cập nhật trực tiếp trong state coupons mà không cần gọi lại API
      setCoupons((prevCoupons) =>
        prevCoupons.map((coupon) =>
          coupon.id === id ? { ...coupon, status: newStatus } : coupon
        )
      );
    } catch (error) {
      setError("Đã có lỗi xảy ra khi thay đổi trạng thái mã giảm giá!");
      console.error(
        "Lỗi khi thay đổi trạng thái:",
        error.response ? error.response.data : error.message
      );
    }
  };
  

  if (loading) {
    return <div>Đang tải danh sách mã giảm giá...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h5 className="card-header">Danh sách mã giảm giá</h5>
          <Link to="/add-coupon">
            <button type="button" className="btn rounded-pill btn-primary m-6">
              Thêm mã giảm giá
            </button>
          </Link>
        </div>

        <div className="table-responsive text-nowrap">
          <table id="myTable" className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên</th>
                <th>Người tạo</th>
                <th>Mã</th>
                <th>Số lượng</th>
                <th>Số tiền</th>
                <th>Định dạng</th>
                <th>Ngày bắt đầu</th>
                <th>Ngày kết thúc</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon) => (
                <tr key={coupon.id}>
                  <td>{coupon.id}</td>
                  <td>{coupon.name}</td>
                  <td>{coupon.user_id}</td>
                  <td>{coupon.code}</td>
                  <td>{coupon.time}</td>
                  <td>{coupon.number}</td>
                  <td>{coupon.condition === 1 ? "%" : "đ"}</td>
                  <td>{coupon.date_start}</td>
                  <td>{coupon.date_end}</td>
                  <td>
                    <button
                      className={`btn btn-ms ${
                        coupon.status === 1 ? "btn-primary" : "btn-danger"
                      }`}
                      onClick={() =>
                        toggleCouponStatus(coupon.id, coupon.status)
                      }
                    >
                      {coupon.status === 1 ? "Kích hoạt" : "Vô hiệu hóa"}
                    </button>
                  </td>
                  <td>
                    <div>
                      <Link className="btn btn-sm btn-outline-primary me-2" to={`/edit-coupon/${coupon.id}`}>
                        <i className="bx bx-edit-alt me-1" style={{ color: "blue" }}></i> Sửa
                      </Link>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => deleteCoupon(coupon.id)}>
                        <i className="bx bx-trash me-1" style={{ color: "red" }}></i> Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
