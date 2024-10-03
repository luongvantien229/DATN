import React from "react";

export default function SidebarCategoriesList() {
  return (
    <div className="sidebar-widget sidebar-widget-wrap sidebar-widget-padding-1 mb-20">
      <h4 className="sidebar-widget-title">Danh Mục</h4>
      <div className="sidebar-categories-list">
        <ul>
          <li>
            <a href="shop.html">Phụ Kiện</a>
            <ul>
              <li>
                <a href="shop.html">Chưa Phân Loại</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="shop.html">Huyết Áp</a>
          </li>
          <li>
            <a href="shop.html">Khẩu Trang</a>
          </li>
          <li>
            <a href="shop.html">Dụng Cụ Y Tế Gia Đình</a>
          </li>
          <li>
            <a href="shop.html">Thiết Bị Bệnh Viện</a>
          </li>
          <li>
            <a href="shop.html">Cuộc Sống Tự Lập</a>
          </li>
          <li>
            <a href="shop.html">Cá Nhân</a>
          </li>
          <li>
            <a href="shop.html">Hiệu Thuốc</a>
          </li>
          <li>  
            <a href="shop.html">Phẫu Thuật</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
