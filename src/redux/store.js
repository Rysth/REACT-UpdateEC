import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './slices/sessionSlice';
import categoryReducer from './slices/categorySlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
    category: categoryReducer,
  },
});

export default store;
