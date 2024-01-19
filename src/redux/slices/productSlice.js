import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

/* Environment Variables */
const API_URL = import.meta.env.VITE_APP_URL
const API_KEY = import.meta.env.VITE_API_KEY

const initialState = {
  productsArray: [],
  filteredArray: [],
  lastestProducts: [],
  similarProducts: [],
  foundProduct: null,
  loading: true,
  error: false,
  isFiltered: false,
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
export const fetchProducts = createAsyncThunk('product/fetchProducts', async (page = 1) => {
  try {
    const fetchProductsWithPagination = {
      ...fetchProductsConfig,
      params: {
        ...fetchProductsConfig.params,
        'pagination[page]': page,
        'pagination[pageSize]': 10,
      },
    }
    const response = await axios.get(`${API_URL}/products`, fetchProductsWithPagination)
    return response.data
  } catch (error) {
    throw new Error(`Error: ${error}`)
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
export const fetchSimilarProducts = createAsyncThunk(
  'product/fetchSimilarProducts',
  async ({ categoryID, productID }) => {
    try {
      const fetchSimilarProductsConfig = {
        ...fetchProductsConfig,
        params: {
          ...fetchProductsConfig.params,
          'pagination[limit]': 4,
          'filters[id][$ne]': productID,
          'filters[category][id][$eq]': categoryID,
        },
      }
      const response = await axios.get(`${API_URL}/products`, fetchSimilarProductsConfig)
      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  },
)

// Products - GET
export const findProduct = createAsyncThunk('product/findProduct', async (productID) => {
  try {
    const response = await axios.get(`${API_URL}/products/${productID}`, fetchProductsConfig)
    return response.data
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
})

// Products - GET
export const searchAndFilterProducts = createAsyncThunk(
  'product/searchAndFilterProducts',
  async ({ searchData, categoryID, brandID }) => {
    try {
      let params = {
        ...fetchProductsConfig.params,
        'filters[name][$containsi]': searchData,
        'pagination[pageSize]': 15,
      }

      if (categoryID && categoryID !== 0) {
        params['filters[category][id][$eq]'] = categoryID
      }

      if (brandID && brandID !== 0) {
        params['filters[brand][id][$eq]'] = brandID
      }

      const response = await axios.get(`${API_URL}/products`, {
        ...fetchProductsConfig,
        params,
      })

      return response.data
    } catch (error) {
      throw new Error(`Error: ${error.message}`)
    }
  },
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    searchProduct(state, action) {
      const searchData = action.payload.trim().toLowerCase()

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
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsArray = [...state.productsArray, ...action.payload.data]
        state.filteredArray = state.productsArray
        state.loading = false
      })
      .addCase(fetchLastestProducts.fulfilled, (state, action) => {
        state.lastestProducts = action.payload.data
        state.loading = false
      })
      .addCase(fetchSimilarProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        state.similarProducts = action.payload.data
        state.loading = false
      })
      .addCase(findProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(findProduct.fulfilled, (state, action) => {
        state.foundProduct = action.payload.data
        state.loading = false
      })
      .addCase(searchAndFilterProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(searchAndFilterProducts.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload.data.length === 15) {
          state.filteredArray = action.payload.data
          state.isFiltered = false
          return
        }
        state.filteredArray = action.payload.data
        state.isFiltered = true
      })
  },
})

export const productActions = productSlice.actions
export default productSlice.reducer
