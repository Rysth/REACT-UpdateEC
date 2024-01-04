import { useSelector } from 'react-redux'
import SectionLayout from '../../../layouts/SectionLayout'
import Carousel from 'react-multi-carousel'
import { HiArrowRight } from 'react-icons/hi2'

function LastestSection() {
  const { lastestProducts } = useSelector((store) => store.product)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
            <HiArrowRight className="text-purple-700" />
          </a>
        </header>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          itemClass="lg:mx-2 border rounded-lg p-2 shadow-xl shadow-black/5 border-gray-100"
          containerClass="pb-12"
        >
          {lastestProducts.map((product, index) => (
            <a href={`/shop/${product.id}`} key={index} className="group ">
              <picture className="h-auto overflow-hidden max-h-72">
                <img
                  src={product.attributes.picture.data.attributes.url}
                  alt={product.attributes.name}
                  className="object-contain w-full h-full transition duration-500 group-hover:scale-110"
                />
              </picture>
              <header className="px-4 py-3 text-center">
                <h2 className="uppercase truncate transition duration-300 group-hover:text-violet-800">
                  {product.attributes.name}
                </h2>
                <p className="font-semibold uppercase truncate text-violet-700 group-hover:text-violet-80">
                  ${product.attributes.price}
                </p>
              </header>
            </a>
          ))}
        </Carousel>
      </article>
    </SectionLayout>
  )
}

export default LastestSection
