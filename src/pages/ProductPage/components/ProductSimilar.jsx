import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../../components/ui/ProductCard/ProductCard'
import { fetchSimilarProducts } from '../../../redux/slices/productSlice'

function ProductSimilar() {
  const dispatch = useDispatch()
  const { similarProducts, foundProduct } = useSelector((store) => store.product)

  useEffect(() => {
    if (foundProduct) {
      const categoryID = foundProduct.attributes.category.data.id
      const productID = foundProduct.id
      dispatch(fetchSimilarProducts({ categoryID, productID }))
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
