import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import HeroImage from '../../../assets/PNG/hero/hero_2.jpg'

function HeroSection() {
  return (
    <section className="relative flex items-center justify-center flex-1 py-16 overflow-hidden bg-gray-100 shadow-lg min-h-96 shrink-0 md:py-20 xl:py-48">
      <img
        src={HeroImage}
        loading="lazy"
        alt="Photo by Fakurian Design"
        className="absolute inset-0 object-cover object-center w-full h-full"
      />
      <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply backdrop-blur-sm"></div>
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-lg text-center text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p>
        <h1 className="mb-8 text-4xl font-bold text-center text-white sm:text-5xl md:mb-12 md:text-6xl">
          Revolutionary way to build the web
        </h1>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Start now
          </a>

          <a
            href="#"
            className="inline-block px-8 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-gray-200 rounded-lg outline-none ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
          >
            Take tour
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
