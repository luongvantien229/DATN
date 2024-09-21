import React from "react";
import { useLocation } from "react-router-dom";
import BrandLogoArea from "./BrandLogoArea";

export default function Index() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';

  return (
    <div className="brand-logo-area pb-35">
      <div className="custom-container">
        {!isAboutPage && isHomePage && (
          <div className="section-title-1 wow tmFadeInUp mb-30">
            <h2>Shop by brands</h2>
          </div>
        )}
        <div className="row align-items-center wow tmFadeInUp">
          {[...Array(12)].map((_, index) => (
            <BrandLogoArea key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
