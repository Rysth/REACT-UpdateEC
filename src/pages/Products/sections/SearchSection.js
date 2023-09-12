import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../../../redux/products/productsSlice';
import Product from '../../../components/Product/Product';
import Button from '../../../components/Buttons/Buttons';

function SearchSection({ filteredArray, categoriesArray }) {
  const dispatch = useDispatch();
  const { categorySelected, productsQuantity } = useSelector((store) => store.products);

  const handleFilterByCategory = (ID) => {
    dispatch(productsActions.filterProductsByCategory(ID));
  };

  const handleChange = (e) => {
    const name = e.target.value.toUpperCase();
    dispatch(productsActions.filterProductsByName(name));
  };

  return (
    <div className="">
      <div className="container md:container mx-auto p-4 py-8">
        <form>
          <label htmlFor="search" className="grid gap-3">
            <span className="text-lg md:text-2xl lg:text-4xl text-center lg:text-left text-white">
              Buscar Productos:
            </span>
            <input
              onChange={handleChange}
              placeholder="Escribir..."
              type="text"
              name="search"
              id="search"
              className="p-2 px-4 rounded-full lg:w-[45rem] bg-white"
            />
          </label>
        </form>
        <div className="flex flex-wrap items-center gap-2 my-7 text-white">
          <Button
            text="Todos"
            variant="categoryActive"
            onClickFunc={() => {
              handleFilterByCategory(5);
            }}
          />
          {categoriesArray.map((category) => (
            <Button
              key={category.id}
              text={category.attributes.name}
              variant="category"
              onClickFunc={() => {
                handleFilterByCategory(category.id);
              }}
            />
          ))}
        </div>
        <h3 className="text-xl text-center text-white">{`${categorySelected} (${productsQuantity})`}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 py-10 gap-x-6 gap-y-1">
          {filteredArray.map((product) => (
            <Product
              key={product.id}
              imageSource={product.attributes.image.data.attributes.formats.medium.url}
              title={product.attributes.name}
              price={product.attributes.values.price}
              discount={product.attributes.values.originalPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

SearchSection.propTypes = {
  filteredArray: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  categoriesArray: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default SearchSection;
