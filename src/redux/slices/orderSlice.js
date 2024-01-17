import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

/* Environment Variables */
const API_URL = import.meta.env.VITE_APP_URL
const API_KEY = import.meta.env.VITE_API_KEY

const initialState = {
  ordersOriginal: [],
  ordersArray: [],
  orderSelected: null,
  loading: true,
  error: false,
}

// Orders - GET
export const fetchOrders = createAsyncThunk('order/fetchOrders', async (userID) => {
  try {
    const response = await axios.get(`${API_URL}/orders`, {
      params: {
        'filters[user][id][$eq]': userID,
        populate: 'payment_detail,order_status,order_product_details.product,user',
        sort: 'createdAt:desc',
      },
      headers: { Authorization: `Bearer ${API_KEY}` },
    })
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error(`Error: ${error.message}`)
  }
})

// Orders - POST
export const createOrder = createAsyncThunk('order/createOrder', async ({ orderData, paymentData }) => {
  try {
    // First, save the payment details
    const orderID = await axios
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
        return orderResponse.data.data.id
      })

    for (const detail of orderData.orderProductDetails) {
      await axios.post(
        `${API_URL}/order-product-details`,
        {
          data: {
            order: orderID,
            product: detail.productId,
            quantity: detail.quantity,
            subtotal: detail.subtotal,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        },
      )
    }

    return true
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
})

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    searchOrder(state, action) {
      const searchData = action.payload.trim().toLowerCase()

      if (!searchData) {
        state.ordersArray = state.ordersOriginal
        return
      }

      state.ordersArray = state.ordersOriginal.filter((element) =>
        element.attributes.payment_detail.data.attributes.payment_id.toLowerCase().includes(searchData),
      )
    },
    setOrderSelected(state, action) {
      const orderID = action.payload
      state.orderSelected = state.ordersOriginal.find((element) => element.id === orderID)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, () => {
        toast.info('Generando orden...', { theme: 'colored', autoClose: 1000 })
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.loading = false
        toast.success('¡Orden Generada!', { theme: 'colored' })
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false
        state.ordersArray = state.ordersOriginal = action.payload.data
        console.log(state.ordersArray)
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const orderActions = orderSlice.actions

export default orderSlice.reducer
