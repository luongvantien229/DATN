import React from "react";
import './style.scss';
import { Link } from "react-router-dom";


export default function BannerArenaLeft({ item }) {
  return (
    <div className="col-lg-8">
      <div className="banner-wrap wow tmFadeInUp mb-30 bg-img">
        <div className="banner-img banner-img-zoom">
          <Link to={item.banner_link ? item.banner_link : '/'}> 
            <img src={item.image_path} alt=""/>
          </Link>
        </div>
      </div>
    </div>
  );
}
