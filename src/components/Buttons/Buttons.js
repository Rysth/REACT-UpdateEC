import React from 'react';
import PropTypes from 'prop-types';

export function ButtonPrimary({ text }) {
  return (
    <button
      type="button"
      className="hidden md:block border-2 py-2 px-5 md:px-8 rounded-full md:hover:text-black md:hover:border-transparent md:hover:bg-[var(--CL-primary-cyan)] transition duration-150 ease-in-out"
    >
      {text}
    </button>
  );
}

export function ButtonSecondary({ text }) {
  return (
    <button
      type="button"
      className="border-2 py-2 px-8 bg-[var(--CL-neutral-white)] text-black rounded-full md:hover:text-black md:hover:border-transparent md:hover:bg-[var(--CL-primary-cyan)] transition duration-150 ease-in-out text-xs md:text-base"
    >
      {text}
    </button>
  );
}

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
};

ButtonSecondary.propTypes = {
  text: PropTypes.string.isRequired,
};
