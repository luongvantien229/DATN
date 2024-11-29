import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SidebarCategoriesList({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  console.log("🚀 ~ SidebarCategoriesList ~ categories:", categories[0])
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || null // Lấy giá trị từ localStorage
  );

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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.id);
    localStorage.setItem("selectedCategory", category.id); // Lưu vào localStorage
    onCategorySelect(category.id);
  };

  const handleResetClick = () => {
    setSelectedCategory(null);
    localStorage.removeItem("selectedCategory"); // Xóa khỏi localStorage
    onCategorySelect(""); // Reset category filter
  };

  return (
    <div className="sidebar-widget sidebar-widget-wrap sidebar-widget-padding-1 mb-20">
      <h4 className="sidebar-widget-title">Danh Mục</h4>
      <div className="sidebar-list">
        <div className="sidebar-categories">
          <ul>
            <li>
              <a
                onClick={handleResetClick}
                className={!selectedCategory ? "active" : ""}
              >
                Tất cả loại sản phẩm
              </a>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <a
                  onClick={() => handleCategoryClick(category)}
                  className={selectedCategory == category.id ? "active" : ""}
                  style={{ cursor: "pointer" }}
                >
                  {category.name}
                  {/* <span>({category.products_count})</span> */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
