import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../../components/ui/ProductCard/ProductCard'
import { fetchProducts } from '../../../redux/slices/productSlice'

function ProductSection() {
  const dispatch = useDispatch()
  const { filteredArray, loading } = useSelector((store) => store.product)
  const [currentPage, setCurrentPage] = useState(1)

  const loadMoreProducts = () => {
    setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    dispatch(fetchProducts(currentPage))
  }, [currentPage, dispatch])

  if (loading) {
    return (
      <header className="grid w-full h-20 py-2 bg-purple place-items-center">
        <h3 className="w-full text-lg font-bold text-center text-white uppercase">Cargando...</h3>
      </header>
    )
  }

  return (
    <div className="flex flex-col flex-1 gap-10">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {filteredArray.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
        {filteredArray.length === 0 && (
          <li className="col-span-5">
            <header className="grid h-20 py-2 bg-red-500 place-items-center">
              <h3 className="w-full text-lg font-bold text-center uppercase">¡Productos no Encontrados!</h3>
            </header>
          </li>
        )}
      </ul>
      <footer className="grid place-items-center">
        <button
          type="button"
          className="float-right p-3 px-4 text-xs text-center rounded-full bg-purple md:hover:scale-105 md:transition md:active:scale-95"
          onClick={loadMoreProducts}
        >
          Mostrar Más
        </button>
      </footer>
    </div>
  )
}

export default ProductSection
