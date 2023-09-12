import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function Product(
  /* prettier-ignore */
  {
    imageSource,
    title,
    price,
    discount,
  },
) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="cursor-pointer"
    >
      <picture className="rounded-lg p-2 bg-purple-600">
        <img
          className="rounded-lg object-contain"
          src={`http://localhost:1337${imageSource}`}
          alt="product"
        />
      </picture>
      <div className="py-2">
        <h3 className="text-xs md:text-base text-white truncate font-bold">{title}</h3>
        <div className="flex items-center gap-2 text-lg md:text-2xl">
          <p className="text-white">{`$${price}`}</p>
          <p className="text-gray-500 line-through">{`$${discount}`}</p>
        </div>
      </div>
    </motion.div>
  );
}

Product.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
};

export default Product;
