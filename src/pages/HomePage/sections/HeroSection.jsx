import { Button } from 'flowbite-react'
import { HiArrowRight, HiOutlineShoppingCart } from 'react-icons/hi2'
import SectionLayout from '../../../layouts/SectionLayout'
import ProductImage from '../../../assets/PNG/products/product_2.png'

function HeroSection() {
  return (
    <SectionLayout backgroundColor=" animate__animated animate__fadeIn animate__slow">
      <article className="flex flex-col max-w-screen-xl gap-20 py-24 mx-auto sm:gap-8 md:flex-row sm:pt-36">
        <header className="flex flex-col justify-center gap-2 text-center sm:gap-0 md:text-left sm:flex-1">
          <p className="text-sm font-semibold text-blue-700 uppercase">Productos Gaming Profesionales</p>
          <h1 className="my-4 text-4xl font-bold text-black sm:text-5xl md:text-7xl md:mb-8">
            Sé Parte de la Elite Gaming
          </h1>
          <div className="flex flex-col gap-2.5 sm:flex-row md:justify-start">
            <Button
              href="/shop"
              className="p-2 !text-xl transition bg-blue-700 sm:px-4 md:px-6 hover:bg-blue-800 hover:shadow-xl md:hover:translate-x-2"
            >
              <HiOutlineShoppingCart className="mr-1 text-xl" />
              Tienda
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
