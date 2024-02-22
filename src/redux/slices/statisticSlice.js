import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/* Environment Variables */
const API_URL = import.meta.env.VITE_APP_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const fetchOrderProductDetails = createAsyncThunk('statistics/fetchOrderProductDetails', async () => {
  try {
    const response = await axios.get(`${API_URL}/order-product-details`, {
      params: {
        populate: 'product,product.picture',
      },
      headers: { Authorization: `Bearer ${API_KEY}` },
    })
    return response.data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
})

export const fetchCategoryProductDetails = createAsyncThunk('statistics/fetchCategoryProductDetails', async () => {
  try {
    const response = await axios.get(`${API_URL}/order-product-details`, {
      params: {
        populate: 'product.category',
      },
      headers: { Authorization: `Bearer ${API_KEY}` },
    })
    return response.data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
})

const statisticSlice = createSlice({
  name: 'statistics',
  initialState: {
    orderProductDetails: [],
    categoryProductDetails: [],
    totalRevenue: 0,
    mostPurchasedProducts: [],
  },
  reducers: {
    calculateTotalRevenue: (state, action) => {
      state.totalRevenue = action.payload.reduce((total, detail) => total + detail.product.price, 0)
    },
    calculateMostPurchasedProducts: (state, action) => {
      const productCountMap = new Map()
      action.payload.forEach((detail) => {
        const productId = detail.product._id
        if (productCountMap.has(productId)) {
          productCountMap.set(productId, productCountMap.get(productId) + 1)
        } else {
          productCountMap.set(productId, 1)
        }
      })
      state.mostPurchasedProducts = [...productCountMap.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([productId, count]) => ({ productId, count }))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderProductDetails.fulfilled, (state, action) => {
        state.orderProductDetails = action.payload
      })
      .addCase(fetchCategoryProductDetails.fulfilled, (state, action) => {
        console.log(action.payload)
        state.categoryProductDetails = action.payload
      })
  },
})

export const { calculateTotalRevenue, calculateMostPurchasedProducts } = statisticSlice.actions

export default statisticSlice.reducer
