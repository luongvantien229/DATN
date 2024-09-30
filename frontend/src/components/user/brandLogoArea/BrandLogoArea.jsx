import React, { useState, useEffect } from "react";

const BrandLogoArea = () => {
  // Dữ liệu JSON chứa các logo thương hiệu
  const brandLogosData = [
    {
      id: 1,
      logo: "assets/images/brand-logo/brand-logo-1.png",
      link: "shop.html",
    },
    {
      id: 2,
      logo: "assets/images/brand-logo/brand-logo-2.png",
      link: "shop.html",
    },
    {
      id: 3,
      logo: "assets/images/brand-logo/brand-logo-3.png",
      link: "shop.html",
    },
    {
      id: 4,
      logo: "assets/images/brand-logo/brand-logo-4.png",
      link: "shop.html",
    },
    {
      id: 5,
      logo: "assets/images/brand-logo/brand-logo-5.png",
      link: "shop.html",
    },
    {
      id: 6,
      logo: "assets/images/brand-logo/brand-logo-6.png",
      link: "shop.html",
    },
    {
      id: 7,
      logo: "assets/images/brand-logo/brand-logo-7.png",
      link: "shop.html",
    },
    {
      id: 8,
      logo: "assets/images/brand-logo/brand-logo-8.png",
      link: "shop.html",
    },
    {
      id: 9,
      logo: "assets/images/brand-logo/brand-logo-9.png",
      link: "shop.html",
    },
    {
      id: 10,
      logo: "assets/images/brand-logo/brand-logo-10.png",
      link: "shop.html",
    },
    {
      id: 11,
      logo: "assets/images/brand-logo/brand-logo-11.png",
      link: "shop.html",
    },
    {
      id: 12,
      logo: "assets/images/brand-logo/brand-logo-12.png",
      link: "shop.html",
    },
  ];

  const [brandLogos, setBrandLogos] = useState([]);

  // Lấy dữ liệu logo khi component được mount
  useEffect(() => {
    if (brandLogos.length === 0) {
      setBrandLogos(brandLogosData.slice(0, 5)); // Lấy 5 logo thương hiệu
    }
  }, [brandLogos]);

  return (
    <div className="row align-items-center wow tmFadeInUp">
      {brandLogosData.map((logoData, index) => (
        <div
          className="col-lg-2 col-md-4 col-6 col-sm-4"
          key={logoData.id} {...logoData}
        >
          <div className="single-brand-logo mb-30">
            <a href={logoData.link}>
              <img src={logoData.logo} alt={`Brand ${logoData.id}`} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandLogoArea;
