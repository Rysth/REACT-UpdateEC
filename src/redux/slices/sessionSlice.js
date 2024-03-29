import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

/* Environment Variables */
const API_URL = import.meta.env.VITE_APP_URL

const userData = JSON.parse(sessionStorage.getItem('userData'))
const authToken = sessionStorage.getItem('authToken')

const initialState = {
  userData: userData || {},
  authToken: authToken || '',
  loading: true,
  error: false,
  active: userData !== null,
  isAdmin: (userData && userData.username === 'GerenteAdministrador') || false,
}

// Sessions - Sign In
export const createSession = createAsyncThunk('session/createSession', async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/local`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    const { status } = error.response.data.error

    if (status === 400) {
      toast.error('Email/Contraseña incorrectas')
      throw new Error('Error login the account')
    }

    throw new Error(`Error: ${error.message}`)
  }
})

// Sessions - Sign Up
export const createAccount = createAsyncThunk('session/createAccount', async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/local/register`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    const { status } = error.response.data.error

    if (status === 400) {
      toast.error('Email/Usuario ya existente')
      throw new Error('Error creating the account')
    }

    throw new Error(`Error: ${error.message}`)
  }
})

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    destroySession(state) {
      toast.info('Cerrando Sesión...')
      state.active = false
      state.isAdmin = false
      state.userData = {}
      state.authToken = ''
      sessionStorage.removeItem('userData')
      sessionStorage.removeItem('authToken')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSession.pending, () => {
        toast.info('Iniciando Sesión...')
      })
      .addCase(createSession.fulfilled, (state, action) => {
        state.active = true
        state.loading = false
        state.isAdmin = action.payload.user.username === 'GerenteAdministrador'
        state.userData = action.payload.user
        state.authToken = action.payload.jwt
        sessionStorage.setItem('userData', JSON.stringify(state.userData))
        sessionStorage.setItem('authToken', state.authToken)
        toast.success('Sesión Iniciada')
      })
      .addCase(createSession.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(createAccount.pending, (state) => {
        state.loading = true
        toast.info('Envíando...')
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.active = true
        state.loading = false
        state.userData = action.payload.user
        state.authToken = action.payload.jwt
        sessionStorage.setItem('userData', JSON.stringify(state.userData))
        sessionStorage.setItem('authToken', state.authToken)
        toast.success('Cuenta Creada')
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const sessionActions = sessionSlice.actions

export default sessionSlice.reducer
