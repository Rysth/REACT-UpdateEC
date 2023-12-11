import React from 'react'
import Zoom from 'react-medium-image-zoom'
import StockOne from '../../../assets/PNG/stock/stock_1.jpg'
import StockTwo from '../../../assets/PNG/stock/stock_2.jpg'
import StockThree from '../../../assets/PNG/stock/stock_3.jpg'
import StockFive from '../../../assets/PNG/stock/stock_5.jpg'
import BannerOne from '../../../assets/PNG/banner/banner_1.jpg'
import BannerTwo from '../../../assets/PNG/banner/banner_2.jpg'

function GallerySection() {
  return (
    <section className="text-white body-font">
      <div className="flex flex-wrap max-w-screen-xl px-4 py-24 mx-auto">
        <div className="flex-wrap -m-1 sm:flex md:-m-2">
          <div className="flex flex-wrap sm:w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <Zoom zoomMargin={25}>
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full cursor-pointer md:hover:scale-105 md:hover:grayscale md:transition md:shadow-2xl"
                  src={StockOne}
                  loading="lazy"
                />
              </Zoom>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Zoom zoomMargin={25}>
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full cursor-pointer md:hover:scale-105 md:hover:grayscale md:transition md:shadow-2xl"
                  src={StockTwo}
                  loading="lazy"
                />
              </Zoom>
            </div>
            <div className="w-full p-1 md:p-2">
              <Zoom zoomMargin={25}>
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full cursor-pointer md:hover:scale-105 md:hover:grayscale md:transition md:shadow-2xl"
                  src={BannerTwo}
                  loading="lazy"
                />
              </Zoom>
            </div>
          </div>
          <div className="flex flex-wrap sm:w-1/2">
            <div className="w-full p-1 md:p-2">
              <Zoom zoomMargin={25}>
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full cursor-pointer md:hover:scale-105 md:hover:grayscale md:transition md:shadow-2xl"
                  src={BannerOne}
                  loading="lazy"
                />
              </Zoom>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Zoom zoomMargin={25}>
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full cursor-pointer md:hover:scale-105 md:hover:grayscale md:transition md:shadow-2xl"
                  src={StockFive}
                  loading="lazy"
                />
              </Zoom>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Zoom zoomMargin={25}>
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full cursor-pointer md:hover:scale-105 md:hover:grayscale md:transition md:shadow-2xl"
                  src={StockThree}
                  loading="lazy"
                />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection
