
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector
import {
  decrementQ,
  incrementQ,
  removeFromCart,
} from "../../../redux/slices/cartSlice";

export default function CartItem({ product }) {
  // Nhận prop product từ CartTableContent
  const [quantity, setQuantity] = useState(product.quantity || 1); // Giữ số lượng sản phẩm
  // Khởi tạo trạng thái để theo dõi hover
  const [isHovered, setIsHovered] = useState(false);
  // Xuất dữ liệu sản phẩm ra console

  console.log("Sản phẩm trong giỏ hàng:", product);


  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value > 0) {
      setQuantity(Number(value));
    }
  };

  return (
    <tr>
      <td className="product-thumbnail">
        <Link to="/product-details">

          <img
            src={product.image || "assets/images/cart/cart-1.jpg"}
            alt="Sản phẩm"
          />

        </Link>
      </td>
      <td className="product-name">
        <h5>
          <Link to="/product-details">{product.name || "Găng tay y tế"}</Link>
        </h5>
      </td>
      <td className="product-price">
        <span className="amount">
          {product.price ? product.price.toLocaleString() + "đ" : "120.000đ"}
        </span>
      </td>
      <td className="cart-quality">
        <div className="product-quality">
          <i
            className="bi bi-caret-up"
            onClick={() => dispatch(incrementQ(item))}
          ></i>
          <span className="mx-2">{quantity}</span>
          <i
            className="bi bi-caret-down"
            onClick={() => dispatch(decrementQ(item))}
          ></i>
        </div>
      </td>
      <td className="product-total">
        <span>{(product.price ? product.price : 120000) * quantity}đ</span>{" "}
        {/* Tính toán thành tiền */}
      </td>
      <td
        className="product-remove"
        onClick={() => dispatch(removeFromCart(item))}
      >
        <button
          style={{
            background: "none", // Xóa nền
            border: "none", // Xóa khung
            opacity: isHovered ? 1 : 0.5, // Mờ 50% khi không hover, 100% khi hover
            cursor: "pointer", // Con trỏ chuột khi di chuột qua
            textDecoration: "none", // Bỏ gạch chân
            color: isHovered ? "blue" : "inherit", // Đổi màu chữ thành xanh khi hover
            transition: "color 0.3s, opacity 0.3s", // Thêm hiệu ứng chuyển tiếp
          }}
          onMouseEnter={() => setIsHovered(true)} // Thiết lập trạng thái khi hover
          onMouseLeave={() => setIsHovered(false)} // Thiết lập lại trạng thái khi không hover
        >
          Xóa
        </button>

      </td>
    </tr>
  );
}
