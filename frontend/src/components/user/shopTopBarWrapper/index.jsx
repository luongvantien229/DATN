import React, { useState, useEffect, use } from "react";
import axios from "axios";
import Product from "./Product";
import Pagination from "../pagination";
import SidebarBrandList from "../shopBottomBarWrapper/SidebarBrandList";
import SidebarCategoriesList from "../shopBottomBarWrapper/SidebarCategoriesList";
import PriceFilter from "../shopBottomBarWrapper/PriceFilter";
import SlidebarProductContent from "../shopBottomBarWrapper/SlidebarProductContent";
import { useLocation } from "react-router-dom";

export default function Index() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sold = queryParams.get("sold");
  const category = Number(queryParams.get("category"));
  const favorite = queryParams.get("favorite");
  const brand = queryParams.get("brand");
  const view = queryParams.get("view");
  const allBrand = queryParams.get("allBrand");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    brand_id: "",
    category_id: "",
    sold: "",
    favorite: "",
    price: "",
    sort_by: "",
    view: "",
  });
  console.log("🚀 ~ Index ~ filters:", filters);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  // Fetch all categories
  const [soldDesc, setSoldDesc] = useState([]);
  const fetchSoldDesc = async () => {
    try {
      const response = await axios.get("/get_products_sold_most_all");
      setSoldDesc(response.data || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const [favoriteDesc, setFavoriteDesc] = useState([]);
  const fetchFavoriteDesc = async () => {
    try {
      const response = await axios.get("/get_products_favorite_most");
      setFavoriteDesc(response.data || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const [viewDesc, setViewDesc] = useState([]);
  const fetchViewDesc = async () => {
    try {
      const response = await axios.get("/get_products_view_most_all");
      setViewDesc(response.data || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    if (view) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        view: view, // Gán giá trị view từ query vào filters
      }));
      fetchProducts();
    }
  }, [view]);
  useEffect(() => {
    if (allBrand) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        brand_id: "", // Gán giá trị brand từ query vào filters
      }));
      localStorage.setItem("selectedBrand", "");
      fetchProducts();
    }
  }, [allBrand]);

  useEffect(() => {
    if (brand) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        brand_id: brand, // Gán giá trị brand từ query vào filters
      }));
      localStorage.setItem("selectedBrand", brand);
      fetchProducts();
    }
  }, [brand]);

  useEffect(() => {
    if (category) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        category_id: category, // Gán giá trị category từ query vào filters
      }));
      localStorage.setItem("selectedCategory", category);
      fetchProducts();
    }
  }, [category]);
  useEffect(() => {
    if (sold) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        sold: sold, // Gán giá trị sold từ query vào filters
      }));
      fetchProducts();
    }
  }, [sold]);
  useEffect(() => {
    if (favorite) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        favorite: favorite, // Gán giá trị sold từ query vào filters
      }));
      fetchProducts();
    }
  }, [favorite]);
  useEffect(() => {
    fetchProducts();
  }, [filters, currentPage]);
  useEffect(() => {
    fetchSoldDesc();
    fetchFavoriteDesc();
    fetchViewDesc();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/filter", {
        params: { ...filters, page: currentPage },
      });
      setProducts(response.data.products.data);
      setTotalPages(response.data.pagination.last_page);
      setTotalProducts(response.data.pagination.total); // Update total products count
      setError(null); // Clear error on success
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  // Get all products sorted by sold desc
  const handleSoldSelect = () => {
    setFilters((prev) => ({ ...prev, sold: "desc" }));
    setCurrentPage(1); // Reset to the first page when the sold filter changes
  };
  // Get all products sorted by favprite desc
  const handleFavoriteSelect = () => {
    setFilters((prev) => ({ ...prev, favorite: "desc" }));
    setCurrentPage(1); // Reset to the first page when the favorite filter changes
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value, sold: "", favorite: "", view: "" }));
    setCurrentPage(1); // Reset to the first page when filters change
  };

  const handleCategorySelect = (categoryId) => {
    setFilters((prev) => ({
      ...prev,
      category_id: categoryId,
      sold: "",
      favorite: "",
      view: "",
    }));
    setCurrentPage(1);
  };

  const handleBrandSelect = (brandId) => {
    setFilters((prev) => ({
      ...prev,
      brand_id: brandId,
      sold: "",
      favorite: "",
      view: "",
    }));
    setCurrentPage(1); // Reset to the first page when the brand filter changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page); // Update the current page
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value); // Update the selected value in state
    handleFilterChange(value); // Call the parent's filter change function
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {error}</p>;

  return (
    <>
      <div className="col-lg-9">
        <div className="shop-topbar-wrapper">
          <div className="totall-product">
            <p>
              Chúng tôi đã tìm thấy <span>{totalProducts}</span> sản phẩm có sẵn
              cho bạn
            </p>
          </div>
          <div className="sort-by-product-area">
            <div className="sort-by-product-wrap">
              <div className="sort-by">
                <span>
                  <i className="far fa-align-left"></i>Sắp xếp theo:
                </span>
              </div>
              <div className="sort-by-dropdown-wrap">
                <select
                  name="sort_by"
                  onChange={handleFilterChange}
                  value={filters.sort_by}
                >
                  <option value="default">Mặc định</option>
                  <option value="Sort_A_Z">Sắp xếp A-Z</option>
                  <option value="Sort_Z_A">Sắp xếp Z-A</option>
                  <option value="newest">Mới nhất</option>
                  <option value="ASC">Giá: thấp đến cao</option>
                  <option value="DESC">Giá: cao đến thấp</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-bottom-area">
          {loading && <p>Loading products...</p>}
          {error && <p className="error-message">{error}</p>}
          {!loading && !products.length && (
            <p>No products found for your filters.</p>
          )}
          <div className="row">
            {filters.sold
              ? soldDesc.map((product, index) => (
                  <Product key={index} product={product} />
                ))
              : filters.favorite
              ? favoriteDesc.map((product, index) => (
                  <Product key={index} product={product} />
                ))
              : filters.view
              ? viewDesc.map((product, index) => (
                  <Product key={index} product={product} />
                ))
              : products.map((product, index) => (
                  <Product key={index} product={product} />
                ))}
          </div>
          {totalProducts > 0 && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
      <div className="col-lg-3">
        <div className="sidebar-wrapper sidebar-wrapper-mr1">
          <SidebarCategoriesList onCategorySelect={handleCategorySelect} />
          <SidebarBrandList onBrandSelect={handleBrandSelect} />{" "}
          {/* Pass handleBrandSelect here */}
          {/* <PriceFilter /> */}
          {/* Uncomment if needed */}
          {/* <SidebarRatingList /> */}
          {/* <SidebarColorList /> */}
          {/* <SlidebarProductContent /> */}
        </div>
      </div>
    </>
  );
}
