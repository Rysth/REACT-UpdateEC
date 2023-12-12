import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: [],
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
    },
    removeItemFromCart(state, action) {
      const itemID = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID)
      toast.info('Removido del Carrito', { theme: 'colored' })
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer
