import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

function Pagination({ quantity, total, handlePaginate }) {
  const totalPages = Math.ceil(total / quantity);

  return (
    <div className="absolute bottom-0 left-0 w-full ">
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={(data) => handlePaginate(data.selected + 1)}
        className="container flex items-center justify-center max-w-screen-lg gap-1 mx-auto text-white"
        previousLabel=""
        nextLabel=""
        pageLinkClassName="w-10 h-10 grid place-items-center outline outline-1 outline-gray-500 font-semibold"
        activeClassName="bg-purple-700 outline-transparent"
      />
    </div>
  );
}

Pagination.propTypes = {
  quantity: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  handlePaginate: PropTypes.func.isRequired,
};

export default Pagination;
