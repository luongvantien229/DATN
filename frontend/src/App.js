import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { SearchPopup, MobileHeaderMenu } from "./components/common";
import Breadcrumb from "./components/breadcrumb";
import Footer from "./components/footer";
import NotFound from "./components/error/NotFound";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import LoginAndRegister from "./pages/loginAndRegister";
import ProductDetail from "./pages/productDetail";

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
          path="/login-register"
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
