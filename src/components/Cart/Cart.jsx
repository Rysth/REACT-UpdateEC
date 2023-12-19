import PropTypes from 'prop-types'
import { Button } from 'flowbite-react'
import { HiXMark } from 'react-icons/hi2'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { Link } from 'react-router-dom'

function Cart({ closeCart }) {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)

  const handleRemoveItem = (itemID) => {
    dispatch(cartActions.removeItemFromCart(itemID))
  }

  // Function to handle clearing the cart
  const handleClearCart = () => {
    dispatch(cartActions.clearCart())
  }

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.attributes.price, 0)
  }

  // Function to update quantity
  const handleUpdateQuantity = (itemID, newQuantity) => {
    // Dispatch an action to update the quantity in the Redux store
    dispatch(cartActions.updateQuantity({ itemID, newQuantity }))
  }

  return (
    <div
      className="fixed top-0 right-0 z-50 flex flex-col w-full h-screen p-4 overflow-y-auto transition-transform bg-white sm:w-96 dark:bg-gray-800 animate__animated animate__fadeInRight"
      aria-labelledby="drawer-right-label"
    >
      <header className="flex items-center justify-between mb-4">
        <h5 className="inline-flex items-center text-2xl font-semibold text-slate-900">Carrito</h5>
        <Button
          type="button"
          color="failure"
          size="xs"
          onClick={closeCart}
          className="px-0 my-0 text-2xl text-white"
          pill
        >
          <HiXMark />
        </Button>
      </header>
      <div className="flex flex-col flex-1 gap-4 overflow-y-auto">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemoveItem={handleRemoveItem} onUpdateQuantity={handleUpdateQuantity} />
        ))}
      </div>
      <footer className="flex flex-col justify-end">
        <main className="my-5">
          <p className="text-sm text-end sm:text-xl">
            Subtotal: <span className="text-xl font-bold sm:text-2xl">${calculateSubtotal().toFixed(2)}</span>
          </p>
        </main>
        <div className="flex items-center justify-between gap-2">
          <Button size="sm" className="flex-1 float-right" color="blue" disabled={cartItems.length === 0} as={Link}>
            Pagar
          </Button>
          <Button
            size="sm"
            className="float-right"
            color="dark"
            onClick={handleClearCart}
            disabled={cartItems.length === 0}
          >
            Limpiar Carrito
          </Button>
        </div>
      </footer>
    </div>
  )
}

Cart.propTypes = {
  closeCart: PropTypes.func.isRequired,
}

export default Cart