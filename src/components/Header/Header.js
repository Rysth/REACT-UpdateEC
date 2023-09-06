import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/SVG/logo.svg';
import NavBar from './NavBar/NavBar';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigationBar = () => setIsOpen(!isOpen);
  return (
    <header className="sticky top-0 z-{20} w-full border-b border-gray-500 ">
      <div className="container md:container mx-auto flex flex-wrap items-center justify-between p-4 text-white">
        <NavLink to="/" className="w-20 md:w-32">
          <img src={Logo} alt="" />
        </NavLink>
        <NavBar classList="hidden md:flex gap-5" />
        <button type="button" className="md:hidden" onClick={handleNavigationBar}>
          <i className="fa-solid fa-bars w-7 text-2xl" />
        </button>
        {isOpen && (
          <NavBar
            classList="bg-white my-3 p-2 rounded rounded-lg flex flex-col basis-full md:hidden gap-2"
            navClassList=" text-black p-3 md:hover:text-purple md:active"
          />
        )}
      </div>
    </header>
  );
}

export default Header;
