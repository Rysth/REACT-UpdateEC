import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../utils/NavigationUtils';

// Define async thunks
export const fetchProducts = createAsyncThunk(
  'fetch/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/api/products`, {
        params: {
          fields: 'name',
          populate: 'values,image,category',
          'filters[active][$eq]': true,
        },
      });
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
      const response = await axios.get(`${API_URL}/api/categories`, {
        params: {
          fields: ['id', 'name'],
          'filters[active][$eq]': true,
        },
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
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
      state.categorySelected = state.categoriesArray.find(
        (category) => category.id === ID,
      );
      state.categorySelected = state.categorySelected.attributes.name;
    },
    filterProductsByName(state, action) {
      const name = action.payload;
      state.categorySelected = 'Productos';
      if (name === '') {
        state.productsQuantity = state.productsArray.length;
        state.filteredArray = state.productsArray;
        return;
      }
      /* eslint-disable */
      state.filteredArray = state.productsArray.filter((product) =>
        product.attributes.name.toUpperCase().includes(name),
      );
      /* eslint-enable */
      state.productsQuantity = state.filteredArray.length;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productsArray = action.payload;
      state.filteredArray = action.payload;
      state.categorySelected = 'Productos';
      state.productsQuantity = state.productsArray.length;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categoriesArray = action.payload;
    });
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
