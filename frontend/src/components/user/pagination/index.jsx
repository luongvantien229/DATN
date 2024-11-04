import React from 'react';
import Style from './Style.scss';

const Pagination = ({ currentPage, totalProducts, productsPerPage, paginate }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  
  const handleClick = (page) => {
    if (page !== currentPage) {
      paginate(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i}>
          <button 
            onClick={() => handleClick(i)} 
            className={currentPage === i ? 'active' : ''}
          >
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav className="pagination">
      <ul>
        {renderPageNumbers()}
        <li>
          <button 
            onClick={() => handleClick(currentPage + 1)} 
            disabled={currentPage === totalPages}
            className="next"
          >
            <i className="far fa-angle-double-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
