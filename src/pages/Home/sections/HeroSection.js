import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/Buttons/Buttons';
import Badge from '../../../components/Badge/Badge';

import { handleNavigation, contactURL } from '../../../utils/NavigationUtils';

import BrandImage from '../../../assets/SVG/logo.svg';
import HeroImage from '../../../assets/PNG/hero/hero.jpg';
import ProductImage from '../../../assets/PNG/products/product-1.png';

// Define constants for class names and URLs
const brandImageClass = 'w-28 h-18 md:w-40 md:h-24 lg:w-48 lg:h-32';
const productImageClass = 'w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60';

function HeroSection() {
  return (
    <div className="container md:container mx-auto grid p-4 py-10 md:py-20">
      <div className="text-white mx-auto">
        <motion.h1
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring' }}
          className="text-center text-4xl md:text-5xl lg:w-3/4 mx-auto lg:text-8xl font-bold"
        >
          ¡Bienvenidos a UpdateEC!
        </motion.h1>
        <p className="text-center text-slate-300 my-5 md:my-6 md:mt-8 mx-auto text-sm md:text-base md:w-full lg:w-3/4">
          El mejor lugar para comprar tus periféricos y componentes para tu PC.
        </p>
        <div className="text-center w-full">
          <Button
            text="Contactar"
            variant="secondary"
            onClickFunc={() => {
              handleNavigation(contactURL);
            }}
          />
        </div>
      </div>
      <div className="mt-20 w-72 mx-auto h-5/6 md:w-3/6 relative z-[10]">
        <Badge
          classList="-top-8 md:-top-16 -left-10 md:-left-24 "
          imageClassList={brandImageClass}
          imageSource={BrandImage}
        />
        <img className="rounded-xl w-full h-full object-cover" src={HeroImage} alt="Hero" />
        <Badge
          classList="-bottom-8 md:-bottom-16 -right-10 md:-right-24"
          imageClassList={productImageClass}
          imageSource={ProductImage}
        />
      </div>
    </div>
  );
}

export default HeroSection;
