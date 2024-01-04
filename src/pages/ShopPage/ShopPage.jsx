import BannerSection from './sections/BannerSection'
import ProductSection from './sections/ProductSection'
import SectionLayout from '../../layouts/SectionLayout'
import { Button, TextInput } from 'flowbite-react'
import { HiOutlineSearch } from 'react-icons/hi'

function ShopPage() {
  return (
    <article>
      <BannerSection />
      <SectionLayout>
        <main className="max-w-screen-xl py-12 mx-auto ">
          <ProductSection />
        </main>
      </SectionLayout>
    </article>
  )
}

export default ShopPage
