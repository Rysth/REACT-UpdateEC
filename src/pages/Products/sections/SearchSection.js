import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../../../redux/products/productsSlice';
import Product from '../../../components/Product/Product';
import Pagination from '../../../components/Pagination/Pagination';

function SearchSection({ filteredArray, categoriesArray }) {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  const { categorySelected, productsQuantity } = useSelector(
    (store) => store.products,
  );

  const returnToFirstPage = () => setCurrentPage(1);

  const handleFilterByCategory = (ID) => {
    dispatch(productsActions.filterProductsByCategory(ID));
    returnToFirstPage();
  };

  const handleChange = (e) => {
    const name = e.target.value.toUpperCase();
    dispatch(productsActions.filterProductsByName(name));
    returnToFirstPage();
  };

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const currentProducts = filteredArray.slice(firstIndex, lastIndex);
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    console.log(categoriesArray);
    console.log(handleFilterByCategory());
  });

  return (
    <div className="min-h-[1150px]  relative">
      <div className="container h-full max-w-screen-xl p-4 py-8 mx-auto">
        <form>
          <label htmlFor="search" className="grid gap-3">
            <span className="text-xl font-bold text-center text-white md:text-2xl lg:text-4xl lg:text-left">
              Buscar Productos:
            </span>
            <input
              onChange={handleChange}
              placeholder="Escribir..."
              type="text"
              name="search"
              id="search"
              className="p-2 px-4 text-sm bg-white rounded-full md:text-base"
            />
          </label>
        </form>
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex flex-wrap items-center gap-2 text-white my-7">
            {/*  <Button
              text="Todos"
              variant="categoryActive"
              onClickFunc={() => handleFilterByCategory(5)}
            />
            {categoriesArray.map((category) => (
              <Button
                key={category.id}
                text={category.attributes.name}
                variant="category"
                onClickFunc={() => handleFilterByCategory(category.id)}
              />
            ))} */}
          </div>
          <h3 className="hidden text-xl text-center text-white">{`${categorySelected} (${productsQuantity})`}</h3>
        </div>

        <div className="grid grid-cols-2 py-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-1">
          {currentProducts.map((product) => (
            <Product
              key={product.id}
              imageSource={
                product.attributes.image.data.attributes.formats.medium.url
              }
              title={product.attributes.name}
              price={product.attributes.values.price}
              link={product.attributes.values.link}
            />
          ))}
        </div>
        <Pagination
          quantity={productsPerPage}
          total={filteredArray.length}
          handlePaginate={handlePagination}
        />
      </div>
    </div>
  );
}

SearchSection.propTypes = {
  filteredArray: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
  categoriesArray: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
};

export default SearchSection;
