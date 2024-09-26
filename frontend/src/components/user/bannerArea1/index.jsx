import React from "react";
import BannerArena1 from "./BannerArea1";

export default function Index() {
  return (
    <div className="banner-area pb-40">
      <div className="custom-container">
        <div className="row">
          {[...Array(3)].map((_, index) => (
            <BannerArena1 key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
