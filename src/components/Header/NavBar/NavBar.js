import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NavBar.css';

function NavBar({ classList, navClassList, handleNavigationBar }) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className={classList}
    >
      <NavLink to="/" className={navClassList} onClick={handleNavigationBar}>
        <i className="fa-solid fa-home w-7 md:hidden" />
        Inicio
      </NavLink>
      <NavLink to="/about" className={navClassList} onClick={handleNavigationBar}>
        <i className="fa-solid fa-user w-7 md:hidden" />
        Nosotros
      </NavLink>
      <NavLink to="/products" className={navClassList} onClick={handleNavigationBar}>
        <i className="fa-solid fa-star w-7 md:hidden" />
        Productos
      </NavLink>
    </motion.nav>
  );
}

NavBar.defaultProps = {
  handleNavigationBar: () => {},
};

NavBar.propTypes = {
  classList: PropTypes.string.isRequired,
  navClassList: PropTypes.string.isRequired,
  handleNavigationBar: PropTypes.func,
};

export default NavBar;
