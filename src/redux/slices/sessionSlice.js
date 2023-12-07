import { createSlice } from '@reduxjs/toolkit';

const userData = JSON.parse(sessionStorage.getItem('userData'));
const authToken = JSON.parse(sessionStorage.getItem('authToken'));

const initialState = {
  userData: userData || {},
  authToken: authToken || {},
  loading: {},
  active: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
});

export const sessionActions = sessionSlice.actions;

export default sessionSlice.reducer;
