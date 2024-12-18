import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const SliderArena = forwardRef(({ item }, ref) => {
  return (
    <Link to={item.banner_link ? item.banner_link : "/"}>
      <div
        className="single-hero-slider single-animation-wrap slider-height-1 custom-d-flex custom-align-item-end bg-img"
        style={{ backgroundImage: `url(${item.image_path})` }}
      ></div>
    </Link>
  );
});

export default SliderArena;
