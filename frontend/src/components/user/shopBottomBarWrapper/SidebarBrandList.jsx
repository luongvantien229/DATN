import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SidebarBrandList({ onBrandSelect }) {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(
    localStorage.getItem("selectedBrand") || null // Lấy trạng thái từ localStorage khi khởi tạo
  );

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get('/all_brands'); 
        setBrands(response.data.brands || []);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand.id); // Set selected brand ID
    localStorage.setItem("selectedBrand", brand.id);
    onBrandSelect(brand.id); // Pass the selected brand ID to the parent component
  };

  const handleResetClick = () => {
    setSelectedBrand(null); // Reset selected brand
    localStorage.removeItem("selectedBrand");
    onBrandSelect(""); // Pass an empty string to reset the filter
  };

  return (
    <div className="sidebar-widget sidebar-widget-wrap sidebar-widget-padding-1 mb-20">
      <h4 className="sidebar-widget-title">Brands</h4>
      <div className="sidebar-brand-list">
        <ul>
          <li>
            <a 
              onClick={handleResetClick} 
              className={!selectedBrand ? "active" : ""} 
              style={{ cursor: "pointer" }}
            >
              Tất cả thương hiệu
            </a>
          </li>
          {brands.map((brand) => (
            <li key={brand.id}>
              <a 
                onClick={() => handleBrandClick(brand)} 
                className={selectedBrand == brand.id ? "active" : ""} 
                style={{ cursor: "pointer" }}
              >
                {brand.name} <span>({brand.products_count})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
