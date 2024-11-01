import React from 'react';
import { Link } from 'react-router-dom';
import useSlick from '../../../hooks/user/slick';

export default function SliderArena() {
  const { slider } = useSlick();

  return (
    <div>
      <div ref={slider} className="hero-slider-active-1 nav-style-1 nav-style-1-position-1">
        {/* Slider 1 */}
        <div
          className="single-hero-slider single-animation-wrap slider-height-1 custom-d-flex custom-align-item-end bg-img"
          style={{ backgroundImage: "url(assets/images/banner/1.png)" }}
        >
        </div>

        {/* Slider 2 */}
        <div
          className="single-hero-slider single-animation-wrap slider-height-1 custom-d-flex custom-align-item-end bg-img"
          style={{ backgroundImage: "url(assets/images/banner/2.png)" }}
        >
        </div>

        {/* Slider 3 */}
        <div
          className="single-hero-slider single-animation-wrap slider-height-1 custom-d-flex custom-align-item-end bg-img"
          style={{ backgroundImage: "url(assets/images/banner/3.png)" }}
        >
        </div>
      </div>


    </div>
  );
}
