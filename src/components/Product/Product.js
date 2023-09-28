import React from 'react';
import PropTypes from 'prop-types';

function Product(
  /* prettier-ignore */
  {
    imageSource,
    title,
    price,
    link,
  },
) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="transition-transform duration-100 lg:hover:scale-105"
    >
      <picture className="p-1 bg-purple-700 rounded-lg md:p-2">
        <img
          className="object-contain rounded-lg"
          src={`${imageSource}`}
          alt="product"
        />
      </picture>
      <div className="py-2">
        <h3 className="text-xs font-bold text-white truncate md:text-sm">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-lg md:text-xl">
          <p className="font-bold text-white ff-nunito">{`$${price}`}</p>
        </div>
      </div>
    </a>
  );
}

Product.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default Product;
