import React from 'react'
import Product1 from '../../../assets/PNG/products/product_1.png'
import Product2 from '../../../assets/PNG/products/product_2.png'
import Product3 from '../../../assets/PNG/products/product_3.png'
import Product4 from '../../../assets/PNG/products/product_4.png'
import CategoryCard from '../../../components/ui/CategoryCard/CategoryCard'

function FeatureSection() {
  const products = [
    { imageSrc: Product1, category: 'Audífonos', description: 'Sonido Envolvente y de Calidad' },
    { imageSrc: Product2, category: 'Cases', description: 'Sonido Envolvente y de Calidad' },
    { imageSrc: Product3, category: 'Teclados', description: 'Sonido Envolvente y de Calidad' },
    { imageSrc: Product4, category: 'Mouses', description: 'Sonido Envolvente y de Calidad' },
  ]

  return (
    <section className="p-4">
      <article className="flex flex-col max-w-screen-xl gap-2 mx-auto">
        <header className="grid max-w-lg gap-2">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Categorías Destacadas</h2>
          <p className="text-xs text-gray-500 sm:text-base">
            Explora nuestra exclusiva selección de productos especializados, cuidadosamente diseñados para elevar tu
            experiencia en gaming.
          </p>
        </header>
        <main className="grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-4 sm:py-10 ">
          {products.map((product, index) => (
            <CategoryCard key={index} {...product} />
          ))}
        </main>
      </article>
    </section>
  )
}

export default FeatureSection
