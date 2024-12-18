import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import "./style.scss";

Modal.setAppElement("#root");

export default function Stripe() {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const coupon = useSelector((state) => state.coupon.coupon);
  const PaymentInformation =
    JSON.parse(localStorage.getItem("PaymentInformation")) || {};
  const paymentMethod = PaymentInformation.paymentMethod;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const User = JSON.parse(localStorage.getItem("User")) || {};

  const fetchPaymentUrl = async () => {
    // Get the token from localStorage
const localStorageToken = localStorage.getItem("token");

// Get the token from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const urlToken = urlParams.get("token");

// You can now choose which token to use, for example:
const token = urlToken || localStorageToken; // If URL token exists, use it; otherwise, use the localStorage token.

    // Check if PaymentInformation is complete
    if (
      !PaymentInformation ||
      !PaymentInformation.shipName ||
      !PaymentInformation.shipPhone ||
      !PaymentInformation.address
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin thanh toán để tiếp tục!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (!token) {
      navigate(`/login-register?redirectTo=/payment`);
      return;
    }

    // For both payment methods, we want to open the modal
    if (paymentMethod === "Thanh toán khi nhận hàng") {
      const orderInfo = {
        cartItems,
        coupon,
        PaymentInformation,
      };
      setPaymentDetails(orderInfo); // Set the payment details for COD
    } else {
      const paymentInfo = {
        cartItems,
        coupon,
        PaymentInformation,
        success_url: "http://localhost:3000/payment/success",
      };
      setPaymentDetails(paymentInfo); // Set the payment details for Stripe
    }

    setIsModalOpen(true);
  };

  const handleConfirmPayment = async () => {
    // Get the token from localStorage
const localStorageToken = localStorage.getItem("token");

// Get the token from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const urlToken = urlParams.get("token");

// You can now choose which token to use, for example:
const token = urlToken || localStorageToken; // If URL token exists, use it; otherwise, use the localStorage token.


    if (paymentMethod === "Thanh toán khi nhận hàng") {
      // Handle cash on delivery order
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/confirm_order",
          { cartItems, coupon, PaymentInformation },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert("Đơn hàng của bạn đã được xác nhận!");
        navigate("/payment/success");
      } catch (error) {
        console.error("Error confirming order:", error);
        alert("Đã xảy ra lỗi khi xác nhận đơn hàng.");
      }
      localStorage.removeItem("cartItems");
      localStorage.removeItem("coupon");
      localStorage.removeItem("PaymentInformation");
    } else {
      // Handle Stripe payment
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/pay",
          paymentDetails,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        window.location.href = response.data.url;
      } catch (error) {
        console.error("Error fetching payment URL:", error);
        alert("Đã xảy ra lỗi khi thanh toán.");
      }
      localStorage.removeItem("cartItems");
      localStorage.removeItem("coupon");
      localStorage.removeItem("PaymentInformation");
    }
    setIsModalOpen(false); // Close the modal after confirming payment
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const shippingFee = 50000;

  const total = calculateTotal();
  const discount = coupon
    ? coupon.condition === 1
      ? (total * coupon.number) / 100
      : coupon.number
    : 0;
  const totalAfterDiscount = total - discount + shippingFee;

  return (
    <div className="row col-md-6 mx-auto mt-5">
      <button className="btn btn-dark" onClick={fetchPaymentUrl}>
        {paymentMethod === "Thanh toán khi nhận hàng"
          ? "Xác nhận đơn hàng"
          : "Thanh toán Stripe"}
      </button>

      {/* Modal for Invoice Confirmation */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Invoice Details"
      >
        <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
          {/* Header Section */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src="/assets/images/logo/logoo.png"
              alt="Logo"
              style={{ maxWidth: "150px" }}
            />
            <h1 style={{ margin: "10px 0", fontSize: "24px" }}>
              Hiệu thuốc Yên Tâm
            </h1>
            <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "normal" }}>
              Độc lập - Tự do - Hạnh phúc
            </h4>
          </div>

          <p style={{ margin: 0 }}>
            <strong>Ngày tạo:</strong>{" "}
            {new Date().toLocaleDateString("vi-VN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
          <p style={{ margin: 0 }}>
            Địa chỉ: Công viên phần mềm Quang Trung, Phường Tân Chánh Hiệp, Quận
            12
          </p>
          <p style={{ margin: "5px 0", fontSize: "14px" }}>
            Số điện thoại: (+84) 394 444 686
          </p>
          <br />
          {/* Customer Information */}
          <p>
            <strong>Thông tin đăng nhập:</strong>
          </p>
          <table
            className="table-styling"
            style={{
              width: "100%",
              border: "1px solid #000",
              borderCollapse: "collapse",
              marginBottom: "20px",
            }}
          >
            <thead
              style={{
                backgroundColor: "#f2f2f2",
              }}
            >
              <tr>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Tên đăng nhập
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Số điện thoại
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {User.name ? User.name : "Chưa có tên người dùng"}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {User.phone ? User.phone : "Chưa có tên người dùng"}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {User.email ? User.email : "Chưa có tên người dùng"}
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>Thông tin đặt hàng:</strong>
          </p>
          <table
            className="table-styling"
            style={{
              width: "100%",
              border: "1px solid #000",
              borderCollapse: "collapse",
              marginBottom: "20px",
            }}
          >
            <thead
              style={{
                backgroundColor: "#f2f2f2",
              }}
            >
              <tr>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Tên khách đặt
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Số điện thoại
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Địa chỉ giao hàng
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Ghi chú *
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Phương thức thanh toán *
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {PaymentInformation.shipName}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {PaymentInformation.shipPhone}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {PaymentInformation.address}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {PaymentInformation.note}
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  {PaymentInformation.paymentMethod}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Order Details */}
          <p>
            <strong>Đơn hàng đặt:</strong>
          </p>
          <table
            className="table-styling"
            style={{
              width: "100%",
              border: "1px solid #000",
              borderCollapse: "collapse",
              marginBottom: "20px",
            }}
          >
            <thead
              style={{
                backgroundColor: "#f2f2f2",
              }}
            >
              <tr>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Tên sản phẩm
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Mã giảm giá
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Số lượng
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Giá sản phẩm
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Thành tiền
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => {
                const subtotal = item.price * item.quantity;
                return (
                  <tr key={index}>
                    <td style={{ border: "1px solid #000", padding: "8px" }}>
                      {item.name}
                    </td>
                    <td style={{ border: "1px solid #000", padding: "8px" }}>
                      {coupon ? coupon.code : "no"}
                    </td>
                    <td style={{ border: "1px solid #000", padding: "8px" }}>
                      {item.quantity}
                    </td>
                    <td style={{ border: "1px solid #000", padding: "8px" }}>
                      {item.price.toLocaleString()}đ
                    </td>
                    <td style={{ border: "1px solid #000", padding: "8px" }}>
                      {subtotal.toLocaleString()}đ
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td
                  colSpan="4"
                  style={{ textAlign: "right", padding: "8px", border: "none" }}
                >
                  <strong>Phí vận chuyển:</strong>
                </td>
                <td style={{ padding: "8px", border: "1px solid #000" }}>
                  {shippingFee.toLocaleString()}đ
                </td>
              </tr>
              <tr>
                <td
                  colSpan="4"
                  style={{ textAlign: "right", padding: "8px", border: "none" }}
                >
                  <strong>Tổng giảm:</strong>
                </td>
                <td style={{ padding: "8px", border: "1px solid #000" }}>
                  {coupon
                    ? coupon.condition === 1
                      ? coupon.number + "%"
                      : coupon.number.toLocaleString() + "đ"
                    : "0đ"}
                </td>
              </tr>
              <tr>
                <td
                  colSpan="4"
                  style={{ textAlign: "right", padding: "8px", border: "none" }}
                >
                  <strong>Thanh toán:</strong>
                </td>
                <td
                  style={{
                    padding: "8px",
                    border: "1px solid #000",
                    fontWeight: "bold",
                  }}
                >
                  {totalAfterDiscount.toLocaleString()}đ
                </td>
              </tr>
            </tbody>
          </table>

          {/* Signature Section */}
          <p style={{ textAlign: "right", marginTop: "50px" }}>
            <strong>Ký tên</strong>
          </p>
          <table
            style={{
              width: "100%",
              marginTop: "50px",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{ width: "50%", textAlign: "center", border: "none" }}
                >
                  Người lập phiếu
                </th>
                <th
                  style={{ width: "50%", textAlign: "center", border: "none" }}
                >
                  Người nhận
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center", border: "none" }}>
                  ________________________
                </td>
                <td style={{ textAlign: "center", border: "none" }}>
                  ________________________
                </td>
              </tr>
            </tbody>
          </table>

          {/* Footer Buttons */}
          <div style={{ textAlign: "center", marginTop: "80px" }}>
            <button onClick={handleConfirmPayment} className="btn btn-primary">
              Xác nhận thanh toán
            </button>
            <button
              onClick={handleCloseModal}
              className="btn btn-secondary"
              style={{ marginLeft: "10px" }}
            >
              Đóng
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
