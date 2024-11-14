import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Stripe() {
  const { cartItems } = useSelector((state) => state.cart);
  const coupon = useSelector((state) => state.coupon.coupon);
 
 

  const fetchPaymentUrl = async () => {
    const token = localStorage.getItem("token");
   
    if (!token) {
      // If not logged in, redirect to login-register page with redirect back to this page
      navigate(`/login-register?redirectTo=/payment`);
      return;
    }
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://127.0.0.1:8000/api/pay', {
          cartItems,
          coupon,
          success_url: 'http://localhost:3000/payment/success',
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        window.location.href = response.data.url;

      console.log("Redirecting to:", response.data.url);
      window.location.href = response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const checkPaymentSuccess = () => {
      if (window.location.href.includes("http://localhost:3000/payment/success")) {
        localStorage.removeItem("cart");
        localStorage.removeItem("coupon");
      }
    };

    // Kiểm tra URL khi component mount
    checkPaymentSuccess();

    // Theo dõi sự thay đổi của URL để kiểm tra mỗi khi nó thay đổi
    window.addEventListener("popstate", checkPaymentSuccess);

    return () => {
      window.removeEventListener("popstate", checkPaymentSuccess);
    };
  }, []);

  return (
    
        <div className="row col-md-6 mx-auto mt-5">
          <button className="btn btn-dark" onClick={fetchPaymentUrl}>
            Thanh toán Stripe
          </button>
        </div>
      
  );
} 