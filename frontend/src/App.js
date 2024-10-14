import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'; // Nhập Provider
import store from './redux/store'; // Đường dẫn đến store

import axios from "axios"; // Nhập axios
import Header from "./components/user/header";
import { SearchPopup, MobileHeaderMenu } from "./components/user/common";
import Breadcrumb from "./components/user/breadcrumb";
import Footer from "./components/user/footer";
import NotFound from "./components/user/error/NotFound";
import Home from "./pages/user/home";
import About from "./pages/user/about";
import Shop from "./pages/user/shop";
import Blog from "./pages/user/blog";
import Contact from "./pages/user/contact";
import Cart from "./pages/user/cart";
import LoginAndRegister from "./pages/user/loginAndRegister";
import ProductDetail from "./pages/user/productDetail";
import { useEffect } from "react";

// Thiết lập baseURL cho axios
axios.defaults.baseURL = "http://127.0.0.1:8000/api";

// Thiết lập headers mặc định
axios.defaults.headers.common["Authorization"] = "Bearer YOUR_TOKEN_HERE"; // Thay 'YOUR_TOKEN_HERE' bằng token thực tế của bạn
axios.defaults.headers.common["Content-Type"] = "application/json"; // Thêm header cho kiểu nội dung

const MainLayout = ({ children }) => (
  <div className="main-wrapper">
    <Header />
    <Breadcrumb />
    {children}
    <Footer />
    <SearchPopup />
  </div>
);

function App() {
  useEffect(() => {
  const fetchLogin = async () => {
    const loginList = await fetch("http://localhost:3000/login");
    // loginApi.getAll();
    // console.log(loginList);
  }
  fetchLogin();
  }, []);
  return (
    <Provider store={store}> {/* Bọc ứng dụng trong Provider */}
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/shop"
          element={
            <MainLayout>
              <Shop />
            </MainLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <MainLayout>
              <Blog />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />
        <Route
          path="/login-register"
          element={
            <MainLayout>
              <LoginAndRegister />
            </MainLayout>
          }
        />
        <Route
          path="/product-detail/:id"
          element={

            <MainLayout>
              <ProductDetail />
            </MainLayout>
          }
        />
        <Route path="*" element={<NotFound />} /> {/* Trang 404 */}
      </Routes>
      <div className="mobile">
        <MobileHeaderMenu />
      </div>
    </Provider>
  );
}

export default App;
