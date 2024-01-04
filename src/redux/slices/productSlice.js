import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/* Environment Variables */
const API_URL = import.meta.env.VITE_APP_URL
const API_KEY = import.meta.env.VITE_API_KEY

const initialState = {
  productsArray: [],
  filteredArray: [],
  lastestProducts: [],
  foundProduct: null,
  loading: false,
  error: false,
}

const fetchProductsConfig = {
  params: {
    'filters[active][$eq]': 'true',
    populate: 'picture,brand,category',
  },
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
}

// Products - GET
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  try {
    const response = await axios.get(`${API_URL}/products`, fetchProductsConfig)
    return response.data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
})

// Products - GET
export const fetchLastestProducts = createAsyncThunk('product/fetchLastestProducts', async () => {
  try {
    const fetchLastestProductsConfig = {
      ...fetchProductsConfig,
      params: {
        ...fetchProductsConfig.params,
        'pagination[limit]': 10,
        sort: 'createdAt:desc', // Limit results to 5
      },
    }
    const response = await axios.get(`${API_URL}/products`, fetchLastestProductsConfig)
    return response.data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
})

// Products - GET
export const findProduct = createAsyncThunk('product/findProduct', async (productID) => {
  try {
    const response = await axios.get(`${API_URL}/products/${productID}`, fetchProductsConfig)
    return response.data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
})

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    searchProduct(state, action) {
      const searchData = action.payload.trim()

      if (!searchData) {
        state.filteredArray = state.productsArray
        return
      }

      state.filteredArray = state.productsArray.filter((element) =>
        element.attributes.name.toLowerCase().includes(searchData),
      )
    },
    filterProducts(state, action) {
      const { categoryIDs, brandIDs } = action.payload

      if ((!categoryIDs || categoryIDs.length === 0) && (!brandIDs || brandIDs.length === 0)) {
        state.filteredArray = state.productsArray
        return
      }

      state.filteredArray = state.productsArray.filter((element) => {
        const categoryMatch = !categoryIDs.length || categoryIDs.includes(element.attributes.category.data.id)
        const brandMatch = !brandIDs.length || brandIDs.includes(element.attributes.brand.data.id)

        return categoryMatch && brandMatch
      })
    },
    searchAndFilterProducts(state, action) {
      const { searchData, categoryIDs, brandIDs } = action.payload

      if ((!categoryIDs || categoryIDs.length === 0) && (!brandIDs || brandIDs.length === 0) && !searchData) {
        state.filteredArray = state.productsArray
        return
      }

      state.filteredArray = state.productsArray.filter((element) => {
        const categoryMatch = !categoryIDs.length || categoryIDs.includes(element.attributes.category.data.id)
        const brandMatch = !brandIDs.length || brandIDs.includes(element.attributes.brand.data.id)
        const searchMatch = !searchData || element.attributes.name.toLowerCase().includes(searchData.toLowerCase())

        return categoryMatch && brandMatch && searchMatch
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.productsArray = state.filteredArray = action.payload.data
      })
      .addCase(fetchLastestProducts.fulfilled, (state, action) => {
        state.loading = false
        state.lastestProducts = action.payload.data
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(findProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(findProduct.fulfilled, (state, action) => {
        state.loading = false
        state.foundProduct = action.payload.data
      })
      .addCase(findProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const productActions = productSlice.actions
export default productSlice.reducer
