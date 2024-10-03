import React from "react";
import useSlick from "../../../hooks/user/slick";
export default function ProductDetail_Left() {
  const { proDecBigImgSlider } = useSlick();
  const { proDecSmallImgSlider } = useSlick();
  return (
    <div className="col-lg-6 col-md-6">
        <div className="product-details-slider-wrap">
          <div className="pro-dec-big-img-slider" ref={proDecBigImgSlider}>
            <div className="single-big-img-style">
              <div className="pro-details-big-img">
                <a
                  className="img-popup"
                  href="assets/images/product-details/pro-details-b-large-1.jpg"
                >
                  <img
                    src="assets/images/product-details/pro-details-large-1.jpg"
                    alt="Sản phẩm" 
                  />
                </a>
              </div>
              <div className="pro-details-badges product-badges-position">
                <span className="red">Giảm giá!</span>
              </div>
            </div>
            <div className="single-big-img-style">
              <div className="pro-details-big-img">
                <a
                  className="img-popup"
                  href="assets/images/product-details/pro-details-b-large-2.jpg"
                >
                  <img
                    src="assets/images/product-details/pro-details-large-2.jpg"
                    alt="Sản phẩm"
                  />
                </a>
              </div>
              <div className="pro-details-badges product-badges-position">
                <span className="red">Giảm giá!</span>
              </div>
            </div>
            <div className="single-big-img-style">
              <div className="pro-details-big-img">
                <a
                  className="img-popup"
                  href="assets/images/product-details/pro-details-b-large-3.jpg"
                >
                  <img
                    src="assets/images/product-details/pro-details-large-3.jpg"
                    alt="Sản phẩm"
                  />
                </a>
              </div>
              <div className="pro-details-badges product-badges-position">
                <span className="red">Giảm giá!</span>
              </div>
            </div>
            <div className="single-big-img-style">
              <div className="pro-details-big-img">
                <a
                  className="img-popup"
                  href="assets/images/product-details/pro-details-b-large-4.jpg"
                >
                  <img
                    src="assets/images/product-details/pro-details-large-4.jpg"
                    alt="Sản phẩm"
                  />
                </a>
              </div>
              <div className="pro-details-badges product-badges-position">
                <span className="red">Giảm giá!</span>
              </div>
            </div>
            <div className="single-big-img-style">
              <div className="pro-details-big-img">
                <a
                  className="img-popup"
                  href="assets/images/product-details/pro-details-b-large-2.jpg"
                >
                  <img
                    src="assets/images/product-details/pro-details-large-2.jpg"
                    alt="Sản phẩm"
                  />
                </a>
              </div>
              <div className="pro-details-badges product-badges-position">
                <span className="red">Giảm giá!</span>
              </div>
            </div>
          </div>
          <div className="product-dec-slider-small product-dec-small-style1" ref={proDecSmallImgSlider}>
            <div className="product-dec-small active">
              <img
                src="assets/images/product-details/pro-details-small-1.jpg"
                alt="Sản phẩm nhỏ"
              />
            </div>
            <div className="product-dec-small">
              <img
                src="assets/images/product-details/pro-details-small-2.jpg"
                alt="Sản phẩm nhỏ"
              />
            </div>
            <div className="product-dec-small">
              <img
                src="assets/images/product-details/pro-details-small-3.jpg"
                alt="Sản phẩm nhỏ"
              />
            </div>
            <div className="product-dec-small">
              <img
                src="assets/images/product-details/pro-details-small-4.jpg"
                alt="Sản phẩm nhỏ"
              />
            </div>
            <div className="product-dec-small">
              <img
                src="assets/images/product-details/pro-details-small-2.jpg"
                alt="Sản phẩm nhỏ"
              />
            </div>
          </div>
        </div>
      </div>
  );
}
