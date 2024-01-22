import { useEffect } from 'react'
import { HiArchiveBox, HiBuildingStorefront, HiBolt, HiCheckCircle, HiArrowRight } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import Carousel from 'react-multi-carousel'
import { useDispatch, useSelector } from 'react-redux'
import CategoryOne from '../../assets/PNG/categories/category_1.png'
import CategoryTwo from '../../assets/PNG/categories/category_2.png'
import ProductImage from '../../assets/PNG/products/product_2.png'
import ProductCard from '../../components/ui/ProductCard/ProductCard'
import SectionLayout from '../../layouts/SectionLayout'
import { fetchLastestProducts } from '../../redux/slices/productSlice'

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

function HomePage() {
  const dispatch = useDispatch()
  const { lastestProducts } = useSelector((store) => store.product)

  useEffect(() => {
    dispatch(fetchLastestProducts())
  }, [dispatch])

  return (
    <section>
      {/* =====HERO===== */}
      <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow">
        <article className="max-w-screen-xl gap-20 py-12 mx-auto space-y-4 sm:space-y-0 sm:gap-8 md:grid md:grid-cols-2">
          <header className="flex flex-col justify-center gap-2 text-center sm:gap-0 md:text-left md:pe-40">
            <h1 className="my-1 text-4xl font-bold text-black md:text-6xl lg:text-7xl md:my-4">
              Experimenta Tu Juego al Máximo
            </h1>
            <p className="max-w-xl mb-4 text-sm text-gray-500 md:text-base">
              Descubre la última tecnología en gaming. Experimenta una inmersión total con nuestra exclusiva selección
              de productos
            </p>
            <div className="flex gap-2">
              <a href="/shop" className="flex-1 text-white rounded-full btn btn-primary">
                <HiBuildingStorefront className="text-xl" />
                Visitar
              </a>
              <a href="tel:+5930984798317" className="flex-1 rounded-full btn btn-primary btn-outline">
                <FaWhatsapp className="text-xl" />
                Contactar
              </a>
            </div>
          </header>
          <main>
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
            <a href="/shop" className="text-white rounded-full btn btn-primary">
              Comenzar
            </a>
          </main>
        </article>
      </SectionLayout>
      {/* =====CATEGORIES===== */}
      <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow">
        <article className="grid max-w-screen-xl gap-8 py-12 mx-auto sm:grid-cols-2 ">
          <div
            href="/shop"
            className="relative flex flex-col items-center gap-2 py-10 overflow-hidden bg-gray-100 rounded-xl h-96 group"
          >
            <img
              src={CategoryOne}
              alt="Product image"
              className="absolute z-10 object-contain mx-auto transition duration-500 -bottom-5 h-72 group-hover:scale-110"
            />
            <main className="z-20 flex flex-col items-center gap-1.5">
              <p className="text-sm uppercase">Accesorios Gaming</p>
              <h3 className="text-xl font-bold sm:text-2xl md:text-4xl">100% Profesionales</h3>
              <a size="sm" href="/shop" className="text-white rounded-full btn btn-primary">
                Comprar Ahora
              </a>
            </main>
          </div>
          <div
            href="/shop"
            className="relative flex flex-col items-center gap-2 py-10 overflow-hidden bg-gray-100 rounded-xl h-96 group"
          >
            <img
              src={CategoryTwo}
              alt="Product image"
              className="absolute z-10 object-contain mx-auto transition duration-500 -bottom-5 h-72 group-hover:scale-110"
            />
            <main className="z-20 flex flex-col items-center gap-1.5">
              <p className="text-sm uppercase">Productos Gama Alta</p>
              <h3 className="text-xl font-bold sm:text-2xl md:text-4xl">Desde $39.99</h3>
              <a size="sm" href="/shop" className="text-white rounded-full btn btn-primary">
                Comprar Ahora
              </a>
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
            <a href="/shop" className="transition btn btn-link md:hover:translate-x-2">
              Más Productos
              <HiArrowRight />
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
