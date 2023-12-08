import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../../helpers/connection';

const initialState = {
  productsArray: [],
  filteredArray: [],
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
        params: {
          'filters[active][$eq]': 'true',
          populate: 'picture,brand,category',
        },
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
  reducers: {
    searchProduct(state, action) {
      const searchData = action.payload.trim();

      if (!searchData) {
        state.filteredArray = state.productsArray;
        return;
      }
      /* eslint-disable */
      state.filteredArray = state.productsArray.filter((element) =>
        element.attributes.name.toLowerCase().includes(searchData),
      );
    },
    filterProducts(state, action) {
      const { categoryIDs, brandIDs } = action.payload;
      if (
        (!categoryIDs || categoryIDs.length === 0) &&
        (!brandIDs || brandIDs.length === 0)
      ) {
        // If no category or brand IDs are provided, set filteredArray to the entire productsArray
        state.filteredArray = state.productsArray;
        return;
      }

      /* eslint-disable */
      state.filteredArray = state.productsArray.filter((element) => {
        const categoryMatch =
          !categoryIDs.length ||
          categoryIDs.includes(element.attributes.category.data.id);
        const brandMatch =
          !brandIDs.length ||
          brandIDs.includes(element.attributes.brand.data.id);

        return categoryMatch && brandMatch;
      });
    },
    searchAndFilterProducts(state, action) {
      const { searchData, categoryIDs, brandIDs } = action.payload;

      if (
        (!categoryIDs || categoryIDs.length === 0) &&
        (!brandIDs || brandIDs.length === 0) &&
        !searchData
      ) {
        // If no category, brand, or search data is provided, set filteredArray to the entire productsArray
        state.filteredArray = state.productsArray;
        return;
      }

      /* eslint-disable */
      state.filteredArray = state.productsArray.filter((element) => {
        const categoryMatch =
          !categoryIDs.length ||
          categoryIDs.includes(element.attributes.category.data.id);
        const brandMatch =
          !brandIDs.length ||
          brandIDs.includes(element.attributes.brand.data.id);
        const searchMatch =
          !searchData ||
          element.attributes.name.toLowerCase().includes(searchData);

        return categoryMatch && brandMatch && searchMatch;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productsArray = action.payload.data;
        state.filteredArray = state.productsArray;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
