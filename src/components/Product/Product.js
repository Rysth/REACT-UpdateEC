import React from 'react';
import { motion } from 'framer-motion';
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
    <motion.a
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      href={link}
      target="_blank"
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
    </motion.a>
  );
}

Product.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default Product;
