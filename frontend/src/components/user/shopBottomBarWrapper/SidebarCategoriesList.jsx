import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SidebarCategoriesList({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  console.log("🚀 ~ SidebarCategoriesList ~ categories:", categories[0])
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || null // Lấy giá trị từ localStorage
  );
  const [expandedCategories, setExpandedCategories] = useState({}); // To track expanded state of categories

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/all_categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    localStorage.setItem("selectedCategory", categoryId); // Lưu vào localStorage
    onCategorySelect(categoryId);
  };

  const handleResetClick = () => {
    setSelectedCategory(null);
    localStorage.removeItem("selectedCategory"); // Xóa khỏi localStorage
    onCategorySelect(""); // Reset category filter
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const renderCategories = (categories, parentId = 0) => {
    return categories
      .filter((category) => category.parent_id === parentId)
      .map((category) => (
        <li key={category.id}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <a
              onClick={() => handleCategoryClick(category.id)}
              className={selectedCategory === category.id ? "active" : ""}
              style={{ cursor: "pointer" }}
            >
              {category.name}
              <span>({category.products_count})</span>
            </a>
            {categories.some((cat) => cat.parent_id === category.id) && (
              <button
                onClick={() => toggleCategory(category.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {expandedCategories[category.id] ? "▼" : "▶"}
              </button>
            )}
          </div>
          {expandedCategories[category.id] && (
            <ul>{renderCategories(categories, category.id)}</ul>
          )}
        </li>
      ));
  };

  return (
    <div className="sidebar-widget sidebar-widget-wrap sidebar-widget-padding-1 mb-20">
      <h4 className="sidebar-widget-title">Danh Mục</h4>
      <div className="sidebar-categories-list">
        <div className="sidebar-categories">
          <ul style={{ listStyle: "none"}}>
            <li>
              <a
                onClick={handleResetClick}
                className={!selectedCategory ? "active" : ""}
                style={{ cursor: "pointer" }}
              >
                Tất cả loại sản phẩm
              </a>
            </li>
            {renderCategories(categories)}
          </ul>
        </div>
      </div>
    </div>
  );
}
