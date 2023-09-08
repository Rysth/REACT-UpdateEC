import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HeroImage from '../../../assets/PNG/hero/hero.jpg';
import AboutImage from '../../../assets/PNG/about/about.jpg';
import Subheading from '../../../components/Subheading/Subheading';

const imagesArray = [HeroImage, AboutImage];

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
    <div className="container md:container mx-auto px-4 py-0 pb-4">
      <Subheading subtitle="Productos" title="Nuestras Promociones" />
      <Carousel
        autoPlay
        autoPlaySpeed={3500}
        arrows
        infinite
        responsive={responsive}
        containerClass="border-4 lg:border-6 border-violet-600 my-8 md:mt-16 mb-6 h-full block md:h-[32rem] "
        className="md:h-[30rem]"
        itemClass="w-100 object-fill h-full"
      >
        <img className="object-cover" src={imagesArray[0]} alt="" />
        <img className="object-cover" src={imagesArray[1]} alt="" />
      </Carousel>
      <p className="text-center text-sm md:text-base text-slate-400 mb-12">
        ¡Aprovecha nuestras promociones y descuentos en productos seleccionados!
      </p>
    </div>
  );
}

export default BannerSection;
