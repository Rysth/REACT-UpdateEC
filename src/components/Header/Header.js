import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { handleNavigation, contactURL } from '../../utils/NavigationUtils';
import Logo from '../../assets/SVG/logo.svg';
import NavBar from './NavBar/NavBar';
import Button from '../Buttons/Buttons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigationBar = () => setIsOpen(!isOpen);
  const closeNavigationBar = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="sticky top-0 z-[1001] w-full backdrop-blur-3xl backdrop-brightness-75"
    >
      <div className="container flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto text-white md:py-5">
        <a
          href="/"
          rel="nonopenner"
          className="w-20 sm:w-32"
          aria-label="Home page"
        >
          <img src={Logo} alt="" className="bg-transparent" />
        </a>
        <NavBar
          classList="hidden sm:flex items-center gap-8 font-semibold text-sm"
          navClassList=""
        />
        <button
          type="button"
          className="sm:hidden"
          onClick={handleNavigationBar}
          aria-label="toggleButton"
        >
          <i className="w-full h-full text-2xl fa-solid fa-bars" />
        </button>
        {isOpen && (
          <NavBar
            classList="bg-white my-3  rounded rounded-md flex flex-col basis-full sm:hidden text-sm p-2"
            navClassList="text-black p-2 rounded-md"
            handleNavigationBar={closeNavigationBar}
          />
        )}
        <Button
          text="Contactar"
          variant="primary"
          onClickFunc={() => {
            handleNavigation(contactURL);
          }}
        />
      </div>
    </motion.header>
  );
}

export default Header;
