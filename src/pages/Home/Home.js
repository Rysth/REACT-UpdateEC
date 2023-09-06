import React from 'react';
import { motion } from 'framer-motion';
import BrandImage from '../../assets/SVG/logo.svg';
import HeroImage from '../../assets/PNG/hero/hero.jpg';
import ProductImage from '../../assets/PNG/products/product-1.png';
import { ButtonSecondary } from '../../components/Buttons/Buttons';

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="home">
      <div className="container md:container mx-auto grid p-4 py-20 md:py-28">
        <div className="text-white mx-auto">
          <h1 className="text-center text-4xl md:text-5xl lg:w-3/4 mx-auto lg:text-8xl font-bold">
            ¡Bienvenidos a UpdateEC!
          </h1>
          <p className="text-center text-gray-400 my-5 md:my-6 md:mt-8 mx-auto text-sm md:text-base md:w-full lg:w-2/4">
            El mejor lugar para comprar tús periféricos y componentes para tú PC.
          </p>
          <div className="text-center w-full">
            <ButtonSecondary text="Contactar" />
          </div>
        </div>
        <div className="mt-20 w-72 mx-auto h-5/6 md:w-3/6 relative z-[10]">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute -top-8 md:-top-16 -left-10 md:-left-24 rounded-xl backdrop-blur-2xl backdrop-brightness-200"
          >
            <img
              className="w-28 mx-auto h-18 md:w-48 md:h-32 p-4 md:p-6 saturate-200"
              src={BrandImage}
              alt="Hero"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute -bottom-8 md:-bottom-16 -right-10 md:-right-24 rounded-xl backdrop-blur-2xl backdrop-brightness-200"
          >
            <img
              className="w-28 mx-auto h-28 md:w-60 md:h-60 p-4 md:p-6 saturate-200 object-container"
              src={ProductImage}
              alt="Hero"
            />
          </motion.div>
          <img className="rounded rounded-xl w-full h-full object-cover" src={HeroImage} alt="Hero" />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
