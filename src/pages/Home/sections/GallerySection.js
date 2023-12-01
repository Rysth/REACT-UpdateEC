import React from 'react';
import StockOne from '../../../assets/PNG/stock/stock_1.jpg';
import StockTwo from '../../../assets/PNG/stock/stock_2.jpg';
import StockThree from '../../../assets/PNG/stock/stock_3.jpg';
import StockFive from '../../../assets/PNG/stock/stock_5.jpg';
import BannerOne from '../../../assets/PNG/banner/banner_1.jpg';
import BannerTwo from '../../../assets/PNG/banner/banner_2.jpg';

function GallerySection() {
  return (
    <section className="text-white body-font">
      <div className="flex flex-wrap px-4 py-24 mx-auto max-w-screen-2xl">
        <div className="flex-wrap -m-1 sm:flex md:-m-2">
          <div className="flex flex-wrap sm:w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full cursor-pointer md:hover:scale-105 md:hover:grayscale md:transition md:shadow-2xl"
                src={StockOne}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full cursor-pointer md:hover:scale-105 md:hover:grayscale md:transition md:shadow-2xl"
                src={StockTwo}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full cursor-pointer md:hover:scale-105 md:hover:grayscale md:transition md:shadow-2xl"
                src={BannerTwo}
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:w-1/2">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full cursor-pointer md:hover:scale-105 md:hover:grayscale md:transition md:shadow-2xl"
                src={BannerOne}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full cursor-pointer md:hover:scale-105 md:hover:grayscale md:transition md:shadow-2xl"
                src={StockFive}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full cursor-pointer md:hover:scale-105 md:hover:grayscale md:transition md:shadow-2xl"
                src={StockThree}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
