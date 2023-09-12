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

export const fetchCategories = createAsyncThunk(
  'fetch/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:1337/api/categories?fields=name');
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const productsExists = JSON.parse(localStorage.getItem('productsArray'));
const categoriesExists = JSON.parse(localStorage.getItem('categoriesArray'));

const initialState = {
  productsArray: productsExists || [],
  categoriesArray: categoriesExists || [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productsArray = action.payload;
      localStorage.setItem('productsArray', JSON.stringify(action.payload));
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categoriesArray = action.payload;
      localStorage.setItem('categoriesArray', JSON.stringify(action.payload));
    });
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
