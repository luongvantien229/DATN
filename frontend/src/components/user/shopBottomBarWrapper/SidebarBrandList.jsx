import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SidebarBrandList({ onBrandSelect }) {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/all_brands'); 
        setBrands(response.data.brands || []);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  const handleBrandClick = (brand) => {
    onBrandSelect(brand.id); // Pass the selected brand ID to the parent component
  };

  const handleResetClick = () => {
    onBrandSelect(""); // Pass an empty string to reset the filter
  };

  return (
    <div className="sidebar-widget sidebar-widget-wrap sidebar-widget-padding-1 mb-20">
      <h4 className="sidebar-widget-title">Brands</h4>
      <div className="sidebar-brand-list">
        <ul>
          <li>
            <a onClick={handleResetClick} style={{ cursor: "pointer" }}>
              tất cả thương hiệu
            </a>
          </li>
          {brands.map((brand) => (
            <li key={brand.id}>
              <a onClick={() => handleBrandClick(brand)} style={{ cursor: "pointer" }}>
                {brand.name} <span>({brand.products_count})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
