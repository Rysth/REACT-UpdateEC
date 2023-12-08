import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../../helpers/connection';

const initialState = {
  productsArray: [],
  loading: false,
  error: false,
};

// Brands - GET
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY_UPDATEEC;
      const response = await axios.get(`${API_URL}/products`, {
        params: { 'filters[active][$eq]': 'true', populate: 'picture' },
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productsArray = action.payload.data;
        console.log(state.productsArray);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
