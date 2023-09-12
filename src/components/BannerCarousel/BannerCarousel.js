import React from 'react';
import Carousel from 'react-multi-carousel';
import BannerOne from '../../assets/PNG/banner/banner_1.jpg';
import BannerTwo from '../../assets/PNG/banner/banner_2.png';

const imagesArray = [BannerOne, BannerTwo];

function BannerCarousel() {
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

  return (
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
  );
}

export default BannerCarousel;
