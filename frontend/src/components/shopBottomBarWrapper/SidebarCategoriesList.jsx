import React from "react";

export default function SidebarCategoriesList() {
  return (
    <div className="sidebar-widget sidebar-widget-wrap sidebar-widget-padding-1 mb-20">
      <h4 className="sidebar-widget-title">Categories </h4>
      <div className="sidebar-categories-list">
        <ul>
          <li>
            <a href="shop.html">Accessories</a>
            <ul>
              <li>
                <a href="shop.html">Uncategorized</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="shop.html">Blood Pressure</a>
          </li>
          <li>
            <a href="shop.html">Facemask </a>
          </li>
          <li>
            <a href="shop.html">Home Medical Supplies </a>
          </li>
          <li>
            <a href="shop.html">Hospital Equipment </a>
          </li>
          <li>
            <a href="shop.html">Independent Living </a>
          </li>
          <li>
            <a href="shop.html">Personal </a>
          </li>
          <li>
            <a href="shop.html">Pharmacy </a>
          </li>
          <li>
            <a href="shop.html">Surgical </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
