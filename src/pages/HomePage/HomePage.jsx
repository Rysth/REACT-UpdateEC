import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import HeroSection from './sections/HeroSection'
import BannerImage from '../../assets/PNG/stock/stock_5.jpg'

function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="py-6 sm:py-8 lg:py-40">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          <div className="flex flex-col overflow-hidden bg-gray-900 rounded-lg sm:flex-row md:h-80">
            <div className="flex flex-col w-full p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
              <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
                Componentes Gaming
                <br />
                Hasta el 30% de Descuento
              </h2>

              <p className="max-w-md mb-4 text-sm text-gray-400 sm:text-base">
                Potencia tu setup con Componentes Gaming de primera calidad. ¡Aprovecha ahora y disfruta de hasta un 30%
                de descuento! Eleva tu experiencia de juego hoy.
              </p>

              <div className="mt-auto">
                <Button
                  gradientDuoTone="purpleToBlue"
                  className="w-32 md:active:scale-95 md:transition md:hover:scale-105"
                  size="xl"
                  as={Link}
                >
                  Visitar
                </Button>
              </div>
            </div>

            <div className="order-first w-full h-48 bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
              <img
                src={BannerImage}
                loading="lazy"
                alt="Photo by Dom Hill"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
