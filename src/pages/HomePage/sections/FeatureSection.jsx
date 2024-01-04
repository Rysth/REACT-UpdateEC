import React from 'react'
import Product1 from '../../../assets/PNG/products/product_1.png'
import Product2 from '../../../assets/PNG/products/product_2.png'
import Product3 from '../../../assets/PNG/products/product_3.png'
import Product4 from '../../../assets/PNG/products/product_4.png'
import Product5 from '../../../assets/PNG/products/product_5.png'
import CategoryCard from '../../../components/ui/CategoryCard/CategoryCard'

function FeatureSection() {
  const products = [
    { imageSrc: Product1, category: 'Audífonos' },
    { imageSrc: Product2, category: 'Cases' },
    { imageSrc: Product3, category: 'Teclados' },
    { imageSrc: Product4, category: 'Mouses' },
    { imageSrc: Product5, category: 'Accesorios' },
  ]

  return (
    <section className="p-4 py-10 sm:py-20">
      <article className="flex flex-col max-w-screen-xl gap-2 mx-auto">
        <header className="grid max-w-lg gap-2">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Categorías Destacadas</h2>
        </header>
        <main className="grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-5 sm:gap-8 sm:py-10 ">
          {products.map((product, index) => (
            <CategoryCard key={index} {...product} />
          ))}
        </main>
      </article>
    </section>
  )
}

export default FeatureSection
