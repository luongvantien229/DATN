import React from "react";
import CategoriesArena1 from "./CategoriesArea1";
import useSlick from "../../../hooks/user/slick";

export default function Index() {
  const { categoriesArena1 } = useSlick();

  return (
    <div className="categories-area pb-70">
      <div className="custom-container">
        <div className="section-title-1 mb-40">
          <h2>Shop by categories</h2>
        </div>
        <div ref={categoriesArena1}  className="categories-slider-1 wow tmFadeInUp">
            {[...Array(6)].map((_, index) => (
                <CategoriesArena1 key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
