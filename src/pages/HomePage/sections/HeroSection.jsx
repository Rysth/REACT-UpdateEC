import { Button } from 'flowbite-react'
import { HiArrowRight } from 'react-icons/hi2'
import SectionLayout from '../../../layouts/SectionLayout'
import ProductImage from '../../../assets/PNG/products/product_5.png'

function HeroSection() {
  return (
    <SectionLayout backgroundColor="bg-gray-50">
      <article className="flex flex-col max-w-screen-xl gap-20 py-12 mx-auto sm:gap-8 md:flex-row ">
        <header className="flex flex-col justify-center gap-2 text-center sm:gap-0 md:text-left md:pr-32 sm:flex-1">
          <p className="mb-3 text-sm uppercase text-violet-700 md:mb-4 sm:text-base">Productos Gaming Profesionales</p>
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-7xl">
            Redefine tu Juego <br /> Sé Parte de la Elite Gaming
          </h1>
          <p className="mb-4 text-sm leading-relaxed text-gray-500 md:text-base md:mb-8">
            Sumérgete en el gaming de élite con dispositivos de alto rendimiento y accesorios únicos. Vive la pasión y
            precisión.
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              size="sm"
              href="#"
              className="p-2 transition bg-purple-700 sm:px-4 md:px-6 hover:bg-purple-800 hover:shadow-xl md:hover:translate-x-2"
              pill
            >
              Tienda
              <HiArrowRight className="ml-1" />
            </Button>
          </div>
        </header>
        <main className="sm:flex-1 sm:h-auto">
          <img
            src={ProductImage}
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="block object-cover w-full h-full"
          />
        </main>
      </article>
    </SectionLayout>
  )
}

export default HeroSection
