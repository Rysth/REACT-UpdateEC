import { Badge } from 'flowbite-react'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import useAddToCart from '../../../hooks/useAddToCart'

function ProductCard({ product }) {
  const [productQuantity, setProductQuantity] = useState(product.attributes.quantity)
  const { isAdding, handleAddToCart } = useAddToCart(product)

  const getFirstThreeWords = (str) => {
    return str.split(' ').slice(0, 3).join(' ')
  }

  useEffect(() => {
    setProductQuantity()
  }, [])

  return (
    <div className="relative group animate__animated animate__fadeIn">
      {console.log(product)}
      <a
        href={`/shop/${product.attributes.category.data.attributes.name.toLowerCase()}/${product.id}`}
        className="relative z-20 block border border-gray-100 rounded-lg shadow-xl group lg:mx-2 shadow-black/5"
      >
        <picture className="h-auto overflow-hidden bg-gray-100 max-h-72">
          <img
            src={product.attributes.picture.data.attributes.url}
            alt={product.attributes.name}
            className={`object-contain w-full h-full transition duration-500 sm:group-hover:scale-110 ${
              isAdding && 'pointer-events-none grayscale'
            }`}
            loading="lazy"
          />
        </picture>
        <header className="p-2 px-4 py-3">
          <h2 className="text-sm font-bold uppercase truncate transition duration-300 group-hover:text-violet-700">
            {getFirstThreeWords(product.attributes.name)}
          </h2>
          <p className="text-sm font-semibold uppercase truncate text-violet-700">${product.attributes.price}</p>
        </header>
      </a>
      {productQuantity === 0 && product && (
        <Badge
          size="xs"
          className="absolute !z-30 mx-auto top-4 left-4"
          color="failure"
          disabled={productQuantity === 0}
        >
          Fuera de Stock
        </Badge>
      )}
      {productQuantity !== 0 && (
        <button
          className={`absolute !z-30 mx-auto sm:opacity-0 top-4 right-4 sm:group-hover:opacity-100 btn btn-sm btn-primary text-white btn-outline bg-white text-xs ${
            isAdding && 'pointer-events-none !opacity-50'
          }`}
          color="light"
          onClick={() => handleAddToCart(1)}
          disabled={isAdding}
        >
          <HiOutlineShoppingBag className="text-xl" />
          Añadir
        </button>
      )}
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard
