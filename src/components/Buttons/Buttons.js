import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Define your button variants with their respective styles
const buttonVariants = {
  primary: {
    className:
      'hidden md:block border-2 py-2 px-5 md:px-8 rounded-full md:hover:text-black md:hover:border-transparent md:hover:bg-[var(--CL-primary-cyan)] text-xs md:text-base',
  },
  secondary: {
    className:
      'border-2 py-2 px-8 bg-[var(--CL-neutral-white)] text-black rounded-full md:hover:text-black md:hover:border-transparent md:hover:bg-[var(--CL-primary-cyan)] text-xs md:text-base',
  },
  // Add more variants here as needed
};

function Button({ text, variant, onClickFunc }) {
  // Use the variant prop to determine the button's styles
  const buttonStyles = buttonVariants[variant] || buttonVariants.primary;

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      transition={{ ease: 'linear', type: 'spring', duration: 0.5 }}
      type="button"
      className={buttonStyles.className}
      onClick={onClickFunc}
    >
      {text}
    </motion.button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.keys(buttonVariants)).isRequired,
  onClickFunc: PropTypes.func.isRequired,
};

export default Button;
