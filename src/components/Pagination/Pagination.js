import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Pagination({ quantity, total, handlePaginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / quantity); i += 1) {
    pageNumbers.push(i);
  }

  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (page) => {
    setActivePage(page);
    handlePaginate(page);
  };

  return (
    <div className="bg-white">
      <p>{`Active Page: ${activePage}`}</p>
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className="w-10 h-10 bg-white">
            <button type="button" onClick={() => handlePageClick(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Pagination.propTypes = {
  quantity: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  handlePaginate: PropTypes.func.isRequired,
};

export default Pagination;
