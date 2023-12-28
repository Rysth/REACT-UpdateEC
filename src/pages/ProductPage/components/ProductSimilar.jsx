import { Button } from 'flowbite-react'
import { useSelector } from 'react-redux'

function ProductSimilar() {
  const { productsArray, foundProduct } = useSelector((store) => store.product)
  const similarProducts = productsArray

    .filter(
      (product) =>
        product.attributes.category.data.id === foundProduct.attributes.category.data.id &&
        product.id !== foundProduct.id,
    )
    .slice(0, 4)

  return (
    <section>
      <div className="max-w-screen-xl p-4 py-8 mx-auto sm:py-12">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Productos Similares</h2>
        </header>
        <ul className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-4">
          {similarProducts.map((product) => (
            <li key={product.id} className="relative group">
              <a href={`/shop/${product.id}`} className="block w-full">
                <picture className="h-[175px] lg:h-[240px] border border-gray-200 overflow-hidden">
                  <img
                    src={product.attributes.picture.data.attributes.url}
                    alt={product.name}
                    className="object-contain w-full h-full transition bg-white md:hover:scale-105"
                    loading="lazy"
                  />
                </picture>
                <header className="grid p-2 text-white bg-purple">
                  <h3 className="text-lg font-bold truncate max-w-[20rem] uppercase">{product.attributes.name}</h3>
                  <p className="text-sm">{`$${product.attributes.price}`}</p>
                </header>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProductSimilar
