import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/error/NotFound";
import SideBar from "./components/sideBar";
import Nav from "./components/nav";
import Dashboard from "./components/dashboard";
import Brands from "./components/brands/index.jsx";
import AddBrands from "./components/brands/add.jsx";
import EditBrands from "./components/brands/edit.jsx";
import Categories from "./components/categories/index.jsx";
import AddCategories from "./components/categories/add.jsx";
import EditCategories from "./components/categories/edit.jsx";
import ProductTypes from "./components/productTypes/index.jsx";
import AddProductTypes from "./components/productTypes/add.jsx";
import EditProductTypes from "./components/productTypes/edit.jsx";
import Products from "./components/products/index.jsx";
import AddProducts from "./components/products/add.jsx";
import EditProducts from "./components/products/edit.jsx";
import AdminLogin from "./components/login/AdminLogin";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`; // JWT setup

// Main layout wrapper component
const MainLayout = ({ children }) => (
  <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      <SideBar />
      <div className="layout-page">
        <Nav />
        {children}
      </div>
    </div>
    <div className="layout-overlay layout-menu-toggle"></div>
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
              <Dashboard />
            </MainLayout>
          }
        />
        <Route path="/login" element={<AdminLogin />} />
        <Route
          path="/brands"
          element={
            <MainLayout>
              <Brands />
            </MainLayout>
          }
        />
        <Route
          path="/add-brands"
          element={
            <MainLayout>
              <AddBrands />
            </MainLayout>
          }
        />
        <Route
          path="/edit-brands/:id"
          element={
            <MainLayout>
              <EditBrands />
            </MainLayout>
          }
        />

        <Route
          path="/categories"
          element={
            <MainLayout>
              <Categories />
            </MainLayout>
          }
        />
        <Route
          path="/add-categories"
          element={
            <MainLayout>
              <AddCategories />
            </MainLayout>
          }
        />
        <Route
          path="/edit-categories/:id"
          element={
            <MainLayout>
              <EditCategories />
            </MainLayout>
          }
        />

        <Route
          path="/product-types"
          element={
            <MainLayout>
              <ProductTypes />
            </MainLayout>
          }
        />
        <Route
          path="/add-product-types"
          element={
            <MainLayout>
              <AddProductTypes />
            </MainLayout>
          }
        />
        <Route
          path="/edit-product-types/:id"
          element={
            <MainLayout>
              <EditProductTypes />
            </MainLayout>
          }
        />
         <Route
          path="/products"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        />
        <Route
          path="/add-products"
          element={
            <MainLayout>
              <AddProducts />
            </MainLayout>
          }
        />
        <Route
          path="/edit-products/:id"
          element={
            <MainLayout>
              <EditProducts />
            </MainLayout>
          }
        />


        <Route path="*" element={<NotFound />} /> {/* Trang 404 */}
      </Routes>
    </>
  );
}

export default App;
