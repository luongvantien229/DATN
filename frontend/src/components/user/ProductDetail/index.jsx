
import React from "react";
import ProductDetail from "./ProductDetail";
import Information from "./Information";
export default function Index() {
  return (
    <div className="product-details-area padding-30-row-col pt-75 pb-75">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="product-details-wrap">
              <ProductDetail />
              <Information />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

