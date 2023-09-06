import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export function ButtonPrimary({ text }) {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.25 }}
      transition={{ ease: 'linear', type: 'spring', duration: 0.5 }}
      type="button"
      className="hidden md:block border-2 py-2 px-5 md:px-8 rounded-full md:hover:text-black md:hover:border-transparent md:hover:bg-[var(--CL-primary-cyan)] text-xs md:text-base"
    >
      {text}
    </motion.button>
  );
}

export function ButtonSecondary({ text }) {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.25 }}
      transition={{ ease: 'linear', type: 'spring', duration: 0.5 }}
      type="button"
      className="border-2 py-2 px-8 bg-[var(--CL-neutral-white)] text-black rounded-full md:hover:text-black md:hover:border-transparent md:hover:bg-[var(--CL-primary-cyan)] text-xs md:text-base"
    >
      {text}
    </motion.button>
  );
}

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
};

ButtonSecondary.propTypes = {
  text: PropTypes.string.isRequired,
};
