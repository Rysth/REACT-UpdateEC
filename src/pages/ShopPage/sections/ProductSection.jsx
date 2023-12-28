import { Button } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { HiPlusCircle } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../redux/slices/cartSlice'

function ProductSection() {
  const dispatch = useDispatch()
  const { filteredArray, loading } = useSelector((store) => store.product)
  const [visibleQuantity, setVisibleQuantity] = useState(8)
  const { foundProduct } = useSelector((store) => store.product)

  const handleAddToCart = () => {
    dispatch(cartActions.addItemToCart({ item: foundProduct, quantity: 1 }))
  }

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
          <li key={product.id} className="relative group">
            <a href={`/shop/${product.id}`} className="block w-full">
              <picture className="h-[175px] lg:h-[240px] border border-gray-200">
                <img
                  src={product.attributes.picture.data.attributes.url}
                  alt={product.name}
                  className="object-contain w-full h-full bg-white "
                  loading="lazy"
                />
              </picture>
              <header className="grid p-2 bg-purple">
                <h3 className="text-lg font-bold truncate max-w-[20rem] uppercase">{product.attributes.name}</h3>
                <p className="text-sm">{`$${product.attributes.price}`}</p>
              </header>
            </a>
            <Button
              pill
              size="xs"
              className="absolute z-10 md:opacity-0 right-3 top-3 md:group-hover:opacity-100"
              color="blue"
              onClick={handleAddToCart}
            >
              <HiPlusCircle className="text-2xl" />
              <span className="sr-only">Añadir</span>
            </Button>
          </li>
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
