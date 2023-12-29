import { useSelector } from 'react-redux'
import ProductCard from '../../../components/ui/ProductCard/ProductCard'
import { useEffect, useState } from 'react'

function ProductSimilar() {
  const { productsArray, foundProduct } = useSelector((store) => store.product)
  const [similarProducts, setSimilarProducts] = useState([])

  useEffect(() => {
    if (foundProduct) {
      setSimilarProducts(
        productsArray
          .filter(
            (product) =>
              product.attributes.category.data.id === foundProduct.attributes.category.data.id &&
              product.id !== foundProduct.id,
          )
          .slice(0, 4),
      )
    }
  }, [foundProduct])

  useEffect(() => {}, [similarProducts])

  return (
    <section>
      <div className="max-w-screen-xl p-4 py-8 mx-auto sm:py-12">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Productos Similares</h2>
        </header>
        <ul className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-4">
          {similarProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProductSimilar
