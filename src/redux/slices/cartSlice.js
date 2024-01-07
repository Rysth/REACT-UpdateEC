import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

// Load cart items from sessionStorage if available
const loadCartItems = () => {
  const storedCartItems = sessionStorage.getItem('cartItems')
  return storedCartItems ? JSON.parse(storedCartItems) : []
}

const initialState = {
  cartItems: loadCartItems(),
  loading: false,
  error: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const { item, quantity } = action.payload
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.cartItems.push({ ...item, quantity })
      }
      toast.success('Añadido al Carrito', { theme: 'colored', autoClose: 1500 })
      // Save cart items to sessionStorage
      sessionStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeItemFromCart(state, action) {
      const itemID = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID)
      toast.info('Removido del Carrito', { theme: 'colored', autoClose: 1500 })
      // Save cart items to sessionStorage
      sessionStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    clearCart(state) {
      state.cartItems = []
      sessionStorage.removeItem('cartItems')
    },
    increaseQuantity(state, action) {
      const itemId = action.payload
      const existingItem = state.cartItems.find((item) => item.id === itemId)
      if (existingItem) {
        existingItem.quantity += 1
      }
      sessionStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload
      const existingItem = state.cartItems.find((item) => item.id === itemId)
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
      }
      sessionStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer
