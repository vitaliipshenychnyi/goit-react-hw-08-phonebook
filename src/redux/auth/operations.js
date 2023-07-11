import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com/';

// add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// remove JWT
const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = ``;
};

// POST users/signup
// { name, email, password }
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {}
);

// POST users/login
// { email, password }
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {}
);

// POST users/logout
// Bearer token
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {}
);

// GET users
// Bearer token
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {}
);
