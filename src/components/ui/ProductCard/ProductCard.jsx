import React from 'react'
import PropTypes from 'prop-types'

function ProductCard({ product }) {
  return (
    <li key={product.id} className="relative group">
      <a href={`/shop/${product.id}`} className="block w-full">
        <picture className="h-[175px] lg:h-[240px] border border-gray-200 overflow-hidden">
          <img
            src={product.attributes.picture.data.attributes.url}
            alt={product.name}
            className="object-contain w-full h-full transition bg-white md:hover:scale-105"
            loading="lazy"
          />
        </picture>
        <header className="grid p-2 text-white bg-purple">
          <h3 className="text-lg font-bold truncate max-w-[20rem] uppercase">{product.attributes.name}</h3>
          <p className="text-sm">{`$${product.attributes.price}`}</p>
        </header>
      </a>
    </li>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard
