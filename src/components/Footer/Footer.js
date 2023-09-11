import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../../assets/SVG/logo.svg';

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: 'spring' }}
      className="footer bg-white"
    >
      <div className="container md:container mx-auto mt-10 md:mt-20 p-4 py-8 md:py-32 flex flex-wrap gap-10 lg:gap-20 2xl:justify-between">
        <div className="bg-gray-900 w-40 md:w-60 p-2 px-6 md:py-4 rounded-lg">
          <Link to="/" className="w">
            <img className="w-full h-full" src={Logo} alt="" />
          </Link>
        </div>
        <ul className="flex flex-col p-0 gap-2">
          <li className="text-sm md:text-base mb-2">
            <h3 className="font-bold">Términos y Condiciones</h3>
          </li>
          <li className="text-xs md:text-base text-gray-900">
            <a href="/" className="md:hover:underline">
              Términos de Servicio
            </a>
          </li>
          <li className="text-xs md:text-base text-gray-900">
            <a href="/" className="md:hover:underline">
              Política de Privacidad
            </a>
          </li>
        </ul>
        <ul className="flex flex-col p-0 gap-2">
          <li className="text-sm md:text-base mb-2">
            <h3 className="font-bold">Contactos</h3>
          </li>
          <li className="text-xs md:text-base text-gray-900">
            <a
              target="_blank"
              rel="noreferrer"
              href="tel:+593984798317"
              className="md:hover:underline"
            >
              (+593) 0984798317
            </a>
          </li>
          <li className="text-xs md:text-base text-gray-900">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:update.ec.gye@gmail.com"
              className="md:hover:underline"
            >
              update.ec.gye@gmail.com
            </a>
          </li>
        </ul>
        <ul className="flex flex-col p-0 gap-2">
          <li className="text-sm md:text-base mb-2">
            <h3 className="font-bold">Compañia</h3>
          </li>
          <li className="text-xs md:text-base text-gray-900">
            <a href="/" className="md:hover:underline">
              Inicio
            </a>
          </li>
          <li className="text-xs md:text-base text-gray-900">
            <a href="/" className="md:hover:underline">
              Nosotros
            </a>
          </li>
          <li className="text-xs md:text-base text-gray-900">
            <a href="/" className="md:hover:underline">
              Contáctanos
            </a>
          </li>
        </ul>

        <ul className="flex flex-col p-0 gap-2">
          <li className="text-sm md:text-base mb-2">
            <h3 className="font-bold">Redes Sociales</h3>
          </li>
          <li className="text-xs md:text-base text-gray-900">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/update.ec/"
              className="md:hover:underline"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Footer;
