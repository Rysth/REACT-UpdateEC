import React from 'react'
import { Button } from 'flowbite-react'
import PropTypes from 'prop-types'

function ItemCard({ product }) {
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
      <td className="px-4 py-1 font-semibold text-gray-900 truncate">
        <a href={`/shop/${product.id}`}>{product.attributes.name}</a>
      </td>
      <td className="px-4 py-1">
        <div className="flex items-center">
          <button
            className="inline-flex items-center justify-center w-6 h-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full me-3 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
            type="button"
          >
            <span className="sr-only">Quantity button</span>-
          </button>
          <div>
            <input
              type="number"
              id="first_product"
              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
              placeholder="1"
              value={product.quantity}
              required
            />
          </div>
          <button
            className="inline-flex items-center justify-center w-6 h-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full ms-3 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
            type="button"
          >
            <span className="sr-only">Quantity button</span>+
          </button>
        </div>
      </td>
      <td className="px-4 py-1 font-semibold text-gray-900 ">${product.attributes.price * product.quantity}</td>
      <td className="px-4 py-1">
        <Button color="failure" size="xs">
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
