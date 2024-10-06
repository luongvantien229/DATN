import React, { useEffect, useState } from "react";
import CategoriesArena1 from "./CategoriesArea1";
import useSlick from "../../../hooks/user/slick";

export default function Index() {
  const { categoriesArena1 } = useSlick();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh mục
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/all_categories");
        const data = await response.json();
        setCategories(data.categories); // Giả sử data.categories chứa danh sách danh mục
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="categories-area pb-70">
      <div className="custom-container">
        <div className="section-title-1 mb-40">
          <h2>Danh mục nổi bật</h2>
        </div>
        <div ref={categoriesArena1} className="categories-slider-1 wow tmFadeInUp d-flex w-100" >
          {/* Render 6 danh mục đầu tiên */}
          {categories.slice(0, 6).map((category) => (
            <CategoriesArena1 key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
