import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {},
});
