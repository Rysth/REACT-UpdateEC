import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Zoom from 'react-medium-image-zoom'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { findProduct } from '../../redux/slices/productSlice'
import NotFound from '../404/NotFound'
import { cartActions } from '../../redux/slices/cartSlice'

function Product() {
  const dispatch = useDispatch()
  const { productID } = useParams()
  const { foundProduct } = useSelector((store) => store.product)

  const handleAddToCart = () => {
    // Assuming foundProduct has the required details
    dispatch(cartActions.addItemToCart({ item: foundProduct, quantity: 1 }))
  }

  useEffect(() => {
    dispatch(findProduct(productID))
  }, [dispatch, productID])

  if (!foundProduct) {
    return <NotFound />
  }

  return (
    <section className="relative text-white">
      <article className="grid max-w-screen-xl gap-5 px-4 py-5 mx-auto sm:py-12 sm:grid-cols-2">
        <Zoom zoomMargin={60}>
          <picture className=" h-[300px] sm:h-[450px] lg:h-[550px] bg-white">
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
          <p className="sm:mt-5  text-xs sm:text-base max-h-[15rem] overflow-auto">
            {foundProduct.attributes.description}
          </p>
          <footer className="flex items-center gap-5 mt-5">
            <button
              type="button"
              className="flex items-center justify-center flex-1 w-full gap-2 p-3 px-4 text-xs sm:text-sm bg-purple md:hover:scale-105 md:transition md:active:scale-95 "
              onClick={handleAddToCart}
            >
              <FaShoppingCart />
              Añadir al Carrito
            </button>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="p-2.5 text-xs sm:text-sm text-black"
              defaultValue={1}
              min={1}
              max={foundProduct.attributes.quantity}
            />
          </footer>
        </main>
      </article>
    </section>
  )
}

export default Product
