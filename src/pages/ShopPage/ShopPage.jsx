import { SearchSelect, SearchSelectItem, TextInput } from '@tremor/react'
import { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import SectionLayout from '../../layouts/SectionLayout'
import { fetchCategories } from '../../redux/slices/categorySlice'
import { fetchProducts, searchAndFilterProducts } from '../../redux/slices/productSlice'
import ProductSection from './sections/ProductSection'
import { Select } from 'flowbite-react'

function ShopPage() {
  const dispatch = useDispatch()
  const [searchData, setSearchData] = useState('')
  const [categoryData, setCategoryData] = useState(0)
  const { categoriesArray } = useSelector((store) => store.category)

  const debouncedSearch = debounce((newData) => {
    setSearchData(newData)
    dispatch(
      searchAndFilterProducts({ searchData: newData, categoryID: categoryData !== 0 ? categoryData : undefined }),
    )
  }, 200)

  const onSearchChange = (event) => {
    const newData = event.target.value
    debouncedSearch(newData)
  }

  const onCategoryChange = (categoryID) => {
    setCategoryData(categoryID)
    dispatch(searchAndFilterProducts({ searchData, categoryID: categoryID !== 0 ? categoryID : undefined }))
  }

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <article>
      <BreadCrumb paths={[{ name: 'Tienda', href: '/', active: true }]} />
      <SectionLayout>
        <main className="max-w-screen-xl py-12 mx-auto space-y-8">
          <header className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nuestros Productos</h2>
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <TextInput
                placeholder="Buscar..."
                className="w-full sm:w-96"
                defaultValue={searchData}
                onChange={onSearchChange}
              />
              <SearchSelect
                className="z-40 max-w-xs rounded"
                placeholder="Categoría"
                onValueChange={onCategoryChange}
                value={categoryData}
              >
                {categoriesArray.map((category) => (
                  <SearchSelectItem key={category.id} value={category.id}>
                    {category.attributes.name}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
            </div>
          </header>
          <ProductSection />
        </main>
      </SectionLayout>
    </article>
  )
}

export default ShopPage
