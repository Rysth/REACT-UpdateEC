import { TextInput } from 'flowbite-react'
import { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import SectionLayout from '../../layouts/SectionLayout'
import { searchAndFilterProducts } from '../../redux/slices/productSlice'
import ProductSection from './sections/ProductSection'
import { useDispatch } from 'react-redux'

function ShopPage() {
  const dispatch = useDispatch()
  const [searchData, setSearchData] = useState('')

  // Debounced search handler
  const debouncedSearch = debounce((newData) => {
    setSearchData(newData)
    dispatch(searchAndFilterProducts({ searchData: newData }))
  }, 200) // 200ms debounce time

  const onSearchChange = (event) => {
    const newData = event.target.value
    debouncedSearch(newData)
  }

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  return (
    <article>
      <BreadCrumb paths={[{ name: 'Tienda', href: '/', active: true }]} />
      <SectionLayout>
        <main className="max-w-screen-xl py-12 mx-auto space-y-8">
          <header className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nuestros Productos</h2>
            <TextInput
              placeholder="Buscar..."
              className="w-full sm:w-60"
              defaultValue={searchData}
              onChange={onSearchChange}
            />
          </header>
          <ProductSection />
        </main>
      </SectionLayout>
    </article>
  )
}

export default ShopPage
