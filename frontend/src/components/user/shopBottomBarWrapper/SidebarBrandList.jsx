import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SidebarBrandList() {
  const [allBrands, setAllBrands] = useState([]);

  const fetchAllBrands = async () => {
    try {
      const response = await axios.get('/all_brands');
      setAllBrands(response.data.brands || []);
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  useEffect(() => {
    fetchAllBrands(); 
  }, []);

  return (
    <div className="sidebar-widget sidebar-widget-wrap sidebar-widget-padding-1 mb-20">
        <h4 className="sidebar-widget-title">Brands </h4>
        <div className="sidebar-brand-list">
          <ul>
          {allBrands.map((brand) => (
            <li key={brand.id}>
              <a href={`/${brand.slug}`}>{brand.name}</a> {/* Đường dẫn đến trang thương hiệu */}
            </li>
          ))}
          </ul>
        </div>
      </div>
  );
}
