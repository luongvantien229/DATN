import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/error/NotFound";
import SideBar from "./components/sideBar";
import Nav from "./components/nav";
import Dashboard from "./components/dashboard";
import Categories from "./components/categories";
import AddCategories from "./components/categories/add";
import EditCategories from "./components/categories/edit";
import Brands from "./components/brands";
import AddBrands from "./components/brands/add";
import EditBrands from "./components/brands/edit";
import Products from "./components/products";
import AddProducts from "./components/products/add";
import EditProducts from "./components/products/edit";
import Users from "./components/users";
import AddUsers from "./components/users/add";
import EditUsers from "./components/users/edit";

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
          path="/edit-categories"
          element={
            <MainLayout>
              <EditCategories />
            </MainLayout>
          }
        />
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
          path="/edit-brands"
          element={
            <MainLayout>
              <EditBrands />
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
          path="/edit-products"
          element={
            <MainLayout>
              <EditProducts />
            </MainLayout>
          }
        />
        <Route
          path="/users"
          element={
            <MainLayout>
              <Users />
            </MainLayout>
          }
        />
        <Route
          path="/add-users"
          element={
            <MainLayout>
              <AddUsers />
            </MainLayout>
          }
        />
        <Route
          path="/edit-users"
          element={
            <MainLayout>
              <EditUsers />
            </MainLayout>
          }
        />
        <Route path="*" element={<NotFound />} /> {/* Trang 404 */}
      </Routes>
    </>
  );
}

export default App;
