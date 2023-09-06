import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../../assets/SVG/logo.svg';
import NavBar from './NavBar/NavBar';
import { ButtonPrimary } from '../Buttons/Buttons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigationBar = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="sticky top-0 z-[1000] w-full bg-[var(--CL-neutral-black)]"
    >
      <div className="container md:container mx-auto flex flex-wrap items-center justify-between p-4 md:py-8 text-white">
        <NavLink to="/" className="w-20 md:w-40">
          <img src={Logo} alt="" />
        </NavLink>
        <NavBar classList="hidden md:flex gap-8" />
        <button type="button" className="md:hidden" onClick={handleNavigationBar}>
          <i className="fa-solid fa-bars w-7 text-2xl" />
        </button>
        {isOpen && (
          <NavBar
            classList="bg-white my-3 p-2 rounded rounded-lg flex flex-col basis-full md:hidden text-sm"
            navClassList=" text-black p-3"
          />
        )}
        <ButtonPrimary text="Contactar" />
      </div>
    </motion.header>
  );
}

export default Header;
