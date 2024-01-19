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
import { fetchBrands } from '../../redux/slices/brandSlice'
import { fetchProducts, searchAndFilterProducts } from '../../redux/slices/productSlice'

const debouncedSearch = debounce((newData, categoryData, brandData, dispatch) => {
  dispatch(
    searchAndFilterProducts({
      searchData: newData,
      categoryID: categoryData !== 0 ? categoryData : undefined,
      brandID: brandData !== 0 ? brandData : undefined,
    }),
  )
}, 400)

function ShopPage() {
  const dispatch = useDispatch()
  const [searchData, setSearchData] = useState('')
  const [categoryData, setCategoryData] = useState(0)
  const [brandData, setBrandData] = useState(0)

  const { categoriesArray } = useSelector((store) => store.category)
  const { brandsArray } = useSelector((store) => store.brand)
  const { filteredArray, loading, isFiltered } = useSelector((store) => store.product)
  const [currentPage, setCurrentPage] = useState(1)

  const loadMoreProducts = () => {
    setCurrentPage(currentPage + 1)
  }

  const handleSearchAndFilter = (searchData, categoryID, brandID) => {
    dispatch(
      searchAndFilterProducts({
        searchData,
        categoryID: categoryID !== 0 ? categoryID : undefined,
        brandID: brandID !== 0 ? brandID : undefined,
      }),
    )
  }

  const onSearchChange = (newData) => {
    setSearchData(newData)
    debouncedSearch(newData, categoryData, brandData, dispatch)
  }

  const onBrandChange = (brandID) => {
    setBrandData(brandID)
    handleSearchAndFilter(searchData, categoryData, brandID !== 0 ? brandID : undefined)
  }

  const onCategoryChange = (categoryID) => {
    setCategoryData(categoryID)
    handleSearchAndFilter(searchData, categoryID !== 0 ? categoryID : undefined, brandData)
  }

  const clearFilters = () => {
    setSearchData('')
    setCategoryData(0)
    setBrandData(0)
    dispatch(searchAndFilterProducts({ searchData: '', categoryID: undefined, brandID: undefined }))
  }

  useEffect(() => {
    dispatch(fetchProducts(currentPage))
  }, [currentPage, dispatch])

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchBrands())
  }, [dispatch])

  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [])

  return (
    <article>
      <BreadCrumb paths={[{ name: 'Tienda', href: '/shop', active: true }]} />
      <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow">
        <article className="max-w-screen-xl py-12 pb-0 mx-auto">
          <header className="flex flex-col items-center justify-between gap-3 mb-4 sm:flex-row">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl sm:w-2/4">Nuestros Productos</h2>
          </header>
        </article>
      </SectionLayout>
      <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow">
        <article className="max-w-screen-xl min-h-screen pb-12 mx-auto">
          <main className="flex flex-col flex-1 gap-5 sm:flex-row">
            <div className="flex flex-col w-full gap-2 sm:w-1/4">
              <TextInput placeholder="Buscar..." className="w-full" value={searchData} onValueChange={onSearchChange} />
              <SearchSelect
                className="z-50"
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
              <SearchSelect className="z-40" placeholder="Marca" onValueChange={onBrandChange} value={brandData}>
                {brandsArray.map((brand) => (
                  <SearchSelectItem key={brand.id} value={brand.id}>
                    {brand.attributes.name}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
              <Button color="dark" onClick={clearFilters}>
                Limpiar Filtros
              </Button>
            </div>
            <div className="sm:w-3/4">
              {filteredArray.length === 0 && !loading && (
                <header className="grid w-full h-20 max-w-screen-xl py-2 mx-auto bg-red-500 place-items-center">
                  <h3 className="w-full text-lg font-bold text-center text-white uppercase">
                    ¡Productos no Encontrados!
                  </h3>
                </header>
              )}
              {loading && <LoadingCard />}
              {!loading && (
                <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
                  {filteredArray.map((product, index) => (
                    <ProductCard product={product} key={index} />
                  ))}
                </ul>
              )}
              <footer className="grid mt-8 place-items-center">
                <Button type="button" color="blue" className="" onClick={loadMoreProducts} disabled={isFiltered}>
                  Mostrar Más
                </Button>
              </footer>
            </div>
          </main>
        </article>
      </SectionLayout>
    </article>
  )
}

export default ShopPage
