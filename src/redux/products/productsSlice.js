import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'fetch/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'http://localhost:1337/api/products?populate=values&populate=image&populate=category',
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

/* const productsExists = JSON.parse(localStorage.getItem('productsArray'));
const categoriesExists = JSON.parse(localStorage.getItem('categoriesArray')); */

const initialState = {
  productsArray: [],
  productsQuantity: 0,
  categoriesArray: [],
  categorySelected: '',
  filteredArray: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProductsByCategory(state, action) {
      const ID = action.payload;
      if (ID === 5) {
        state.filteredArray = state.productsArray;
        state.categorySelected = 'Productos';
        state.productsQuantity = state.productsArray.length;
        return;
      }
      state.filteredArray = state.productsArray.filter(
        (product) => product.attributes.category.data.id === ID,
      );
      state.productsQuantity = state.filteredArray.length;
      state.categorySelected = state.categoriesArray.find((category) => category.id === ID);
      state.categorySelected = state.categorySelected.attributes.name;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productsArray = action.payload;
      state.filteredArray = action.payload;
      state.categorySelected = 'Productos';
      state.productsQuantity = state.productsArray.length;
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
