import { Button } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { HiPlusCircle } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../redux/slices/cartSlice'
import ProductCard from '../../../components/ui/ProductCard/ProductCard'

function ProductSection() {
  const dispatch = useDispatch()
  const { filteredArray, loading } = useSelector((store) => store.product)
  const [visibleQuantity, setVisibleQuantity] = useState(8)

  const showMoreProducts = () => {
    setVisibleQuantity(visibleQuantity + 8)
  }

  useEffect(() => {}, [visibleQuantity])

  if (loading) {
    return (
      <header className="grid w-full h-20 py-2 bg-purple place-items-center">
        <h3 className="w-full text-lg font-bold text-center uppercase">Cargando...</h3>
      </header>
    )
  }

  return (
    <div className="flex flex-col flex-1 gap-10">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {filteredArray.slice(0, visibleQuantity).map((product) => (
          <ProductCard product={product} />
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
          onClick={showMoreProducts}
        >
          Mostrar Más
        </button>
      </footer>
    </div>
  )
}

export default ProductSection
