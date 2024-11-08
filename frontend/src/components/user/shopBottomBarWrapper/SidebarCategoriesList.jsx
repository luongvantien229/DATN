import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SidebarCategoriesList({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/all_categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    onCategorySelect(categoryId);
  };

  const handleResetClick = () => {
    setSelectedCategory(null);
    onCategorySelect(""); // Reset category filter
  };

  const renderCategories = (categories, parentId = 0) => {
    return categories
      .filter((category) => category.parent_id === parentId)
      .map((category) => (
        <li key={category.id}>
          <a
            onClick={() => handleCategoryClick(category.id)}
            className={selectedCategory === category.id ? "active" : ""}
          >
            {category.name}
          </a>
          <ul>{renderCategories(categories, category.id)}</ul>
        </li>
      ));
  };

  return (
    <div className="sidebar-widget sidebar-widget-wrap sidebar-widget-padding-1 mb-20">
      <h4 className="sidebar-widget-title">Danh Mục</h4>
      <div className="sidebar-categories-list">
        <ul>
          <li>
            <a onClick={handleResetClick} className={!selectedCategory ? "active" : ""}>
              Tất cả loại sản phẩm
            </a>
          </li>
          {renderCategories(categories)}
        </ul>
      </div>
    </div>
  );
}
