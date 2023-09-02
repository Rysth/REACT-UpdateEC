import React from 'react';
import Logo from '../../assets/SVG/logo.svg';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-content container">
        <div className="navbar-brand">
          <img className="navbar-logo" src={Logo} alt="" />
        </div>
        <nav className="navbar-nav">
          <div className="navbar-item">
            <a href="/" className="navbar-link">
              Inicio
            </a>
          </div>
          <div className="navbar-item">
            <a href="/" className="navbar-link">
              Nosotros
            </a>
          </div>
          <div className="navbar-item">
            <a href="/" className="navbar-link">
              Productos
            </a>
          </div>
        </nav>
        <div className="navbar-actions">
          <button type="button" className="btn btn-primary">
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
