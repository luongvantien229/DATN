  import React, { useState, useEffect } from "react";
  import Product from "./Product";
  import Pagination from "../pagination";
  import axios from "axios";
  import SidebarCategoriesList from "../shopBottomBarWrapper/SidebarCategoriesList";
  import Style from "./Style.scss";

  export default function Index() {
    const [allProducts, setAllProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sortOption, setSortOption] = useState("Mặc định");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    console.log("🚀 ~ SidebarCategoriesList ~ categoryId:", categoryId)

    const fetchAllProducts = async () => {
      try {
        const response = await axios.get('/all_products');
        setAllProducts(response.data.products || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    useEffect(() => {
      fetchAllProducts();
    }, []);

    // Filter products by selected category
    const filteredProducts = selectedCategory 
      ? allProducts.filter(product => product.category_id === selectedCategory) 
      : allProducts;

    // Sort filtered products based on selected sort option
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      switch (sortOption) {
        case "Giá: thấp đến cao":
          return a.price - b.price;
        case "Giá: cao đến thấp":
          return b.price - a.price;
        case "Mới nhất":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "Đánh giá trung bình":
          return b.rating - a.rating; // Assuming rating exists
        default:
          return 0; // Default sort (no change)
      }
    });

    // Calculate the current products to display
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page handler
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Handle sorting option change
    const handleSortChange = (option) => {
      setSortOption(option);
      setCurrentPage(1);
      setIsDropdownOpen(false);
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
      setIsDropdownOpen(prevState => !prevState);
    };

    return (
      <div className="col-lg-9">
        <div className="shop-topbar-wrapper">
          <div className="totall-product">
            <p>
              Chúng tôi đã tìm thấy <span>{filteredProducts.length}</span> sản phẩm có sẵn cho bạn
            </p>
          </div>
          <div className="sort-by-product-area">
            <div className="sort-by-product-wrap" onClick={toggleDropdown}>
              <div className="sort-by">
                <span>
                  <i className="far fa-align-left"></i>Sắp xếp theo:
                </span>
              </div>
              <div className="sort-by-dropdown-wrap">
                <span>
                  {sortOption} <i className="far fa-angle-down"></i>
                </span>
              </div>
            </div>
            
          </div>
        </div>

        <div className="shop-bottom-area">
          <div className="row">
            {currentProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <Pagination 
            productsPerPage={productsPerPage} 
            totalProducts={filteredProducts.length} 
            paginate={paginate} 
            currentPage={currentPage}
          />        
        </div>
      </div>
    );
  }
