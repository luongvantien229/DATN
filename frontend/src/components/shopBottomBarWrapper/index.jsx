import React from "react";
import SidebarCategoriesList from "./SidebarCategoriesList";
import SidebarBrandList from "./SidebarBrandList";
import PriceFilter from "./PriceFilter";
import SidebarRatingList from "./SidebarRatingList";
import SidebarColorList from "./SidebarColorList";
import SlidebarProductContent from "./SlidebarProductContent";

export default function Index() {
  return (
    <div className="col-lg-3">
      <div className="sidebar-wrapper sidebar-wrapper-mr1">
        <SidebarCategoriesList />
        <SidebarBrandList />
        <PriceFilter />
        <SidebarRatingList />
        <SidebarColorList />
        <SlidebarProductContent />
      </div>
    </div>
  );
}
