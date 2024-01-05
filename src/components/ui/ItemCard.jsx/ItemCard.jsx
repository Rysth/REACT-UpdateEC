import React, { useEffect, useState } from 'react'
import { Button } from 'flowbite-react'
import PropTypes from 'prop-types'
import { cartActions } from '../../../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'

function ItemCard({ product }) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(product.quantity)

  const handleRemove = () => {
    dispatch(cartActions.removeItemFromCart(product.id))
  }

  const handleIncrease = () => {
    if (quantity < product.attributes.quantity) dispatch(cartActions.increaseQuantity(product.id))
  }

  const handleDecrease = () => {
    if (quantity > 1) dispatch(cartActions.decreaseQuantity(product.id))
  }

  useEffect(() => {
    setQuantity(product.quantity)
  }, [product.quantity])

  return (
    <tr className="bg-white border-b hover:bg-gray-50 ">
      <td className="px-4 py-1">
        <a href={`/shop/${product.id}`}>
          <img
            src={product.attributes.picture.data.attributes.url}
            className="object-contain w-full h-20 max-w-full max-h-full "
            alt="Apple Watch"
          />
        </a>
      </td>
      <td className="px-4 py-1 font-semibold text-gray-900">
        <a href={`/shop/${product.id}`} className="truncate max-w-[18rem] inline-block">
          {product.attributes.name}
        </a>
      </td>
      <td className="px-4 py-1">
        <div className="flex items-center">
          <Button
            className="inline-flex items-center justify-center w-6 h-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full me-3 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
            type="button"
            color="light"
            onClick={handleDecrease}
          >
            <span className="sr-only">Quantity button</span>-
          </Button>
          <div>
            <input
              type="number"
              id="first_product"
              className="bg-gray-50 w-14 h-7 border rounded border-gray-300 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(0, Math.min(parseInt(e.target.value, 10), product.attributes.quantity)))
              }
              min={1}
              max={product.attributes.quantity}
              required
            />
          </div>
          <button
            className="inline-flex items-center justify-center w-6 h-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full ms-3 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
            type="button"
            onClick={handleIncrease}
          >
            <span className="sr-only">Quantity button</span>+
          </button>
        </div>
      </td>
      <td className="px-4 py-1 font-semibold text-gray-900 ">
        ${(product.attributes.price * product.quantity).toFixed(2)}
      </td>
      <td className="px-4 py-1">
        <Button color="failure" size="xs" onClick={handleRemove}>
          Eliminar
        </Button>
      </td>
    </tr>
  )
}

ItemCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ItemCard
