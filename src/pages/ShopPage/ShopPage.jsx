import BannerSection from './sections/BannerSection'
import ProductSection from './sections/ProductSection'
import SectionLayout from '../../layouts/SectionLayout'

function ShopPage() {
  return (
    <article>
      <BannerSection />
      <SectionLayout>
        <main className="max-w-screen-xl py-12 mx-auto">
          <ProductSection />
        </main>
      </SectionLayout>
    </article>
  )
}

export default ShopPage
