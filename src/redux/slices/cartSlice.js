import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

// Load cart items from localStorage if available
const loadCartItems = () => {
  const storedCartItems = localStorage.getItem('cartItems')
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
      toast.info('Añadido al Carrito', { theme: 'colored' })
      // Save cart items to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeItemFromCart(state, action) {
      const itemID = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID)
      toast.info('Removido del Carrito', { theme: 'colored' })
      // Save cart items to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer
