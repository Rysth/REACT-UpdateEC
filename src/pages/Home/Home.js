import React from 'react';
import { motion } from 'framer-motion';
import BrandImage from '../../assets/SVG/logo.svg';
import HeroImage from '../../assets/PNG/hero/hero.jpg';
import ProductImage from '../../assets/PNG/products/product-1.png';
import { ButtonSecondary } from '../../components/Buttons/Buttons';
import Badge from '../../components/Badge/Badge';

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <div className="container md:container mx-auto grid p-4 py-10 md:py-20">
        <div className="text-white mx-auto ">
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
          <Badge
            classList="-top-8 md:-top-16 -left-10 md:-left-24 "
            imageClassList="w-28 h-18 md:w-40 md:h-24 lg:w-48 lg:h-32"
            imageSource={BrandImage}
          />
          <img className="rounded rounded-xl w-full h-full object-cover " src={HeroImage} alt="Hero" />
          <Badge
            classList="-bottom-8 md:-bottom-16 -right-10 md:-right-24"
            imageClassList="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60"
            imageSource={ProductImage}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
