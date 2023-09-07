import React from 'react';
import PropTypes from 'prop-types';

function Subheading({ subtitle, title }) {
  return (
    <header className="text-white text-center">
      <p className="text-sm md:text-lg font-light">{subtitle}</p>
      <h2 className="text-xl md:text-4xl my-1 font-bold">{title}</h2>
    </header>
  );
}

Subheading.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Subheading;
