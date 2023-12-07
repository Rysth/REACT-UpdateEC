import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/SVG/logo.svg';
import NavBar from './NavBar/NavBar';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavigationBar = () => setIsOpen(!isOpen);
  const closeNavigationBar = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 z-[1001] w-full backdrop-blur-2xl"
    >
      <div className="flex flex-wrap items-center justify-between p-4 mx-auto text-white max-w-screen-2xl md:py-5">
        <div className="flex items-center gap-8">
          <a href="/" rel="nonopenner" aria-label="Home page">
            <img
              src={Logo}
              alt="UpdateEC brand logo"
              className="w-20 bg-transparent sm:w-28"
            />
          </a>
          <NavBar
            classList="hidden sm:flex font-semibold items-center gap-5 text-xs"
            navClassList=""
          />
        </div>
        <button
          type="button"
          className="sm:hidden"
          onClick={handleNavigationBar}
          aria-label="toggleButton"
        >
          <i className="w-full h-full text-2xl fa-solid fa-bars" />
        </button>
        {isOpen && (
          <>
            <NavBar
              classList="bg-white my-3 rounded rounded-md flex flex-col basis-full sm:hidden text-sm p-2"
              navClassList="text-black p-2"
              handleNavigationBar={closeNavigationBar}
            />
            <div className="flex items-center justify-end w-full gap-2 sm:hidden">
              <button
                className="p-2 px-4 text-xs text-white underline rounded-full md:transition md:hover:scale-105 md:active:scale-95"
                onClick={handleNavigationBar}
                type="button"
              >
                Iniciar Sesión
              </button>
              <button
                className="p-2 px-4 text-xs bg-[var(--CL-primary-purple)] text-white rounded-full md:transition md:hover:scale-105 md:active:scale-95"
                onClick={handleNavigationBar}
                type="button"
              >
                Registrarse
              </button>
            </div>
          </>
        )}
        <div className="items-center hidden gap-1 sm:flex">
          <NavLink
            to="/login"
            className="p-2 px-4 text-xs text-white border border-transparent rounded-full md:transition md:hover:scale-105 md:active:scale-95"
            onClick={handleNavigationBar}
          >
            Iniciar Sesión
          </NavLink>
          <button
            className="p-2 px-4 text-xs bg-[var(--CL-primary-purple)] text-white rounded-full md:transition md:hover:scale-105 md:active:scale-95 border border-transparent"
            onClick={handleNavigationBar}
            type="button"
          >
            Registrarse
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
