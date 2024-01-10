import { useSelector } from 'react-redux'
import SectionLayout from '../../../layouts/SectionLayout'
import Carousel from 'react-multi-carousel'
import { HiArrowRight } from 'react-icons/hi2'
import ProductCard from '../../../components/ui/ProductCard/ProductCard'

function LastestSection() {
  const { lastestProducts } = useSelector((store) => store.product)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <SectionLayout>
      <article className="max-w-screen-xl py-12 mx-auto">
        <header className="flex flex-col items-center justify-between gap-2 mb-6 sm:flex-row">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Últimos Productos</h2>
          <a href="/shop" className="flex items-center gap-1 text-sm transition duration-200 hover:translate-x-2">
            Más Productos
            <HiArrowRight className="text-blue-700" />
          </a>
        </header>
        <Carousel responsive={responsive} infinite autoPlay containerClass="pb-12" centerMode draggable={false}>
          {lastestProducts.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </Carousel>
      </article>
    </SectionLayout>
  )
}

export default LastestSection
