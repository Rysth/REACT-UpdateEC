import React from 'react';
import Carousel from 'react-multi-carousel';
import { motion } from 'framer-motion';
import 'react-multi-carousel/lib/styles.css';
import BannerOne from '../../../assets/PNG/banner/banner_1.jpg';
import BannerTwo from '../../../assets/PNG/banner/banner_2.png';
import Subheading from '../../../components/Subheading/Subheading';
import Button from '../../../components/Buttons/Buttons';
import { handleNavigation, contactURL } from '../../../utils/NavigationUtils';

const imagesArray = [BannerOne, BannerTwo];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function BannerSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, type: 'linear' }}
      className="container md:container mx-auto px-4 py-0 pb-4"
    >
      <Subheading subtitle="Productos" title="Nuestras Promociones" />
      <Carousel
        arrows
        infinite
        autoPlay
        draggable={false}
        responsive={responsive}
        containerClass="border-4 lg:border-6 border-violet-600 my-8 md:mt-16 mb-6 h-full block md:max-w-[82%]  mx-auto rounded-2xl"
        sliderClass="m-0 h-[100%] md:h-[100%]"
        itemClass="h-full"
      >
        <img className="object-contain d:object-cover w-full h-full" src={imagesArray[0]} alt="" />
        <img className="object-contain d:object-cover w-full h-full" src={imagesArray[1]} alt="" />
      </Carousel>
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
