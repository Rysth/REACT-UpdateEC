import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './slices/sessionSlice';
import categoryReducer from './slices/categorySlice';
import brandReducer from './slices/brandSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
    category: categoryReducer,
    brand: brandReducer,
  },
});

export default store;
