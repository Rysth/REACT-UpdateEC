import { SearchSelect, SearchSelectItem, TextInput } from '@tremor/react'
import { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import { HiFunnel, HiMagnifyingGlass } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import BreadCrumb from '../../components/navigation/BreadCrumb/BreadCrumb'
import LoadingCard from '../../components/ui/LoadingCard/LoadingCard'
import ProductCard from '../../components/ui/ProductCard/ProductCard'
import SectionLayout from '../../layouts/SectionLayout'
import { fetchBrands } from '../../redux/slices/brandSlice'
import { fetchCategories } from '../../redux/slices/categorySlice'
import { fetchProducts, searchAndFilterProducts } from '../../redux/slices/productSlice'
import { useParams } from 'react-router-dom'

function ShopPage() {
  const dispatch = useDispatch()
  const [searchData, setSearchData] = useState('')
  const [brandData, setBrandData] = useState(0)
  const [categoryData, setCategoryData] = useState(0)

  const { categoriesArray } = useSelector((store) => store.category)
  const { brandsArray } = useSelector((store) => store.brand)
  const { filteredArray, loading, isFiltered } = useSelector((store) => store.product)
  const [currentPage, setCurrentPage] = useState(1)

  const { searchParam } = useParams()

  const loadMoreProducts = () => {
    const newPage = currentPage + 1
    setCurrentPage(newPage)
    dispatch(fetchProducts(newPage))
  }

  const debouncedSearch = debounce((newData, categoryData, brandData, dispatch) => {
    setCurrentPage(1)
    dispatch(
      searchAndFilterProducts({
        searchData: newData,
        categoryID: categoryData !== 0 ? categoryData : undefined,
        brandID: brandData !== 0 ? brandData : undefined,
      }),
    )
  }, 1000)

  const handleSearchAndFilter = (searchData, categoryID, brandID) => {
    setCurrentPage(1)
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
    setBrandData(brandID === '' ? 0 : brandID)
    handleSearchAndFilter(searchData, categoryData, brandID !== 0 ? brandID : undefined)
  }

  const onCategoryChange = (categoryID) => {
    setCategoryData(categoryID === '' ? 0 : categoryID)
    handleSearchAndFilter(searchData, categoryID !== 0 ? categoryID : undefined, brandData)
  }

  const clearFilters = () => {
    setSearchData('')
    setCategoryData(0)
    setBrandData(0)
    setCurrentPage(1)
    dispatch(fetchProducts())
  }

  useEffect(() => {
    if (!searchParam) {
      dispatch(fetchProducts(currentPage))
    }
  }, [currentPage, dispatch])

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchBrands())
  }, [dispatch])

  useEffect(() => {
    if (searchParam) {
      setSearchData(searchParam)
      onSearchChange(searchParam)
    }
  }, [searchParam])

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
              <div className="space-y-2">
                <h3 className="text-xl">Buscar Producto</h3>
                <TextInput
                  placeholder=""
                  className="w-full"
                  value={searchData}
                  onValueChange={onSearchChange}
                  icon={HiMagnifyingGlass}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <h3 className="w-2/4 text-xl">Categoría</h3>
                  <SearchSelect
                    className="z-50"
                    placeholder=""
                    onValueChange={onCategoryChange}
                    value={categoryData}
                    icon={HiFunnel}
                  >
                    {categoriesArray.map((category) => (
                      <SearchSelectItem key={category.id} value={category.id}>
                        {category.attributes.name}
                      </SearchSelectItem>
                    ))}
                  </SearchSelect>
                </div>
                <div className="flex items-center justify-between w-full">
                  <h3 className="w-2/4 text-xl">Marca</h3>
                  <SearchSelect
                    className="z-40"
                    placeholder=""
                    onValueChange={onBrandChange}
                    value={brandData}
                    icon={HiFunnel}
                  >
                    {brandsArray.map((brand) => (
                      <SearchSelectItem key={brand.id} value={brand.id}>
                        {brand.attributes.name}
                      </SearchSelectItem>
                    ))}
                  </SearchSelect>
                </div>
              </div>
              <button
                onClick={clearFilters}
                disabled={searchData === '' && categoryData === 0 && brandData === 0}
                className="w-full btn btn-accent"
              >
                Limpiar Filtros
              </button>
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
                <button
                  type="button"
                  className="rounded-full btn btn-primary"
                  onClick={loadMoreProducts}
                  disabled={isFiltered}
                >
                  Mostrar Más
                </button>
              </footer>
            </div>
          </main>
        </article>
      </SectionLayout>
    </article>
  )
}

export default ShopPage
