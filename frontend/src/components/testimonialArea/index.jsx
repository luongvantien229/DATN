import React from "react";
import { useLocation } from 'react-router-dom'; // Thêm import useLocation
import useSlick from '../../hooks/slick';
import TestimonialArea1 from "./TestimonialArea1";
import TestimonialTitle1 from "./TestimonialTitle1";
import TestimonialTitle2 from "./TestimonialTitle2";

export default function Index() {
  const { testimonialArea1, testimonialArea2 } = useSlick();
  const location = useLocation(); 

  let TestimonialTitle;
  let TestimonialClass;
  let TestimonialArea;
  let TestimonialSlider
  let TestimonialContainer;
  switch (location.pathname) {
    case '/':
      TestimonialTitle = TestimonialTitle1
      TestimonialArea = testimonialArea1
      TestimonialContainer = 'custom-container';
      TestimonialClass = 'testimonial-area pt-65 pb-75';
      TestimonialSlider = 'testimonial-active-1 wow tmFadeInUp nav-style-2 nav-style-2-modify-1';

      break;
    case '/about':
      TestimonialTitle = TestimonialTitle2; 
      TestimonialArea = testimonialArea2;
      TestimonialContainer = 'container';
      TestimonialClass = 'testimonial-area pt-65 pb-65'; 
      TestimonialSlider = 'testimonial-active-3 nav-style-2-modify-1 dot-style-1 dot-style-1-center dot-style-1-mt1 wow tmFadeInUp';
      break;
    default:
      TestimonialTitle = TestimonialTitle1; 
      TestimonialArea = testimonialArea1;
      TestimonialContainer = 'custom-container';
      TestimonialClass = 'testimonial-area pt-65 pb-75';
      TestimonialSlider = 'testimonial-active-1 wow tmFadeInUp nav-style-2 nav-style-2-modify-1';
      break;
  }

  return (
    <div className={TestimonialClass}>
      <div className={TestimonialContainer}>
        <TestimonialTitle />
        <div ref={TestimonialArea} className={TestimonialSlider}>
          {[...Array(5)].map((_, index) => (
            <TestimonialArea1 key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
