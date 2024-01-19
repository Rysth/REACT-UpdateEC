import { Button } from 'flowbite-react'
import { useEffect } from 'react'
import { HiArrowRight, HiArchiveBox, HiCheckCircle, HiBolt } from 'react-icons/hi2'
import Carousel from 'react-multi-carousel'
import { useDispatch, useSelector } from 'react-redux'
import CategoryOne from '../../assets/PNG/categories/category_1.png'
import CategoryTwo from '../../assets/PNG/categories/category_2.png'
import ProductImage from '../../assets/PNG/products/product_2.png'
import ProductCard from '../../components/ui/ProductCard/ProductCard'
import SectionLayout from '../../layouts/SectionLayout'
import { fetchLastestProducts } from '../../redux/slices/productSlice'

function HomePage() {
  const dispatch = useDispatch()
  const { lastestProducts } = useSelector((store) => store.product)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  }

  useEffect(() => {
    dispatch(fetchLastestProducts())
  }, [dispatch])

  return (
    <section>
      {/* =====HERO===== */}
      <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow">
        <article className="flex flex-col max-w-screen-xl gap-12 py-12 mx-auto sm:gap-8 md:flex-row ">
          <header className="flex flex-col justify-center gap-2 text-center sm:gap-0 md:text-left sm:flex-1">
            <p className="text-sm font-semibold text-blue-700 uppercase">Productos Gaming Profesionales</p>
            <h1 className="my-1 text-5xl font-bold text-black md:text-8xl md:my-4">Potencia tu Experiencia</h1>
            <p className="max-w-sm mb-4 text-sm leading-7 text-gray-500 md:text-base">
              Productos gaming de alta gama, y calidad insuperable en un solo lugar.
            </p>
            <div className="flex flex-col gap-2.5 sm:flex-row md:justify-start">
              <Button
                href="/shop"
                className="p-2 !text-xl transition bg-blue-700 sm:px-4 hover:bg-blue-800 hover:shadow-xl"
                pill
              >
                Visitar
                <HiArrowRight className="ml-1 text-xl" />
              </Button>
            </div>
          </header>
          <main className="sm:flex-1 sm:h-auto">
            <img
              src={ProductImage}
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="block object-contain w-full h-full"
            />
          </main>
        </article>
      </SectionLayout>
      {/* =====CALL TO ACTION===== */}
      <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow bg-purple">
        <article className="max-w-screen-xl py-12 mx-auto ">
          <main className="flex flex-col items-center justify-between gap-4 rounded-lg sm:flex-row">
            <header className="text-center sm:text-left">
              <h2 className="mb-2 text-2xl font-bold text-white sm:mb-1 md:text-4xl">Potencia tu Juego</h2>
              <p className="text-sm text-gray-300 sm:text-base">
                Encuentra tus herramientas gamer. <br /> ¡Explora y juega mejor!
              </p>
            </header>
            <Button
              href="/shop"
              color="blue"
              pill
              className="w-32 transition bg-blue-700 sm:px-4 hover:bg-blue-800 hover:shadow-xl"
            >
              Comenzar
            </Button>
          </main>
        </article>
      </SectionLayout>
      {/* =====CATEGORIES===== */}
      <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow">
        <article className="grid max-w-screen-xl gap-8 py-12 mx-auto sm:grid-cols-2 ">
          <div
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
              <h3 className="text-xl font-bold sm:text-2xl md:text-4xl">100% Profesionales</h3>
              <Button
                size="sm"
                href="/shop"
                className="p-1 transition bg-blue-700 group-hover:bg-blue-800 sm:px-4 hover:shadow-xl md:hover:scale-105"
                pill
              >
                Comprar Ahora
              </Button>
            </main>
          </div>
          <div
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
              <h3 className="text-xl font-bold sm:text-2xl md:text-4xl">Desde $39.99</h3>
              <Button
                size="sm"
                href="/shop"
                className="p-1 transition bg-blue-700 group-hover:bg-blue-800 sm:px-4 hover:shadow-xl md:hover:scale-105"
                pill
              >
                Comprar Ahora
              </Button>
            </main>
          </div>
        </article>
      </SectionLayout>
      {/* =====FEATURES===== */}
      <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow bg-purple">
        <article className="max-w-screen-xl py-12 mx-auto">
          <main className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col items-center gap-2 p-2 text-white sm:gap-4">
              <HiArchiveBox className="text-8xl" />
              <p className="max-w-xs mx-auto leading-7 text-center">
                Empaquetación <span className="font-bold">100% Confiable</span>. Transporte Insuperable.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 text-white sm:gap-4">
              <HiCheckCircle className="text-8xl" />
              <p className="max-w-xs mx-auto leading-7 text-center">
                Garantía <span className="font-bold">contra Defectos</span>. Garantía para su Comodidad.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 p-2 text-white sm:gap-4">
              <HiBolt className="text-8xl" />
              <p className="max-w-xs mx-auto leading-7 text-center">
                Entrega <span className="font-bold">Rápida y Segura</span>. Experiencia de Compra Ágil.
              </p>
            </div>
          </main>
        </article>
      </SectionLayout>
      {/* =====LASTEST PRODUCTS===== */}
      <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow">
        <article className="max-w-screen-xl py-12 mx-auto">
          <header className="flex flex-col items-center justify-between gap-2 mb-6 sm:flex-row">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Últimos Productos</h2>
            <a href="/shop" className="flex items-center gap-1 text-sm transition duration-200 hover:translate-x-2">
              Más Productos
              <HiArrowRight className="text-blue-700" />
            </a>
          </header>
          <Carousel responsive={responsive} infinite autoPlay containerClass="pb-12" draggable={false}>
            {lastestProducts.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </Carousel>
        </article>
      </SectionLayout>
    </section>
  )
}

export default HomePage
