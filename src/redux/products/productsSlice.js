import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchProducts = createAsyncThunk('fetch/fetchProducts', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      'http://localhost:1337/api/products?fields=name&fields=slug&fields=active&populate=values',
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

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
    });
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
