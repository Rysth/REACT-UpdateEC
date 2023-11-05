import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function Badge({ classList, imageClassList, imageSource }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 1.5, type: 'spring' }}
      className={`absolute rounded-xl backdrop-blur-2xl backdrop-brightness-200 ${classList}`}
    >
      <img
        className={`mx-auto p-4 md:p-5 saturate-200 rounded-xl object-contain ${imageClassList}`}
        src={imageSource}
        alt={imageSource}
      />
    </motion.div>
  );
}

Badge.propTypes = {
  classList: PropTypes.string.isRequired,
  imageClassList: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default Badge;
