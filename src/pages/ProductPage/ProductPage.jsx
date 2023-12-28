import ProductPreview from './components/ProductPreview'
import ProductSimilar from './components/ProductSimilar'

function Product() {
  return (
    <section className="relative">
      <ProductPreview />
      <ProductSimilar />
    </section>
  )
}

export default Product
