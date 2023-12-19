import Product_1 from '../../../assets/PNG/products/product_1.png'
import Product_2 from '../../../assets/PNG/products/product_2.png'
import Product_3 from '../../../assets/PNG/products/product_3.png'
import Product_4 from '../../../assets/PNG/products/product_4.png'
import { Link } from 'react-router-dom'

const products = [
  { id: 1, name: 'Audífonos Gamer', image: Product_1, isNew: true },
  { id: 2, name: 'Cases Gamer', image: Product_2, isNew: true },
  { id: 3, name: 'Teclados Gamer', image: Product_3, isNew: true },
  { id: 4, name: 'Audífonos Gamer', image: Product_4, isNew: true },
]

function FeatureSection() {
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-24">
      <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 md:mb-6 lg:text-4xl">
            Explora Nuestros Productos 🔥
          </h2>

          <p className="max-w-screen-md mx-auto text-center text-gray-500 ">
            Explora nuestra exclusiva selección de productos especializados, cuidadosamente diseñados para elevar tu
            experiencia en gaming.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div key={product.id}>
              <Link to="/shop" className="relative block overflow-hidden rounded-t-lg bg-slate-900 group h-96">
                <img
                  src={product.image}
                  loading="lazy"
                  alt={`Photo of ${product.name}`}
                  className="object-contain object-center w-full h-full transition duration-200 group-hover:scale-110"
                />

                {product.isNew && (
                  <span className="absolute left-0 top-3 rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                    Nuevo
                  </span>
                )}
              </Link>
              <div className="justify-between gap-2 p-4 text-center rounded-b-lg bg-purple">
                <div className="text-center">
                  <Link
                    to="/shop"
                    className="block font-bold text-center text-white transition duration-100 hover:text-gray-300 lg:text-xl"
                  >
                    {product.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
