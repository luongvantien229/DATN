import React from "react";
import { Link } from "react-router-dom";

export default function SidebarCategoriesList({ allCategories, setSelectedCategory, selectedCategory }) {
  return (
    <div className="sidebar-widget sidebar-widget-wrap sidebar-widget-padding-1 mb-20">
      <h4 className="sidebar-widget-title">Danh Mục</h4>
      <div className="sidebar-categories-list">
        <ul>
          <li>
            <Link
              to="/shop" 
              className={selectedCategory === null ? "active" : ""}
              onClick={() => setSelectedCategory(null)} // Reset category
            >
              Tất cả sản phẩm
            </Link>
          </li>
          {allCategories.map((category) => (
            <li key={category.id}>
              <a 
                href="#" 
                onClick={() => setSelectedCategory(category.id)} 
                className={selectedCategory === category.id ? "active" : ""}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
