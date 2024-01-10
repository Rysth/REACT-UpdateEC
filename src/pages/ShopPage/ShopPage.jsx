import { SearchSelect, SearchSelectItem, TextInput } from '@tremor/react'
import { Button } from 'flowbite-react'
import { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import LoadingCard from '../../components/ui/LoadingCard/LoadingCard'
import ProductCard from '../../components/ui/ProductCard/ProductCard'
import SectionLayout from '../../layouts/SectionLayout'
import { fetchCategories } from '../../redux/slices/categorySlice'
import { fetchProducts, searchAndFilterProducts } from '../../redux/slices/productSlice'

function ShopPage() {
  const dispatch = useDispatch()
  const [searchData, setSearchData] = useState('')
  const [categoryData, setCategoryData] = useState(0)
  const { categoriesArray } = useSelector((store) => store.category)
  const { filteredArray, loading, isFiltered } = useSelector((store) => store.product)
  const [currentPage, setCurrentPage] = useState(1)

  const loadMoreProducts = () => {
    setCurrentPage(currentPage + 1)
  }

  const debouncedSearch = debounce((newData) => {
    setSearchData(newData)
    dispatch(
      searchAndFilterProducts({ searchData: newData, categoryID: categoryData !== 0 ? categoryData : undefined }),
    )
  }, 400)

  const onSearchChange = (event) => {
    const newData = event.target.value
    debouncedSearch(newData)
  }

  const onCategoryChange = (categoryID) => {
    setCategoryData(categoryID)
    dispatch(searchAndFilterProducts({ searchData, categoryID: categoryID !== 0 ? categoryID : undefined }))
  }

  useEffect(() => {
    dispatch(fetchProducts(currentPage))
  }, [currentPage, dispatch])

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  return (
    <article>
      <BreadCrumb paths={[{ name: 'Tienda', href: '/', active: true }]} />
      <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow">
        <article className="max-w-screen-xl py-12 mx-auto">
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
        </article>
      </SectionLayout>
      <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow">
        {loading && <LoadingCard />}
        {filteredArray.length === 0 && !loading ? (
          <header className="grid w-full h-20 max-w-screen-xl py-2 mx-auto bg-red-500 place-items-center">
            <h3 className="w-full text-lg font-bold text-center text-white uppercase">¡Productos no Encontrados!</h3>
          </header>
        ) : (
          <article className="max-w-screen-xl pb-12 mx-auto">
            <main className="flex flex-col flex-1 gap-10">
              <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-5">
                {filteredArray.map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))}
              </ul>
              <footer className="grid place-items-center">
                <Button type="button" color="blue" className="" onClick={loadMoreProducts} disabled={isFiltered}>
                  Mostrar Más
                </Button>
              </footer>
            </main>
          </article>
        )}
      </SectionLayout>
    </article>
  )
}

export default ShopPage
