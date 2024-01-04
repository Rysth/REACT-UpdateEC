import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'flowbite-react'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../redux/slices/cartSlice'
import { toast } from 'react-toastify'

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    toast.info('Añadiendo...', { theme: 'colored', autoClose: 1000 })
    setTimeout(() => {
      dispatch(
        cartActions.addItemToCart({
          item: product, // Pass the product as the item
          quantity: 1, // Assuming adding one item at a time
        }),
      )
      setIsAdding(false)
    }, 2000)
  }

  return (
    <div className="relative group">
      <a
        href={`/shop/${product.id}`}
        className="relative z-20 block p-2 border border-gray-100 rounded-lg shadow-xl group lg:mx-2 shadow-black/5"
      >
        <picture className="h-auto overflow-hidden max-h-72">
          <img
            src={product.attributes.picture.data.attributes.url}
            alt={product.attributes.name}
            className="object-contain w-full h-full transition duration-500 group-hover:scale-110"
          />
        </picture>
        <header className="px-4 py-3 space-y-1 text-center">
          <h2 className="uppercase truncate transition duration-300 group-hover:text-violet-800">
            {product.attributes.name}
          </h2>
          <p className="font-semibold uppercase truncate text-violet-700 group-hover:text-violet-80">
            ${product.attributes.price}
          </p>
        </header>
      </a>
      <Button
        size="xs"
        className="absolute !z-30 mx-auto opacity-0 top-4 right-4 group-hover:opacity-100 hover:scale-105 transition active:scale-95"
        color="light"
        onClick={handleAddToCart}
        disabled={isAdding}
      >
        <HiOutlineShoppingBag className="mr-1 text-xl" />
        Añadir
      </Button>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard
