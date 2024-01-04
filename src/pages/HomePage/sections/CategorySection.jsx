import { Button } from 'flowbite-react'
import SectionLayout from '../../../layouts/SectionLayout'
import CategoryOne from '../../../assets/PNG/categories/category_1.png'
import CategoryTwo from '../../../assets/PNG/categories/category_2.png'

function CategorySection() {
  return (
    <SectionLayout>
      <article className="grid max-w-screen-xl gap-8 pb-12 mx-auto sm:grid-cols-2">
        <a
          href="/shop"
          className="relative flex flex-col items-center gap-2 py-10 overflow-hidden bg-gray-100 h-96 group"
        >
          <img
            src={CategoryOne}
            alt="Product image"
            className="absolute z-10 object-contain mx-auto transition duration-500 -bottom-5 h-72 group-hover:scale-110"
          />
          <main className="z-20 flex flex-col items-center gap-1.5">
            <p className="text-sm uppercase">Accesorios Gaming</p>
            <h3 className="text-xl sm:text-2xl md:text-4xl">100% Profesionales</h3>
            <Button
              size="sm"
              href="/shop"
              className="p-1 transition bg-purple-700 group-hover:bg-purple-800 sm:px-4 hover:shadow-xl md:hover:scale-105"
              pill
            >
              Comprar Ahora
            </Button>
          </main>
        </a>
        <a
          href="/shop"
          className="relative flex flex-col items-center gap-2 py-10 overflow-hidden bg-gray-100 h-96 group"
        >
          <img
            src={CategoryTwo}
            alt="Product image"
            className="absolute z-10 object-contain mx-auto transition duration-500 -bottom-5 h-72 group-hover:scale-110"
          />
          <main className="z-20 flex flex-col items-center gap-1.5">
            <p className="text-sm uppercase">Productos Gama Alta</p>
            <h3 className="text-xl sm:text-2xl md:text-4xl">Desde $39.99</h3>
            <Button
              size="sm"
              href="/shop"
              className="p-1 transition bg-purple-700 group-hover:bg-purple-800 sm:px-4 hover:shadow-xl md:hover:scale-105"
              pill
            >
              Comprar Ahora
            </Button>
          </main>
        </a>
      </article>
    </SectionLayout>
  )
}

export default CategorySection
