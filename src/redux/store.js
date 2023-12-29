import { configureStore } from '@reduxjs/toolkit'
import sessionReducer from './slices/sessionSlice'
import categoryReducer from './slices/categorySlice'
import brandReducer from './slices/brandSlice'
import productReducer from './slices/productSlice'
import cartReducer from './slices/cartSlice'
import reviewReducer from './slices/reviewSlice'

const store = configureStore({
  reducer: {
    session: sessionReducer,
    category: categoryReducer,
    brand: brandReducer,
    product: productReducer,
    cart: cartReducer,
    review: reviewReducer,
  },
})

export default store
