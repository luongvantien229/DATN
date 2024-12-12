import React from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card text-center shadow-lg" style={{ maxWidth: "500px" }}>
        <div className="card-body p-4">
          <div className="text-success mb-3">
            <i
              className="fas fa-check-circle"
              style={{ fontSize: "5rem", animation: "pop 0.5s ease-out" }}
            ></i>
          </div>
          <h2 className="card-title fw-bold text-success mb-3">
            Thanh toán thành công!
          </h2>
          <p className="card-text text-muted mb-4">
            Cảm ơn bạn đã mua hàng. Chúng tôi sẽ liên hệ để giao hàng sớm nhất!
          </p>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => navigate("/")}
          >
            Quay về trang chủ
          </button>
        </div>
      </div>
      <style>
        {`
          @keyframes pop {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}
