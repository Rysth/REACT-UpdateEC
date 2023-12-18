import PropTypes from 'prop-types'
import { HiTrash } from 'react-icons/hi2'
import { Button, TextInput } from 'flowbite-react'
import { useState } from 'react'

function CartItem({ item, onRemoveItem, onUpdateQuantity }) {
  const [quantity, setQuantity] = useState(item.quantity)

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10) || 0
    const updatedQuantity = Math.min(newQuantity, item.attributes.quantity) // Enforce the product's quantity limit
    setQuantity(updatedQuantity)
    onUpdateQuantity(item.id, updatedQuantity) // Update quantity in real-time
  }

  return (
    <div className="flex flex-wrap overflow-hidden border rounded-lg gap-x-3 sm:gap-y-4 h-28">
      <a href={`/shop/${item.id}`} className="relative block h-full overflow-hidden bg-gray-100 w-28 group">
        <img
          src={item.attributes.picture.data.attributes.url}
          loading="lazy"
          className="object-contain object-center w-full h-full transition duration-200 group-hover:scale-110"
        />
      </a>
      <div className="flex flex-col justify-between flex-1 px-2 py-4 lg:text-sm">
        <a
          href={`/shop/${item.id}`}
          className="block font-bold text-gray-800 uppercase transition duration-100 hover:text-gray-500"
        >
          {item.attributes.name}
        </a>

        <span className="flex items-center gap-2 text-xs text-gray-500">
          Cantidad:
          <TextInput
            type="number"
            size="sm"
            value={quantity}
            onChange={handleQuantityChange}
            className="text-xs"
            min={1}
            max={item.attributes.quantity} // Set max based on the product's quantity
          />
        </span>
        <footer className="flex items-center justify-between">
          <span className="block font-bold text-gray-800 md:text-lg">
            ${(item.quantity * item.attributes.price).toFixed(2)}
          </span>
          <Button
            type="button"
            color="failure"
            size="xs"
            className="inline-flex items-center justify-center px-0 my-0 text-2xl text-white rounded-lg"
            onClick={() => onRemoveItem(item.id)}
          >
            <HiTrash />
          </Button>
        </footer>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
}

export default CartItem
