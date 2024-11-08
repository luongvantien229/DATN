import React from 'react';

export default function BannerArena1({ item }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
      <div className="banner-wrap wow tmFadeInUp mb-30">
        <div className="banner-img banner-img-zoom">
          <a href="product-details.html">
            <img src={item.image_path} alt="Banner" />
          </a>
        </div>
      </div>
    </div>
  );
}
