
import React from "react";
import ProductDetail_Description from "./ProductDetail_Description";
import ProductDetail_Additional from "./ProductDetail_Additional";
import ProductDetail_Review from "./ProductDetail_Review";
export default function ProductDetail_Right() {
  return (
    <div className="product-details-wrap-bottom">
      <ProductDetail_Description />
      <ProductDetail_Additional />
      <ProductDetail_Review />
    </div>
  );
}

