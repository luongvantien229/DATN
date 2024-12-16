import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./style.scss";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // User information
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    image: null,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState(null);

  const [statusMessage, setStatusMessage] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Orders
  const [orders, setOrders] = useState([]);
  const [orderData, setOrderData] = useState({ orders: [] });
  const [orderDetail, setOrderDetail] = useState(false);
  const [orderDetailId, setOrderDetailId] = useState(null);

  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  const feeShip = 50000;

  // Password reset
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const User = JSON.parse(localStorage.getItem("User")) || {};

  // Handle cancel order
  const handleCancelOrder = (order_code) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn hủy đơn hàng?",
      input: "textarea",
      inputPlaceholder: "Nhập lý do hủy đơn hàng...",
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
        cancelOrder(order_code, result.value.trim());
      }
    });
  };

  const cancelOrder = async (order_code, reason) => {
    try {
      const response = await axios.post(
        `/orders/cancel-order/${order_code}`,
        { reason },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        setOrderData((prevData) => ({
          ...prevData,
          orders: prevData.orders.map((order) =>
            order.code === order_code
              ? { ...order, status: "Cancelled" }
              : order
          ),
        }));
        Swal.fire("Thành công", "Đơn hàng đã được hủy.", "success")
        .then(() => {            
            // Làm mới trang sau khi người dùng nhấn OK
            window.location.reload();
          });;
      }
    } catch (error) {
      console.error("Error cancelling order:", error);
      Swal.fire("Lỗi", "Không thể hủy đơn hàng, vui lòng thử lại.", "error");
    }
  };

  // Fetch order data
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(`/orders/view_order/${orderDetailId}`);
        if (response.data.success) {
          setOrderData(response.data);
          calculateTotals(response.data);
        }
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };
    if (orderDetailId) fetchOrderData();
  }, [orderDetailId]);

  const calculateTotals = (data) => {
    const { order_items = [], condition, number } = data;

    let sub_total = order_items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubTotal(sub_total);

    let discountAmount = 0;
    if (condition === 1) {
      discountAmount = (sub_total * number) / 100;
    } else if (condition === 2) {
      discountAmount = number;
    }
    setDiscount(discountAmount);
    setTotal(sub_total - discountAmount + feeShip);
  };

  const order_items = orderData.order_items || [];

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  //user orders

  // Fetch the user data from the API when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/auth/your_profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const userData = response.data;
        setUser(userData);
        setName(userData.name);
        setEmail(userData.email);
        setPhone(userData.phone);
        setExistingImage(userData.image);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);
  // get user orders
  const fetchOrders = async () => {
    try {
      const response = await axios.get(`/get_user_orders/${User.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setOrders(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setError("");
    setSuccess("");

    // Check if new passwords match
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }

    // Validate that the new password is at least 8 characters long
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    try {
      const response = await axios.put(
        `/change_user_password/${user.id}`, // Assuming user_id is stored in localStorage
        { password, newPassword, confirmPassword },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        setSuccess("Password updated successfully");
        Swal.fire("Success", "Password updated successfully", "success").then(
          () => {
            window.location.reload();
          }
        );
      }
    } catch (error) {
      console.error("Error updating password:", error);
      setError("Sai mật khẩu cũ");
    }
  };

  const changeUserInformation = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `/change_user_info/${user.id}`,
        { name, email, phone, image },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        setSuccess("User information updated successfully");
        Swal.fire(
          "Success",
          "User information updated successfully",
          "success"
        );
      }
    } catch (error) {
      setError("Failed to update user information");
      console.error("Update error:", error);
    }
  };

  // Handle new image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file); // Save the new image
    setUser((prev) => ({ ...prev, image: file })); // Update the user with the new image
  };

  useEffect(() => {
    if (performance.navigation.type === 1) {
      setOrderDetail(true);
    }
    fetchOrders();
  }, []);

  return (
    <div className="my-account-area pt-75 pb-75">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* My Account Page Start */}
            <div className="myaccount-page-wrapper">
              {/* My Account Tab Menu Start */}
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="myaccount-tab-menu nav" role="tablist">
                    <Link
                      to="#dashboard"
                      className={activeTab === "dashboard" ? "active" : ""}
                      onClick={() => handleTabChange("dashboard")}
                    >
                      Thông tin tài khoản
                    </Link>
                    <Link
                      to="#orders"
                      className={activeTab === "orders" ? "active" : ""}
                      onClick={() => handleTabChange("orders")}
                    >
                      Đơn hàng
                    </Link>
                    {/* <Link to="#address-edit" className={activeTab === "address-edit" ? "active" : ""} onClick={() => handleTabChange("address-edit")}>Address</Link> */}
                    <Link
                      to="#account-info"
                      className={activeTab === "account-info" ? "active" : ""}
                      onClick={() => handleTabChange("account-info")}
                    >
                      Đổi mật khẩu
                    </Link>
                    <Link to="/">Thoát</Link>
                  </div>
                </div>

                <div className="col-lg-8 col-md-8">
                  <div className="tab-content" id="myaccountContent">
                    {/* Dashboard Tab Content */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "dashboard" ? "show active" : ""
                      }`}
                      id="dashboard"
                      role="tabpanel"
                    >
                      <div className="myaccount-content">
                        <div className="account-details-form">
                          <form onSubmit={changeUserInformation}>
                            <fieldset>
                              <legend>Thông tin tài khoản</legend>
                              <div className="row">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Ảnh thương hiệu
                                  </label>
                                  {existingImage && (
                                    <div className="mb-3">
                                      <img
                                        src={`${existingImage}`}
                                        alt="Thương hiệu"
                                        width="100"
                                      />
                                    </div>
                                  )}
                                  <input
                                    type="file"
                                    name="image"
                                    className="form-control"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                  />
                                </div>
                                <div className="col-lg-12">
                                  <div className="account-info input-style mb-30">
                                    <label>Name *</label>
                                    <input
                                      type="text"
                                      name="name"
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="account-info input-style mb-30">
                                    <label>Email</label>
                                    <input
                                      type="email"
                                      name="email"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="account-info input-style">
                                    <label>Phone</label>
                                    <input
                                      type="number"
                                      name="phone"
                                      value={phone}
                                      onChange={(e) => setPhone(e.target.value)}
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </fieldset>

                            <div className="account-info-btn">
                              <button type="submit">Lưu</button>
                            </div>
                            {/* Display success or error message */}
                            {success && (
                              <p style={{ color: "green" }}>{success}</p>
                            )}
                            {error && <p style={{ color: "red" }}>{error}</p>}
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* Orders Tab Content */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "orders" ? "show active" : ""
                      }`}
                      id="orders"
                      role="tabpanel"
                    >
                      <div className="myaccount-content">
                        <div className="myaccount-table table-responsive text-center">
                          {orderDetail && orders && orders.length > 0 ? (
                            <table className="table table-bordered">
                              <thead className="thead-light">
                                <tr>
                                  <th>Mã đơn hàng</th>
                                  <th>Ngày đặt</th>
                                  <th>Trạng thái</th>
                                  <th>Tổng tiền</th>
                                  <th>Hành động</th>
                                </tr>
                              </thead>
                              <tbody>
                                {orders ? (
                                  orders.map((order) => {
                                    return (
                                      <tr key={order.id}>
                                        <td>{order.order_code}</td>{" "}
                                        {/* Display order code */}
                                        <td>
                                          {new Date(
                                            order.date_deliver
                                          ).toLocaleDateString()}
                                        </td>{" "}
                                        {/* Format date */}
                                        <td>
                                          {(() => {
                                            if (order.status === "Pending") {
                                              return "Đơn hàng mới - chờ xử lý";
                                            } else if (
                                              order.status === "Delivered"
                                            ) {
                                              return "Đã xử lí đơn hàng";
                                            } else if (
                                              order.status === "Cancelled"
                                            ) {
                                              return "Đơn hàng bị hủy";
                                            } else if (
                                              order.status === "Accepted"
                                            ) {
                                              return "Đơn hàng đã được giao";
                                            } else if (
                                              order.status ===
                                              "Out for Delivery"
                                            ) {
                                              return "Đơn hàng đang được giao";
                                            } else {
                                              return "Trạng thái không xác định";
                                            }
                                          })()}
                                        </td>{" "}
                                        {/* Display status */}
                                        <td>
                                          {order.total_price.toLocaleString()}{" "}
                                          VND
                                        </td>{" "}
                                        {/* Format total price */}
                                        <td>
                                          {order.status === "Pending" && (
                                            <button
                                              className="btn btn-danger"
                                              onClick={() =>
                                                handleCancelOrder(
                                                  order.order_code
                                                )
                                              }
                                            >
                                              Hủy đơn
                                            </button>
                                          )}

                                          <button
                                            type="button"
                                            className="btn btn-link"
                                            onClick={() => {
                                              setOrderDetailId(
                                                order.order_code
                                              );
                                              setOrderDetail(false);
                                            }}
                                          >
                                            <i className="bi bi-eye"></i> Xem
                                            chi tiết
                                          </button>
                                        </td>
                                      </tr>
                                    );
                                  })
                                ) : (
                                  <tr>
                                    <td colSpan="5">Không có đơn hàng nào.</td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          ) : (
                            <div>
                              <h3>Chi tiết đơn hàng</h3>
                              {/* table show chi tiet san pham */}
                              {/* <table className="table table-bordered">
                                <thead className="thead-light">
                                  <tr>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {orderDetailId &&
                                    orders.map((order) => {
                                      if (order.id == orderDetailId) {
                                        return order.items.map((item) => (
                                          <tr key={item.id}>
                                            <td>{item.product_name}</td>
                                            <td>
                                              {item.price.toLocaleString()} VND
                                            </td>
                                            <td>{item.quantity}</td>
                                          </tr>
                                        ));
                                      }
                                    })}
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-link"
                                      onClick={() => setOrderDetail(true)}
                                    >
                                      Back
                                    </button>
                                  </td>
                                </tbody>
                              </table> */}
                              {/* Customer Information */}
                              <div className="d-flex justify-content-between align-items-center p-3">
                                {orders.length > 0 ? (
                                  <div className="card md-6">
                                    <a
                                      href={`http://localhost:8000/api/orders/print_order/${orders[0]?.order_code}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <button
                                        type="button"
                                        className="btn rounded-pill btn-success m-6"
                                      >
                                        In PDF chi tiết
                                      </button>
                                    </a>
                                  </div>
                                ) : (
                                  <p>Chưa có đơn hàng</p>
                                )}
                              </div>
                              <div className="card mb-4">
                                <div className="card-header bg-success text-white text-center">
                                  THÔNG TIN NGƯỜI MUA
                                </div>
                                <div className="card-body">
                                  <table className="table table-bordered">
                                    <thead className="table-light">
                                      <tr>
                                        <th>Thông Tin</th>
                                        <th>Chi Tiết</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <strong>Tên khách hàng</strong>
                                        </td>
                                        <td>{user?.name || "N/A"}</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Số điện thoại</strong>
                                        </td>
                                        <td>{user?.phone || "N/A"}</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Email</strong>
                                        </td>
                                        <td>{user?.email || "N/A"}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                              {/* Shipping Information */}
                              <div className="card mb-4">
                                <div className="card-header bg-success text-white text-center">
                                  THÔNG TIN VẬN CHUYỂN HÀNG
                                </div>
                                <div className="card-body">
                                  <table className="table table-bordered">
                                    <thead className="table-light">
                                      <tr>
                                        <th>Thông Tin</th>
                                        <th>Chi Tiết</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <strong>Tên người người nhận</strong>
                                        </td>
                                        <td>{orders[0]?.shipname || "N/A"}</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Số điện thoại</strong>
                                        </td>
                                        <td>{orders[0]?.shipphone || "N/A"}</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Địa chỉ</strong>
                                        </td>
                                        <td>{orders[0]?.address || "N/A"}</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Ghi chú</strong>
                                        </td>
                                        <td>{orders[0]?.note || "N/A"}</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Hình thức thanh toán</strong>
                                        </td>
                                        <td>
                                          {orders[0]?.payment_method || "N/A"}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                              {/* Order Details */}
                              <div className="card mb-4">
                                <div className="card-header bg-success text-white text-center">
                                  LIỆT KÊ CHI TIẾT ĐƠN HÀNG
                                </div>
                                <div className="card-body">
                                  <table className="table table-bordered ">
                                    <thead className="table-light">
                                      <tr>
                                        <th>Tên sản phẩm</th>
                                        {/* <th>Số lượng trong kho còn</th> */}
                                        <th>Mã giảm giá</th>
                                        <th>Phí ship hàng</th>
                                        <th>Số lượng</th>
                                        <th>Giá sản phẩm</th>
                                        <th>Tổng tiền</th>
                                      </tr>
                                    </thead>
                                    <tbody className="">
                                      {order_items.map((item) => (
                                        <tr key={item.id}>
                                          <td>
                                            {item.product?.name.length > 20
                                              ? item.product.name.substring(
                                                  0,
                                                  20
                                                ) + "..."
                                              : item.product?.name || "N/A"}
                                          </td>
                                          {/* <td>
                                            {item.product?.qty !== undefined
                                              ? item.product.qty
                                              : "N/A"}
                                          </td> */}
                                          <td>
                                            {item.coupon_code &&
                                            item.coupon_code !== "no"
                                              ? item.coupon_code
                                              : "Không mã"}
                                          </td>
                                          <td>
                                            {(
                                              item.shipping_fee || 50000
                                            ).toLocaleString()}{" "}
                                            đ
                                          </td>
                                          <td>
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <input
                                                type="number"
                                                min={1}
                                                value={item.quantity}
                                                style={{
                                                  width: "60px",
                                                  marginRight: "10px",
                                                  textAlign: "center",
                                                }}
                                                disabled
                                              />
                                            </div>
                                          </td>

                                          <td>
                                            {item.price.toLocaleString()} đ
                                          </td>
                                          <td>
                                            {(
                                              item.price * item.quantity
                                            ).toLocaleString()}{" "}
                                            đ
                                          </td>
                                        </tr>
                                      ))}
                                      <tr>
                                        <td
                                          colSpan={5}
                                          style={{ textAlign: "right" }}
                                        >
                                          <strong>Tổng giảm:</strong>
                                        </td>
                                        <td>
                                          {discount.toLocaleString()} đ <br />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colSpan={5}
                                          style={{ textAlign: "right" }}
                                        >
                                          <strong>Phí ship:</strong>
                                        </td>
                                        <td>
                                          {feeShip.toLocaleString()} đ<br />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colSpan={5}
                                          style={{ textAlign: "right" }}
                                        >
                                          <strong>Thanh toán:</strong>
                                        </td>
                                        <td> {total.toLocaleString()} đ</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="card-footer">
                                {(() => {
                                  if (!orders || orders.length === 0) {
                                    return "Không có đơn hàng";
                                  }

                                  if (orders[0].status === "Pending") {
                                    return "Đơn hàng mới - chờ xử lý";
                                  } else if (orders[0].status === "Delivered") {
                                    return "Đã xử lí đơn hàng";
                                  } else if (orders[0].status === "Cancelled") {
                                    return "Đơn hàng bị hủy";
                                  } else if (orders[0].status === "Accepted") {
                                    return (
                                      <p style={{ color: "green" }}>
                                        Đơn hàng đã được giao
                                      </p>
                                    );
                                  } else if (
                                    orders[0].status === "Out for Delivery"
                                  ) {
                                    return "Đơn hàng đang được giao";
                                  } else {
                                    return "Trạng thái không xác định";
                                  }
                                })()}
                              </div>

                              <p>
                                <button
                                  type="button"
                                  className="btn btn-link"
                                  onClick={() => setOrderDetail(true)}
                                >
                                  Back
                                </button>
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Address Edit Tab Content */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "address-edit" ? "show active" : ""
                      }`}
                      id="address-edit"
                      role="tabpanel"
                    >
                      <div className="myaccount-content myaccount-address">
                        <p>
                          The following addresses will be used on the checkout
                          page by default.
                        </p>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12 col-sm-6">
                            <div className="myaccount-address-wrap">
                              <h3>Billing address</h3>
                              <div className="myaccount-address-content">
                                <h4>Alex Tuntuni</h4>
                                <p>
                                  1355 Market St, Suite 900 <br />
                                  San Francisco, CA 94103
                                </p>
                                <p>Mobile: (123) 456-7890</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12 col-sm-6">
                            <div className="myaccount-address-wrap">
                              <h3>Shipping address</h3>
                              <div className="myaccount-address-content">
                                <h4>Alex Tuntuni</h4>
                                <p>
                                  1355 Market St, Suite 900 <br />
                                  San Francisco, CA 94103
                                </p>
                                <p>Mobile: (123) 456-7890</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Account Info Tab Content */}
                    <div
                      className={`tab-pane fade ${
                        activeTab === "account-info" ? "show active" : ""
                      }`}
                      id="account-info"
                      role="tabpanel"
                    >
                      <div className="myaccount-content">
                        <div className="account-details-form">
                          <form onSubmit={handleSubmit}>
                            <fieldset>
                              <legend>Đổi mật khẩu</legend>
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="account-info input-style mb-30">
                                    <label>Mật khẩu hiện tại</label>
                                    <input
                                      type="password"
                                      value={password}
                                      onChange={(e) =>
                                        setPassword(e.target.value)
                                      }
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="account-info input-style mb-30">
                                    <label>Mật khẩu mới</label>
                                    <input
                                      type="password"
                                      value={newPassword}
                                      onChange={(e) =>
                                        setNewPassword(e.target.value)
                                      }
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="account-info input-style">
                                    <label>Nhập lại mật khẩu</label>
                                    <input
                                      type="password"
                                      value={confirmPassword}
                                      onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                      }
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </fieldset>

                            {/* Display success or error messages */}
                            {success && (
                              <p style={{ color: "green" }}>{success}</p>
                            )}

                            {error && <p style={{ color: "red" }}>{error}</p>}
                            <div className="account-info-btn">
                              <button type="submit">Lưu</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* My Account Tab Content End */}
                </div>
              </div>
            </div>{" "}
            {/* My Account Page End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
