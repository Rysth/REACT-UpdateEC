import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, type: 'spring' }}
      className="bg-white footer"
    >
      <div className="container max-w-screen-xl px-4 py-8 mx-auto mt-10 md:py-24 md:pb-16">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 ">
          <ul className="flex flex-col gap-2 p-0">
            <li className="mb-2 text-sm md:text-base">
              <h3 className="font-bold">Compañia</h3>
            </li>
            <li className="text-xs text-gray-900 md:text-sm">
              <a href="/" className="md:hover:underline">
                Inicio
              </a>
            </li>
            <li className="text-xs text-gray-900 md:text-sm">
              <a href="/" className="md:hover:underline">
                Nosotros
              </a>
            </li>
            <li className="text-xs text-gray-900 md:text-sm">
              <a href="/" className="md:hover:underline">
                Contáctanos
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 p-0">
            <li className="mb-2 text-sm md:text-base">
              <h3 className="font-bold">Términos y Condiciones</h3>
            </li>
            <li className="text-xs text-gray-900 md:text-sm">
              <a href="/" className="md:hover:underline">
                Términos de Servicio
              </a>
            </li>
            <li className="text-xs text-gray-900 md:text-sm">
              <a href="/" className="md:hover:underline">
                Política de Privacidad
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 p-0">
            <li className="mb-2 text-sm md:text-base">
              <h3 className="font-bold">Contactos</h3>
            </li>
            <li className="text-xs text-gray-900 md:text-sm">
              <a
                target="_blank"
                rel="noreferrer"
                href="tel:+593984798317"
                className="md:hover:underline"
              >
                <i className="mr-1 fa-brands fa-whatsapp" />
                0984798317
              </a>
            </li>
            <li className="text-xs text-gray-900 md:text-sm">
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:update.ec.gye@gmail.com"
                className="md:hover:underline"
              >
                <i className="mr-1 fa-regular fa-envelope" />
                update.ec.gye@gmail.com
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2 p-0">
            <li className="mb-2 text-sm md:text-base">
              <h3 className="font-bold">Redes Sociales</h3>
            </li>
            <li className="text-xs text-gray-900 md:text-sm">
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
        <div className="flex justify-center gap-2 mt-16 text-xs text-black md:text-sm">
          <a
            href="https://github.com/Rysth"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold transition duration-300 md:hover:-translate-y-2"
          >
            RysthCraft
            <i className="ml-1 fa-brands fa-github" />
          </a>
          <p>| Todos los Derechos Reservados</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
