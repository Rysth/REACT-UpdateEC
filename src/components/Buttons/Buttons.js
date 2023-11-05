import React from 'react';
import PropTypes from 'prop-types';

// Define your button variants with their respective styles
const buttonVariants = {
  primary: {
    className:
      'hidden text-white sm:block border-2 py-2 px-7 rounded-full md:hover:text-black md:hover:border-transparent md:hover:bg-[var(--CL-primary-cyan)] text-xs sm:text-sm transition md:hover:scale-105 md:hover:shadow-2xl inline-block',
  },
  secondary: {
    className:
      'border-2 py-2 px-7 bg-[var(--CL-neutral-white)] text-black rounded-full md:hover:text-black md:hover:border-transparent md:hover:bg-[var(--CL-primary-cyan)] text-xs sm:text-sm transition md:hover:scale-105 md:hover:shadow-2xl inline-block',
  },
  light: {
    className:
      'text-white sm:block border-2 py-2 px-7 rounded-full md:hover:text-white md:hover:border-transparent md:hover:bg-[var(--CL-primary-purple)] text-xs sm:text-sm transition md:hover:scale-105 md:hover:shadow-2xl inline-block',
  },
  category: {
    className:
      'sm:block text-black py-1.5 px-4 rounded-md md:hover:bg-white text-xs sm:text-sm transition md:hover:scale-105 md:hover:shadow-2xl inline-block font-semibold bg-cyan-400',
  },
  categoryActive: {
    className:
      'sm:block py-1.5 px-4 rounded-md md:hover:bg-white text-xs sm:text-sm transition md:hover:scale-105 md:hover:shadow-2xl inline-block font-semibold text-white bg-purple-600 md:hover:text-black',
  },
};

function Button({ text, variant, onClickFunc }) {
  // Use the variant prop to determine the button's styles
  const buttonStyles = buttonVariants[variant] || buttonVariants.primary;

  return (
    <button
      type="button"
      className={buttonStyles.className}
      onClick={onClickFunc}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.keys(buttonVariants)).isRequired,
  onClickFunc: PropTypes.func.isRequired,
};

export default Button;
