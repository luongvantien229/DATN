import React from "react";
import ProductDetail_Left from "./ProductDetail_Left";
import ProductDetail_Right from "./ProductDetail_Right";
export default function ProductDetail() {
  return (
    <div className="product-details-wrap-top">
      <div className="row">
        <ProductDetail_Left />
        <ProductDetail_Right />
      </div>
    </div>
  );
}
