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
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@tremor/react'

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
  const navigate = useNavigate()

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

    if (newData === '') {
      navigate('/shop')
    }

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

    navigate('/shop')
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
        <article className="max-w-screen-xl pt-12 pb-0 mx-auto">
          <header className="flex flex-col items-center justify-between gap-3 mb-4 sm:flex-row">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl sm:w-2/4">Nuestros Productos</h2>
          </header>
        </article>
      </SectionLayout>
      <SectionLayout backgroundColor="animate__animated animate__fadeIn animate__slow">
        <article className="max-w-screen-xl min-h-screen pb-12 mx-auto">
          <main className="flex flex-col flex-1 gap-5 sm:flex-row">
            <div className="flex flex-col w-full gap-2 sm:w-1/4">
              <div className="flex items-start justify-between md:flex-col md:space-y-10 md:pt-5">
                <div className="grid gap-2">
                  <h3 className="text-xl">Categoría</h3>
                  {categoriesArray.map((category) => (
                    <label key={category.id} className="flex items-center !text-sm">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={categoryData === category.id}
                        onChange={() => onCategoryChange(category.id)}
                        className="mr-2 radio radio-neutral radio-xs"
                      />
                      {category.attributes.name}
                    </label>
                  ))}
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl">Marca</h3>
                  {brandsArray.map((brand) => (
                    <label key={brand.id} className="flex items-center !text-sm">
                      <input
                        type="radio"
                        name="brand"
                        value={brand.id}
                        checked={brandData === brand.id}
                        onChange={() => onBrandChange(brand.id)}
                        className="mr-2 radio radio-neutral radio-xs"
                      />
                      {brand.attributes.name}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="sm:w-3/4">
              <div className="sticky flex items-center top-0 z-[999] left-0 right-0 py-5 gap-4 bg-white">
                <h3 className="text-xl sr-only">Buscar Producto</h3>
                <TextInput
                  placeholder="Buscar..."
                  className="ml-auto md:w-max"
                  allowClear
                  value={searchData}
                  onValueChange={onSearchChange}
                  icon={HiMagnifyingGlass}
                />
                <Button
                  onClick={clearFilters}
                  disabled={searchData === '' && categoryData === 0 && brandData === 0}
                  className="border-transparent bg-primary"
                >
                  Limpiar Filtros
                </Button>
              </div>
              {filteredArray.length === 0 && !loading && (
                <header className="grid w-full h-20 max-w-screen-xl py-2 mx-auto bg-red-500 place-items-center">
                  <h3 className="w-full text-lg font-bold text-center text-white uppercase">
                    ¡Productos no Encontrados!
                  </h3>
                </header>
              )}
              {loading && <LoadingCard />}
              {!loading && (
                <ul className="grid grid-cols-2 gap-2 gap-y-8 md:grid-cols-4">
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
