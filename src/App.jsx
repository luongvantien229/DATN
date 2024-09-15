import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/layouts/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./components/cart/cart";
import PaymentSuccess from "./components/payments/PaymentSuccess";

export default function App() {
  return (
    <>
    <Provider store = {store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}


