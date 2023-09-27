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
    <div className="absolute bottom-0 left-0 w-full">
      <p className="hidden text-white text-end">{`Active Page: ${activePage}`}</p>
      <ul className="flex justify-center gap-2">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="grid rounded bg-violet-600 md:active:scale-90 md:hover:bg-white place-items-center"
          >
            <button
              type="button"
              className="w-10 h-10 font-bold"
              onClick={() => handlePageClick(number)}
            >
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
