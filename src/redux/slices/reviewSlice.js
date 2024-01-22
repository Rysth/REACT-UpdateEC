import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

/* Environment Variables */
const API_URL = import.meta.env.VITE_APP_URL
const API_KEY = import.meta.env.VITE_API_KEY

const initialState = {
  reviewsArray: [],
  filteredArray: [],
  loading: false,
  error: false,
}

// Reviews - GET
export const fetchReviews = createAsyncThunk('review/fetchReviews', async (productID) => {
  try {
    const response = await axios.get(`${API_URL}/reviews`, {
      params: { 'filters[product][id][$eq]': productID, populate: 'user' },
      headers: { Authorization: `Bearer ${API_KEY}` },
    })
    return response.data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
})

// Reviews - POST
export const createReview = createAsyncThunk('review/createReview', async (reviewData, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      `${API_URL}/reviews`,
      { data: reviewData },
      {
        headers: { Authorization: `Bearer ${API_KEY}` },
      },
    )
    return response.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false
        state.reviewsArray = state.filteredArray = action.payload.data
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(createReview.fulfilled, () => {
        toast.success('Reseña Envíada')
      })
  },
})

export const reviewActions = reviewSlice.actions
export default reviewSlice.reducer
