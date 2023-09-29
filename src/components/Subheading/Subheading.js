import React from 'react';
import PropTypes from 'prop-types';

function Subheading({ subtitle, title }) {
  return (
    <header className="text-center text-white">
      <p className="text-base font-light md:text-2xl">{subtitle}</p>
      <h2 className="my-1 text-2xl font-bold md:text-5xl">{title}</h2>
    </header>
  );
}

Subheading.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Subheading;
