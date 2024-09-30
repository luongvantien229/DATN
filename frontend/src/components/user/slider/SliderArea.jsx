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
          {/* <div className="hero-slider-content-1 slider-animated-1">
            <h1 className="animated">COVID-19 Prevention <br />& Care Supplies</h1>
            <p className="animated">
              Collection of products that help you to protect you and your beloved. Take a good deal TODAY
            </p>
            <div className="btn-style-1">
              <Link className="animated" to="/product-details">Buy now</Link>
            </div>
          </div>
          <div className="slider-product-price slider-product-position1 slider-animated-1 animated">
            <h3><span>From</span>$5*</h3>
          </div> */}
        </div>

        {/* Slider 2 */}
        <div
          className="single-hero-slider single-animation-wrap slider-height-1 custom-d-flex custom-align-item-end bg-img"
          style={{ backgroundImage: "url(assets/images/banner/2.png)" }}
        >
          {/* <div className="hero-slider-content-1 slider-content-1-black slider-animated-1">
            <h4 className="animated">Best selling</h4>
            <h1 className="animated">COVID-19 Prevention <br />& Care Supplies</h1>
            <p className="animated">
              Backed by experience since 1950. One-stop Source for all your Hospital & Medical Needs.
            </p>
            <div className="btn-style-1">
              <Link className="animated" to="/product-details">Buy now</Link>
            </div>
          </div>
          <div className="slider-product-price slider-product-position1 slider-animated-1 animated">
            <h3><span>From</span>$5*</h3>
          </div> */}
        </div>

        {/* Slider 3 */}
        <div
          className="single-hero-slider single-animation-wrap slider-height-1 custom-d-flex custom-align-item-end bg-img"
          style={{ backgroundImage: "url(assets/images/banner/1.png)" }}
        >
          {/* <div className="hero-slider-content-1 slider-animated-1">
            <div className="slider-product-offer-wrap animated">
              <div className="slider-product-offer">
                <span className="yellow">hot</span>
                <span className="red">-28%</span>
              </div>
              <p>3M 6000 Series</p>
            </div>
            <h1 className="animated">Fitted Face Mask N95<br /> Group Pack of 3</h1>
            <p className="animated">
              3M high-efficiency electrostatic filter cotton, non-oily particle filtration efficiency ≥ 90%
            </p>
            <div className="btn-style-1">
              <Link className="animated" to="/product-details">Buy now</Link>
            </div>
          </div>
          <div className="slider-product-price slider-product-position2 slider-animated-1 animated">
            <h3><span>Only </span>$18</h3>
          </div> */}
        </div>
      </div>


    </div>
  );
}
