import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { contactURL } from '../../utils/NavigationUtils';

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
    <motion.a
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      href={contactURL}
      target="_blank"
    >
      <picture className="rounded-lg p-1 md:p-2 bg-purple-700">
        <img
          className="rounded-lg object-contain"
          src={`http://localhost:1337${imageSource}`}
          alt="product"
        />
      </picture>
      <div className="py-2">
        <h3 className="text-xs md:text-base text-white truncate font-bold">{title}</h3>
        <div className="flex items-center gap-2 text-lg md:text-2xl">
          <p className="text-white font-bold ff-nunito">{`$${price}`}</p>
          <p className="text-gray-500 line-through">{`$${discount}`}</p>
        </div>
      </div>
    </motion.a>
  );
}

Product.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
};

export default Product;
