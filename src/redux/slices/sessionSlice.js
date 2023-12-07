import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NotificationManager } from 'react-notifications';
import API_URL from '../../helpers/connection';

const userData = JSON.parse(sessionStorage.getItem('userData'));
const authToken = sessionStorage.getItem('authToken');

const initialState = {
  userData: userData || {},
  authToken: authToken === null,
  loading: false,
  error: false,
  active: false,
};

// Sessions - Sign In
export const createSession = createAsyncThunk(
  'session/createSession',
  async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/auth/local`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status !== 200) {
        NotificationManager.error(
          'Email/Contraseña Incorrecto.',
          'Error',
          1250,
        );
        throw new Error('Error creating the session');
      }
      NotificationManager.success('Sesión Iniciada', 'Éxito', 1250);
      return response.data;
    } catch (error) {
      NotificationManager.error('Problema de Servidor.', 'Error', 1250);
      throw new Error(`Error: ${error.message}`);
    }
  },
);

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSession.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.user;
        state.authToken = action.payload.jwt;
        console.log(action.payload.user);
        sessionStorage.setItem('userData', JSON.stringify(state.userData));
        sessionStorage.setItem('authToken', state.authToken);
      })
      .addCase(createSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const sessionActions = sessionSlice.actions;

export default sessionSlice.reducer;
