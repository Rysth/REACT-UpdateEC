import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../../components/Product/Product';

function SearchSection({ productsArray }) {
  return (
    productsArray && (
      <div className="">
        <div className="container md:container mx-auto p-4 py-8">
          <form action="/">
            <label htmlFor="search" className="grid gap-3">
              <span className="text-lg md:text-2xl lg:text-4xl text-center lg:text-left text-white">
                Buscar Productos:
              </span>
              <input
                placeholder="Escribir..."
                type="text"
                name="search"
                id="search"
                className="p-2 px-4 rounded-full lg:w-[40rem]"
              />
            </label>
          </form>
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 py-10 gap-5">
            {productsArray.map((product) => (
              <Product
                key={product.id}
                imageSource={product.attributes.image.data.attributes.formats.medium.url}
                title={product.attributes.name}
                price={product.attributes.values.price}
                discount={product.attributes.values.originalPrice}
              />
            ))}
          </div>
          z
        </div>
      </div>
    )
  );
}

SearchSection.propTypes = {
  productsArray: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default SearchSection;
