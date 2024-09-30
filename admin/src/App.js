import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/error/NotFound";
import SideBar from "./components/sideBar";
import Nav from "./components/nav";
import Dashboard from "./components/dashboard";
import Categories from "./components/categories";
import AddCategories from "./components/categories/add";
import User from "./components/user";
import AddUser from "./components/user/add";
import EditUser from "./components/user/edit";

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
          path="/user"
          element={
            <MainLayout>
              <User />
            </MainLayout>
          }
        />
        <Route
          path="/add-user"
          element={
            <MainLayout>
              <AddUser />
            </MainLayout>
          }
        />
        <Route
          path="/edit-user"
          element={
            <MainLayout>
              <EditUser />
            </MainLayout>
          }
        />
        <Route path="*" element={<NotFound />} /> {/* Trang 404 */}
      </Routes>
    </>
  );
}

export default App;
