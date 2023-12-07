import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../../helpers/connection';

const initialState = {
  categoriesArray: [],
  loading: false,
  error: false,
};

// Categories - GET
export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY_UPDATEEC;
      const response = await axios.get(`${API_URL}/categories`, {
        params: { 'filters[active][$eq]': 'true' },
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(`Error: ${error.message}`);
    }
  },
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categoriesArray = action.payload.data;
        console.log(state.categoriesArray);
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
