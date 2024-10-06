import React, { useState, useEffect } from "react";

const BrandLogoArea = () => {
  const [brandLogos, setBrandLogos] = useState([]); // State để lưu logo thương hiệu
  const apiUrl = "http://127.0.0.1:8000/api/all_brands"; // Địa chỉ API

  // Lấy dữ liệu logo từ API khi component được mount
  useEffect(() => {
    const fetchBrandLogos = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Kiểm tra xem dữ liệu có hợp lệ hay không
        if (data.brands) {
          setBrandLogos(data.brands.slice(0, 12)); // Lấy 12 thương hiệu
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu thương hiệu:", error);
      }
    };

    fetchBrandLogos();
  }, []); // Chỉ chạy một lần khi component được mount

  return (
    <div className="row align-items-center wow tmFadeInUp">
      {brandLogos.map((brand) => (
        <div className="col-lg-2 col-md-4 col-6 col-sm-4" key={brand.id}>
          <div className="single-brand-logo mb-30">
            <a href={`shop.html?brand=${brand.slug}`}>
              <img src={brand.image} alt={brand.name} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandLogoArea;
