import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingCard from '../../../components/ui/LoadingCard/LoadingCard'
import ProductCard from '../../../components/ui/ProductCard/ProductCard'
import { fetchProducts } from '../../../redux/slices/productSlice'
import { Button } from 'flowbite-react'

function ProductSection() {
  const dispatch = useDispatch()
  const { filteredArray, loading, isFiltered } = useSelector((store) => store.product)
  const [currentPage, setCurrentPage] = useState(1)

  const loadMoreProducts = () => {
    setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    dispatch(fetchProducts(currentPage))
  }, [currentPage, dispatch])

  if (loading) {
    return <LoadingCard />
  }

  if (filteredArray.length === 0) {
    return (
      <header className="grid w-full h-20 py-2 bg-red-500 place-items-center">
        <h3 className="w-full text-lg font-bold text-center uppercase">¡Productos no Encontrados!</h3>
      </header>
    )
  }

  return (
    <div className="flex flex-col flex-1 gap-10">
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
    </div>
  )
}

export default ProductSection
