import { Badge, Button } from 'flowbite-react'
import React, { useState } from 'react'
import { HiShoppingBag } from 'react-icons/hi2'
import Markdown from 'react-markdown'
import Zoom from 'react-medium-image-zoom'
import { useSelector } from 'react-redux'
import useAddToCart from '../../../hooks/useAddToCart'

function ProductPreview() {
  const { foundProduct } = useSelector((store) => store.product)
  const { isAdding, handleAddToCart } = useAddToCart(foundProduct)
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => {
    if (quantity < foundProduct.attributes.quantity) setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const isAddToCartDisabled = quantity <= 0 || quantity > foundProduct.attributes.quantity || isAdding
  return (
    <article className="max-w-screen-xl gap-2 px-4 py-5 mx-auto space-y-2 sm:grid sm:grid-cols-2 sm:py-12">
      <Zoom zoomMargin={60}>
        <picture className="w-full h-[300px] sm:h-[450px] lg:h-[560px] bg-white border rounded sm:flex-1">
          <img
            src={foundProduct.attributes.picture.data.attributes.url}
            alt={foundProduct.name}
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </picture>
      </Zoom>
      <main className="flex flex-col gap-5 md:pl-10 ">
        <header className="space-y-1 sm:space-y-4">
          <h2 className="text-lg font-bold uppercase sm:text-xl md:text-3xl">{foundProduct.attributes.name}</h2>
          <p className="text-sm">
            Stock: <span className="text-violet-700">{foundProduct.attributes.quantity} unidades disponibles</span>
          </p>
          <hr className="block h-1 bg-gray-200 rounded" />
        </header>
        <main className="space-y-5">
          <div className="flex flex-wrap gap-1">
            <Badge
              className="max-w-max"
              color="indigo"
            >{`Categoría: ${foundProduct.attributes.category.data.attributes.name}`}</Badge>
            <Badge
              className="max-w-max"
              color="blue"
            >{`Marca: ${foundProduct.attributes.brand.data.attributes.name}`}</Badge>
          </div>
          <h2 className="my-3 text-xl font-bold uppercase truncate text-violet-700 md:text-3xl">
            ${foundProduct.attributes.price}
          </h2>
          <div className="text-xs sm:text-sm max-h-[15rem] overflow-hidden">
            <Markdown>{foundProduct.attributes.description}</Markdown>
          </div>
        </main>
        <footer className="flex items-center gap-5 mt-auto sm:flex-row">
          <div className="flex items-center border border-gray-200 rounded">
            <Button
              className="w-5 h-10 leading-10 text-gray-700 transition bg-transparent border-none hover:opacity-75"
              color="light"
              onClick={decreaseQuantity}
            >
              -
            </Button>
            <input
              type="number"
              id="quantity"
              value={quantity || ''}
              onChange={(e) =>
                setQuantity(Math.max(0, Math.min(parseInt(e.target.value, 10), foundProduct.attributes.quantity)))
              }
              min={1}
              max={foundProduct.attributes.quantity}
              className="h-5 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            />
            <Button
              className="w-5 h-10 leading-10 text-gray-700 transition bg-transparent border-none hover:opacity-75"
              color="light"
              onClick={increaseQuantity}
            >
              +
            </Button>
          </div>
          <Button
            type="button"
            color="blue"
            className="w-3/4 gap-1 rounded bg-violet-700"
            onClick={() => handleAddToCart(quantity)}
            disabled={isAddToCartDisabled}
          >
            <HiShoppingBag className="mr-1" />
            Añadir al Carrito
          </Button>
        </footer>
      </main>
    </article>
  )
}

export default ProductPreview
