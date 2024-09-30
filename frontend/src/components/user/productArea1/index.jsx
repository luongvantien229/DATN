import React from 'react';
import Countdown from 'react-countdown';
import ProductArena1 from './ProductArea1';
import useSlick from '../../../hooks/user/slick';

export default function Index() {
  const { productArena1 } = useSlick(); // Lấy các ref từ hook

  // Xác định thời gian đếm ngược
  const countdownDate = new Date('2024-09-30T23:59:59').getTime();

  return (
    <div className="product-area pt-80 pb-75">
      <div className="custom-container">
        <div className="product-area-border">
          <div className="section-title-timer-wrap">
            <div className="section-title-1">
              <h2>Ưu Đãi Hàng Ngày</h2>
            </div>
            <div id="timer-1-active" className="timer-style-1">
              <span>End in:</span>
              <Countdown
                date={countdownDate}
                renderer={({ hours, minutes, seconds, completed }) => {
                  if (completed) {
                    return <span>Time's up!</span>;
                  } else {
                    return (
                      <span>
                        {String(hours).padStart(2, '0')}:
                        {String(minutes).padStart(2, '0')}:
                        {String(seconds).padStart(2, '0')}
                      </span>
                    );
                  }
                }}
              />
            </div>
          </div>
          {/* <div className="product-slider-active-1 nav-style-2 product-hm1-mrg" ref={productArena1}>
            {[...Array(8)].map((_, index) => (
              <ProductArena1 key={index} />
            ))}
          </div> */}
          
            <ProductArena1 ref={productArena1} />
        </div>
      </div>
    </div>
  );
}
