import { Breadcrumb } from 'flowbite-react'
import SectionLayout from '../../../layouts/SectionLayout'

function BannerSection() {
  return (
    <SectionLayout backgroundColor="bg-purple">
      <article className="max-w-screen-xl py-12 mx-auto">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="#">
            <span className="text-gray-300 transition duration-300 hover:text-cyan-400">Inicio</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className="text-white">Tienda</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </article>
    </SectionLayout>
  )
}

export default BannerSection
