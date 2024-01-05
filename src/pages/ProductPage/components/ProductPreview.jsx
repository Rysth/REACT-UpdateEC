import { Badge, Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Zoom from 'react-medium-image-zoom'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../redux/slices/cartSlice'

function ProductCard() {
  const dispatch = useDispatch()
  const { foundProduct } = useSelector((store) => store.product)
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    if (quantity > 0 && quantity <= foundProduct.attributes.quantity) {
      dispatch(cartActions.addItemToCart({ item: foundProduct, quantity }))
    }
  }
  return (
    <article className="grid max-w-screen-xl gap-2 px-4 py-5 mx-auto sm:py-12 sm:grid-cols-2">
      <Zoom zoomMargin={60}>
        <picture className=" h-[300px] sm:h-[450px] lg:h-[600px] bg-white border">
          <img
            src={foundProduct.attributes.picture.data.attributes.url}
            alt={foundProduct.name}
            className="object-contain w-full h-full"
            loading="lazy"
          />
        </picture>
      </Zoom>
      <main className="flex flex-col justify-between gap-5 md:px-10">
        <header className="grid gap-1">
          <h2 className="text-lg font-bold uppercase truncate sm:text-xl md:text-4xl">
            {foundProduct.attributes.name}
          </h2>
          <h3 className="text-sm sm:text-xl md:text-2xl">{`$${foundProduct.attributes.price}`}</h3>
        </header>
        <main>
          <div className="flex flex-wrap gap-1">
            <Badge
              className="max-w-max"
              color="indigo"
            >{`Categoría: ${foundProduct.attributes.category.data.attributes.name}`}</Badge>
            <Badge
              className="max-w-max"
              color={`${foundProduct.attributes.quantity < 5 ? 'purple' : 'blue'}`}
            >{`Disponibles: ${foundProduct.attributes.quantity}`}</Badge>
          </div>
          <p className="sm:mt-5  text-xs sm:text-base max-h-[15rem] overflow-auto">
            {foundProduct.attributes.description}
          </p>
        </main>

        <footer className="flex items-center gap-5 mt-5">
          <Button type="button" color="dark" className="w-3/4 gap-1 rounded-none bg-purple" onClick={handleAddToCart}>
            <FaShoppingCart className="mr-1" />
            Añadir al Carrito
          </Button>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="p-2.5 text-xs sm:text-sm text-black"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(0, Math.min(parseInt(e.target.value, 10), foundProduct.attributes.quantity)))
            }
            min={1}
            max={foundProduct.attributes.quantity}
          />
        </footer>
      </main>
    </article>
  )
}

export default ProductCard
