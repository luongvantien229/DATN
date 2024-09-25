import React, { forwardRef, useImperativeHandle, useState, useEffect } from "react";
const CategoriesArena1 = forwardRef((props, ref) => {
  const categoriesData = [
    {
      id: 1,
      name: "Hospital Equipment",
      image: "assets/images/product/categorie-1.jpg",
    },
    {
      id: 2,
      name: "Personal Care",
      image: "assets/images/product/categorie-2.png",
    },
    {
      id: 3,
      name: "Health Products",
      image: "assets/images/product/categorie-3.jpg",
    },
    {
      id: 4,
      name: "Home Supplies",
      image: "assets/images/product/categorie-4.jpg",
    },
    {
      id: 5,
      name: "Fitness Gear",
      image: "assets/images/product/categorie-5.jpg",
    },
    {
      id: 6,
      name: "Beauty Products",
      image: "assets/images/product/categorie-6.jpg",
    },
  ];

  const [categories, setCategories] = useState([]);

  // Chỉ lấy tất cả danh mục từ danh sách
  useEffect(() => {
    if (categories.length === 0) {
      setCategories(categoriesData); // Lấy tất cả danh mục
    }
  }, [categories]);

  return (
    <div className="categories-container d-flex">
      {categories.map((category) => (
        <div ref={ref} className="categories-slider-1 wow tmFadeInUp" key={category.id}>
          <div className="product-plr-1">
            <div className="categories-wrap">
              <div className="categories-img categories-img-zoom">
                <a href="shop.html">
                  <img src={category.image} alt={category.name} />
                </a>
              </div>
              <div className="categories-content text-center">
                <h3>
                  <a href="shop.html">{category.name}</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default CategoriesArena1;
