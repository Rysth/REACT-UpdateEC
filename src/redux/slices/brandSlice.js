import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../../helpers/connection';

const initialState = {
  brandsArray: [],
  loading: false,
  error: false,
};

// Brands - GET
export const fetchBrands = createAsyncThunk('brand/fetchBrands', async () => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY_UPDATEEC;
    const response = await axios.get(`${API_URL}/brands`, {
      params: { 'filters[active][$eq]': 'true' },
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
});

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brandsArray = action.payload.data;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const brandActions = brandSlice.actions;

export default brandSlice.reducer;
