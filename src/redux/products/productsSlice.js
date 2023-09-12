import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'fetch/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'http://localhost:1337/api/products?populate=values&populate=image&fields',
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const productsExists = JSON.parse(localStorage.getItem('productsArray'));

const initialState = {
  productsArray: productsExists || [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productsArray = action.payload;
      localStorage.setItem('producstArray', JSON.stringify(action.payload));
    });
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
