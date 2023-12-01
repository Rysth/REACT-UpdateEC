import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/Buttons/Buttons';
import Badge from '../../../components/Badge/Badge';

import { handleNavigation, contactURL } from '../../../utils/NavigationUtils';

import BrandImage from '../../../assets/SVG/logo.svg';
import HeroImage from '../../../assets/PNG/hero/hero.jpg';
import ProductImage from '../../../assets/PNG/products/product-1.jpg';

// Define constants for class names and URLs
const brandImageClass = 'w-24 h-14 sm:w-32 sm:h-20 md:w-36 md:h-24';
const productImageClass = 'w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48';

function HeroSection() {
  return (
    <div className="container grid max-w-screen-xl gap-10 p-4 py-10 mx-auto md:py-20 md:gap-20">
      <div className="mx-auto text-white">
        <motion.h1
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: 'spring' }}
          className="mx-auto text-4xl font-bold text-center sm:text-5xl md:text-6xl lg:w-3/4 lg:text-8xl"
        >
          ¡Bienvenidos a UpdateEC!
        </motion.h1>
        <p className="w-4/5 mx-auto my-5 text-sm text-center text-gray-400 md:my-6 md:mt-8 md:text-base md:w-full lg:w-3/4">
          El mejor lugar para comprar tus periféricos y componentes para tu PC.
        </p>
        <div className="w-full text-center">
          <Button
            text="Contactar"
            variant="secondary"
            onClickFunc={() => {
              handleNavigation(contactURL);
            }}
          />
        </div>
      </div>
      <div className="w-72 mx-auto h-5/6 sm:w-3/6 relative z-[10]">
        <Badge
          classList="-top-8 sm:-top-8 -left-7 sm:-left-12 "
          imageClassList={brandImageClass}
          imageSource={BrandImage}
        />
        <img
          className="object-cover w-full rounded-xl h-60 sm:h-72 md:h-96"
          src={HeroImage}
          alt="Hero"
        />
        <Badge
          classList="-bottom-14 -right-7 sm:-right-20 md:-bottom-32"
          imageClassList={productImageClass}
          imageSource={ProductImage}
        />
      </div>
    </div>
  );
}

export default HeroSection;
