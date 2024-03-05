import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/* Environment Variables */
const API_URL = import.meta.env.VITE_APP_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const fetchOrderProductDetails = createAsyncThunk('statistics/fetchOrderProductDetails', async () => {
  try {
    let page = 1 // Start with page 1
    let allData = []

    while (true) {
      const response = await axios.get(`${API_URL}/order-product-details`, {
        params: {
          populate: 'product,product.picture,product.category',
          'pagination[page]': page,
        },
        headers: { Authorization: `Bearer ${API_KEY}` },
      })

      const data = response.data
      allData = [...allData, ...data.data]

      // If the response length is less than the page size, break the loop
      if (data.data.length < 25) {
        break
      }

      // Increment the page for the next iteration
      page++
    }

    return allData
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

export const fetchOrderPayments = createAsyncThunk('statistics/fetchOrderPayments', async () => {
  try {
    // Calcular la fecha límite para obtener las órdenes con pagos en los últimos 30 días
    const currentDate = new Date()
    const thirtyDaysAgo = new Date(currentDate)
    thirtyDaysAgo.setDate(currentDate.getDate() - 30)

    // Formatear la fecha límite como cadena en el formato 'YYYY-MM-DD'
    const formattedDate = thirtyDaysAgo.toISOString().split('T')[0]

    // Realizar la solicitud para obtener las órdenes con pagos en los últimos 30 días
    const response = await axios.get(`${API_URL}/orders`, {
      params: {
        populate: 'payment_detail',
        'filters[date][$gte]': formattedDate,
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
    totalRevenueLast30Days: {},
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
        const data = { data: action.payload }
        state.orderProductDetails = data
      })
      .addCase(fetchCategoryProductDetails.fulfilled, (state, action) => {
        state.categoryProductDetails = action.payload
      })
      .addCase(fetchOrderPayments.fulfilled, (state, action) => {
        state.totalRevenueLast30Days = {} // Reiniciar el objeto totalRevenueLast30Days

        action.payload.data.forEach((order) => {
          const paymentDate = new Date(order.attributes.date)
          const formattedDate = paymentDate.toISOString().split('T')[0]
          state.totalRevenueLast30Days[formattedDate] = state.totalRevenueLast30Days[formattedDate] || 0
          state.totalRevenueLast30Days[formattedDate] += order.attributes.payment_detail.data.attributes.amount_paid
        })
      })
  },
})

export const { calculateTotalRevenue, calculateMostPurchasedProducts } = statisticSlice.actions

export default statisticSlice.reducer
