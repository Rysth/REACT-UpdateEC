import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NotificationManager } from 'react-notifications';
import API_URL from '../../helpers/connection';

const userData = JSON.parse(sessionStorage.getItem('userData'));
const authToken = sessionStorage.getItem('authToken');

const initialState = {
  userData: userData || {},
  authToken: authToken || '',
  loading: false,
  error: false,
  active: userData !== null,
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

      NotificationManager.success('Sesión Iniciada', 'Éxito', 1250);
      return response.data;
    } catch (error) {
      const { status } = error.response.data.error;

      if (status === 400) {
        NotificationManager.error(
          'Email/Contraseña Incorrecta.',
          'Error',
          1250,
        );

        throw new Error('Error creating the account');
      }

      throw new Error(`Error: ${error.message}`);
    }
  },
);

// Sessions - Sign Up
export const createAccount = createAsyncThunk(
  'session/createAccount',
  async (userData) => {
    try {
      const response = await axios.post(
        `${API_URL}/auth/local/register`,
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      NotificationManager.success('Cuenta Creada', 'Éxito', 1250);
      return response.data;
    } catch (error) {
      const { status } = error.response.data.error;

      if (status === 400) {
        NotificationManager.error(
          '!Cuenta ya existente! (Usuario/Email)',
          'Error',
          1250,
        );
        throw new Error('Error creating the account');
      }

      throw new Error(`Error: ${error.message}`);
    }
  },
);

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    destroySession(state) {
      state.active = false;
      state.userData = {};
      state.authToken = '';
      sessionStorage.removeItem('userData');
      sessionStorage.removeItem('authToken');
      NotificationManager.info('¡Muchas Gracias!', 'Éxito', 1250);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSession.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSession.fulfilled, (state, action) => {
        state.active = true;
        state.loading = false;
        state.userData = action.payload.user;
        state.authToken = action.payload.jwt;
        sessionStorage.setItem('userData', JSON.stringify(state.userData));
        sessionStorage.setItem('authToken', state.authToken);
      })
      .addCase(createSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.active = true;
        state.loading = false;
        state.userData = action.payload.user;
        state.authToken = action.payload.jwt;
        sessionStorage.setItem('userData', JSON.stringify(state.userData));
        sessionStorage.setItem('authToken', state.authToken);
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const sessionActions = sessionSlice.actions;

export default sessionSlice.reducer;
