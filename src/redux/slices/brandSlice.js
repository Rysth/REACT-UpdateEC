import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/* Environment Variables */
const API_URL = import.meta.env.VITE_APP_URL
const API_KEY = import.meta.env.VITE_API_KEY

const initialState = {
  brandsArray: [],
  filteredArray: [],
  loading: false,
  error: false,
}

// Brands - GET
export const fetchBrands = createAsyncThunk('brand/fetchBrands', async () => {
  try {
    const response = await axios.get(`${API_URL}/brands`, {
      params: { 'filters[active][$eq]': 'true' },
      headers: { Authorization: `Bearer ${API_KEY}` },
    })
    return response.data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
})

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false
        state.brandsArray = state.filteredArray = action.payload.data
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const brandActions = brandSlice.actions
export default brandSlice.reducer
