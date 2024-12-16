import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "datatables.net-dt/css/dataTables.dataTables.css";
import $ from "jquery";
import "datatables.net";
import Swal from "sweetalert2";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const tableInitialized = useRef(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8000/api/orders/index",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setOrders(response.data.data);
      } catch (error) {
        setError("Lỗi khi tải đơn hàng!");
        console.error(
          "Fetch error:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    if (!loading && orders.length > 0 && !tableInitialized.current) {
      $("#ordersTable").DataTable({
        paging: true,
        searching: true,
      });
      tableInitialized.current = true;
    }
  }, [loading, orders]);

  const updateOrderStatus = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem("token");
      const newStatus = prompt(
        "Nhập trạng thái mới (Pending, Delivered, Out for Delivery, Cancelled, Accepted):",
        currentStatus
      );
      if (!newStatus) return;

      await axios.post(
        `http://localhost:8000/api/orders/change_order_status/${id}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setOrders(
        orders.map((order) =>
          order.id === id ? { ...order, status: newStatus } : order
        )
      );
      alert("Cập nhật trạng thái đơn hàng thành công!");
    } catch (error) {
      setError("Lỗi khi cập nhật trạng thái đơn hàng!");
      console.error(
        "Update error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleCancelOrder = (order_code) => {
    console.log("Order Code:", order_code);

    Swal.fire({
      title: "Bạn có chắc chắn muốn hủy đơn hàng?",
      input: "textarea",
      inputPlaceholder: "Nhập lý do hủy đơn hàng...",
      inputAttributes: {
        "aria-label": "Nhập lý do hủy đơn hàng",
      },
      showCancelButton: true,
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
      preConfirm: (reason) => {
        if (!reason || reason.trim() === "") {
          Swal.showValidationMessage("Lý do hủy đơn hàng là bắt buộc.");
        }
        return reason;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        cancelOrder(order_code, result.value.trim()); // Gửi API với lý do hủy
        Swal.fire(
          "Đã hủy",
          "Đơn hàng của bạn đã được hủy thành công.",
          "success"
        );
      } else if (result.isDismissed) {
        Swal.fire("Đã hủy", "Không có thay đổi nào được thực hiện.", "info");
      }
    });
  };

  const cancelOrder = async (order_code, reason) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/orders/cancel-order/${order_code}`,
        { reason },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          data: {
            _method: "put",
          },
        }
      );
      if (response.status === 200) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.code === order_code
              ? { ...order, status: "Cancelled" }
              : order
          )
        );
        Swal.fire("Thành công", "Đơn hàng đã được hủy.", "success");
      }
    } catch (error) {
      console.error("Error cancelling order:", error);
      Swal.fire("Lỗi", "Không thể hủy đơn hàng, vui lòng thử lại.", "error");
    }
    window.location.reload(); 
  };

  if (loading) {
    return <div>Đang tải đơn hàng...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="card">
        <h5 className="card-header">Danh Sách Đơn Hàng</h5>

        <div className="table-responsive text-nowrap">
          <table id="ordersTable" className="table table-bordered">
            <thead>
              <tr>
                <th>ID Người Dùng</th>
                <th>Mã Đơn Hàng</th>
                <th>Tổng Giá</th>
                <th>Phương Thức Thanh Toán</th>
                <th>Ngày Giao Hàng</th>
                <th>Trạng Thái</th>
                <th>Lý do hủy đơn</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.user.name}</td>
                  <td>{order.order_code}</td>
                  <td>{order.total_price.toLocaleString("vi-VN")} đ</td>
                  <td>{order.payment_method}</td>
                  <td>{order.date_deliver}</td>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      value={order.status || ""}
                      onChange={(e) =>
                        updateOrderStatus(order.id, e.target.value)
                      }
                    >
                      <option value="">
                        --------Chọn trạng thái đơn hàng--------
                      </option>

                      {order.status === "Pending" && (
                        <>
                          <option value="Pending" disabled>
                            Đơn hàng mới - chờ xử lý
                          </option>
                          <option value="Delivered">Đã xử lí đơn hàng</option>
                        </>
                      )}

                      {order.status === "Delivered" && (
                        <>
                          <option disabled value="Delivered">
                            Đã xử lí đơn hàng
                          </option>
                          <option value="Out for Delivery">
                            Đơn hàng đang được giao
                          </option>
                        </>
                      )}

                      {order.status === "Out for Delivery" && (
                        <>
                          <option value="Out for Delivery" disabled>
                            Đơn hàng đang được giao
                          </option>
                          <option value="Accepted">
                            Đơn hàng đã được giao
                          </option>
                        </>
                      )}

                      {order.status === "Cancelled" && (
                        <>
                          <option value="Cancelled" disabled>
                            Đơn hàng bị hủy
                          </option>
                        </>
                      )}

                      {order.status === "Accepted" && (
                        <>
                          <option value="Accepted" disabled>
                            Đơn hàng đã được giao
                          </option>
                        </>
                      )}
                    </select>
                  </td>

                  <td>{order.reason_cancel}</td>

                  <td>
                    <Link
                      className="btn btn-sm btn-outline-primary me-2"
                      to={`/view-order/${order.order_code}`}
                    >
                      Xem Đơn Hàng
                    </Link>

                    {order.status === "Pending" && (
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleCancelOrder(order.order_code)}
                      >
                        Hủy
                      </button>
                    )}
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

export default Orders;
