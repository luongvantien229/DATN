import React from "react";
import { useLocation } from "react-router-dom";
import BrandLogoArea from "./BrandLogoArea"; // Đảm bảo bạn đang import đúng component
import useSlick from "../../../hooks/user/slick";

export default function Index() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';

  // Đổi tên biến khi lấy từ useSlick để tránh xung đột
  const { BrandLogoSettings } = useSlick();

  return (
    <div className="brand-logo-area pb-35">
      <div className="custom-container">
        {!isAboutPage && isHomePage && (
          <div className="section-title-1 wow tmFadeInUp mb-30">
            <h2>Shop by brands</h2>
          </div>
        )}
        {/* <div className="row align-items-center wow tmFadeInUp">
          {[...Array(12)].map((_, index) => (
            <BrandLogoArea key={index} />
          ))}
        </div> */}
        <BrandLogoArea ref={BrandLogoSettings} />
      </div>
    </div>
  );
}
