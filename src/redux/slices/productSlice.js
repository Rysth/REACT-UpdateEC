import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
        'pagination[pageSize]': 8,
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
          'filters[category][id][$eq]': categoryID,
          'filters[id][$ne]': productID,
        },
      }
      console.log(categoryID)
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
export const searchAndFilterProducts = createAsyncThunk('product/searchAndFilterProducts', async ({ searchData }) => {
  try {
    const fetchSearchAndFilterProductsConfig = {
      ...fetchProductsConfig,
      params: {
        ...fetchProductsConfig.params,
        'filters[name][$contains]': searchData,
      },
    }

    const response = await axios.get(`${API_URL}/products`, fetchSearchAndFilterProductsConfig)
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
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.productsArray = [...state.productsArray, ...action.payload.data]
        state.filteredArray = state.productsArray
      })
      .addCase(fetchLastestProducts.fulfilled, (state, action) => {
        state.loading = false
        state.lastestProducts = action.payload.data
      })
      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        state.loading = false
        state.similarProducts = action.payload.data
      })
      .addCase(findProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(findProduct.fulfilled, (state, action) => {
        state.loading = false
        state.foundProduct = action.payload.data
      })
      .addCase(searchAndFilterProducts.fulfilled, (state, action) => {
        state.loading = false
        state.filteredArray = action.payload.data
      })
  },
})

export const productActions = productSlice.actions
export default productSlice.reducer
