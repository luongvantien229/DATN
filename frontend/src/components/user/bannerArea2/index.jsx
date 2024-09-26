import React from "react";
import BannerArenaLeft from "./BannerAreaLeft";
import BannerArenaRight from "./BannerAreaRight";

export default function Index() {

  return (
    <div className="banner-area pb-45">
        <div className="custom-container">
          <div className="row">
            <BannerArenaLeft />
            <BannerArenaRight />
          </div>
        </div>
      </div>
  );
}
