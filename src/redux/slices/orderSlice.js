import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

/* Environment Variables */
const API_URL = import.meta.env.VITE_APP_URL
const API_KEY = import.meta.env.VITE_API_KEY

const initialState = {
  loading: true,
  error: false,
}

// Orders - POST
export const createOrder = createAsyncThunk('order/createOrder', async ({ orderData, paymentData }) => {
  try {
    // First, save the payment details
    await axios
      .post(
        `${API_URL}/payment-details`,
        { data: paymentData },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        },
      )
      .then((paymentResponse) => {
        const paymentDetailId = paymentResponse.data.data.id
        const orderDataWithPaymentDetail = {
          ...orderData,
          payment_detail: paymentDetailId,
        }
        console.log(orderDataWithPaymentDetail)
        return axios.post(
          `${API_URL}/orders`,
          { data: orderDataWithPaymentDetail },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${API_KEY}`,
            },
          },
        ) // return the next promise
      })
      .then((orderResponse) => {
        return orderResponse.data // final data to return
      })
  } catch (error) {
    const data = error.response.data
    console.log(data)
    throw new Error(`Error: ${error.message}`)
  }
})

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, () => {
        toast.info('Generando orden...', { theme: 'colored' })
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.loading = false
        toast.success('¡Orden Generada!', { theme: 'colored' })
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const orderActions = orderSlice.actions

export default orderSlice.reducer
