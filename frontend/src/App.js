import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
    <>
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
          path="/product-detail"
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
    </>
  );
}

export default App;
