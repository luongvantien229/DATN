
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CartItem() {
  const [quantity, setQuantity] = useState(1); 
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
          <img src="assets/images/cart/cart-1.jpg" alt="Sản phẩm" />
        </Link>
      </td>
      <td className="product-name">
        <h5>
          <Link to="/product-details">Găng tay y tế</Link>
        </h5>
      </td>
      <td className="product-price">
        <span className="amount">120.000đ</span>
      </td>
      <td className="cart-quality">
        <div className="product-quality">
          <input
            className="cart-plus-minus-box input-text qty text"
            name="qtybutton"
            type="number"
            value={quantity}
            onChange={handleQuantityChange} // Xử lý khi người dùng thay đổi số lượng
          />
        </div>
      </td>
      <td className="product-total">
        <span>{(120.000 * quantity).toFixed(2)}đ</span>
      </td>
      <td className="product-remove">
        <a href="#">Xóa</a>
      </td>
    </tr>
  );
}

