import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartCollaterals() {
  const [formData, setFormData] = useState({
    shipName: "",
    shipPhone: "",
    address: "",
    note: "",
    paymentMethod: "",
  });

  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const goongApiKey = "YOUR_GOONG_API_KEY"; // Replace with your Goong API key

  useEffect(() => {
    const savedData = localStorage.getItem("PaymentInformation");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleAddressChange = async (e) => {
    const address = e.target.value;
    setFormData((prev) => ({ ...prev, address }));

    if (address.length > 2) {
      try {
        const response = await fetch(
          `https://rsapi.goong.io/Place/AutoComplete?api_key=${goongApiKey}&input=${address}`
        );
        const data = await response.json();
        setAddressSuggestions(data.predictions || []);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Error fetching address suggestions:", error);
      }
    } else {
      setAddressSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (selectedAddress) => {
    setFormData((prev) => ({ ...prev, address: selectedAddress }));
    setAddressSuggestions([]);
    setShowSuggestions(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (
      !formData.shipName ||
      !formData.shipPhone ||
      !formData.address ||
      !formData.paymentMethod
    ) {
      toast.info("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    localStorage.setItem("PaymentInformation", JSON.stringify(formData));
    toast.success("Thông tin thanh toán đã được lưu thành công !");
    window.location.reload();
  };

  return (
    <div className="col-lg-6 col-md-6 col-12">
      <div className="cart-collaterals-wrap mb-40">
        <h4>Thông tin thanh toán</h4>
        <div className="collaterals-content common-form-style">
          <div className="input-style input-style-mb">
            <input
              type="text"
              placeholder="Họ và tên người nhận"
              name="shipName"
              value={formData.shipName}
              onChange={handleChange}
            />
          </div>
          <div className="input-style input-style-mb">
            <input
              type="text"
              placeholder="Số điện thoại người nhận"
              name="shipPhone"
              value={formData.shipPhone}
              onChange={handleChange}
            />
          </div>
          <div className="input-style input-style-mb">
            <input
              type="text"
              placeholder="Địa chỉ giao hàng"
              name="address"
              value={formData.address}
              onChange={handleAddressChange}
              autoComplete="off"
            />
            {showSuggestions && addressSuggestions.length > 0 && (
              <ul
                className="suggestions-list"
                style={{
                  border: "1px solid #ddd",
                  maxHeight: "200px",
                  overflowY: "auto",
                  position: "absolute",
                  background: "white",
                  zIndex: 1000,
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {addressSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion.description)}
                    style={{
                      padding: "8px 12px",
                      cursor: "pointer",
                    }}
                  >
                    {suggestion.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="input-style input-style-mb">
            <textarea
              placeholder="Ghi chú (Tùy chọn)"
              rows="3"
              style={{ width: "100%" }}
              name="note"
              value={formData.note}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="payment-methods">
            <p className="mb-3">Chọn phương thức thanh toán:</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="cashOnDelivery"
                value="Thanh toán khi nhận hàng"
                onChange={handleChange}
                checked={formData.paymentMethod === "Thanh toán khi nhận hàng"}
              />
              <label className="form-check-label" htmlFor="cashOnDelivery">
                Thanh toán khi nhận hàng
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="cardPayment"
                value="Thanh toán qua thẻ"
                onChange={handleChange}
                checked={formData.paymentMethod === "Thanh toán qua thẻ"}
              />
              <label className="form-check-label" htmlFor="cardPayment">
                Thanh toán qua thẻ
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="bankTransfer"
                value="Chuyển khoản ngân hàng"
                onChange={handleChange}
                checked={formData.paymentMethod === "Chuyển khoản ngân hàng"}
              />
              <label className="form-check-label" htmlFor="bankTransfer">
                Chuyển khoản ngân hàng
              </label>
            </div>
          </div>
          <div className="common-btn-style">
            <button className="common-btn-padding-2" onClick={handleSubmit}>
              Xác nhận thông tin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
