import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/* Environment Variables */
const API_URL = import.meta.env.VITE_APP_URL
const API_KEY = import.meta.env.VITE_API_KEY

const initialState = {
  categoriesArray: [],
  filteredArray: [],
  loading: false,
  error: false,
}

// Categories - GET
export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`, {
      params: { 'filters[active][$eq]': 'true' },
      headers: { Authorization: `Bearer ${API_KEY}` },
    })
    return response.data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
})

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false
        state.categoriesArray = state.filteredArray = action.payload.data
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const categoryActions = categorySlice.actions
export default categorySlice.reducer
