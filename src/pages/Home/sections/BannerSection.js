import React from 'react';
import { motion } from 'framer-motion';
import 'react-multi-carousel/lib/styles.css';
import Subheading from '../../../components/Subheading/Subheading';
import Button from '../../../components/Buttons/Buttons';
import { handleNavigation, contactURL } from '../../../utils/NavigationUtils';
import BannerCarousel from '../../../components/BannerCarousel/BannerCarousel';

function BannerSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, type: 'linear' }}
      className="container md:container mx-auto px-4 py-0 pb-4"
    >
      <Subheading subtitle="Productos" title="Nuestras Promociones" />
      <BannerCarousel />
      <div className="flex flex-col items-center text-center">
        <p className="text-sm md:text-base text-slate-400 my-1 mb-6">
          ¡Aprovecha nuestras promociones y descuentos en productos seleccionados!
        </p>
        <Button
          text="Catálogo"
          variant="light"
          onClickFunc={() => {
            handleNavigation(contactURL);
          }}
        />
      </div>
    </motion.div>
  );
}

export default BannerSection;
