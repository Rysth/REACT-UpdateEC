import ProductSection from './sections/ProductSection'
import SectionLayout from '../../layouts/SectionLayout'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'

function ShopPage() {
  return (
    <article>
      <BreadCrumb paths={[{ name: 'Tienda', href: '/', active: true }]} />
      <SectionLayout>
        <main className="max-w-screen-xl py-12 mx-auto ">
          <ProductSection />
        </main>
      </SectionLayout>
    </article>
  )
}

export default ShopPage
