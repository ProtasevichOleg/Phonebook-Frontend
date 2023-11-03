import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import NProgress from 'nprogress';

// axios.defaults.baseURL = 'https://localhost:3000/api';
axios.defaults.baseURL = 'https://phonebook-backend-6em0.onrender.com/api';
axios.defaults.withCredentials = true;
const setAuthHeader = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
const cleanAuthHeader = () =>
  (axios.defaults.headers.common.Authorization = '');

const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      NProgress.configure({ showSpinner: false });
      NProgress.start();
      const response = await axios.post('/auth/register', user);
      // setAuthHeader(response.data.token);
      NProgress.done();
      return response.data;
    } catch (error) {
      NProgress.done();
      return rejectWithValue(error.message);
    }
  }
);

const loginization = createAsyncThunk(
  'auth/loginization',
  async (user, { rejectWithValue }) => {
    try {
      NProgress.configure({ showSpinner: false });
      NProgress.start();
      const response = await axios.post('/auth/login', user);
      setAuthHeader(response.data.token);
      NProgress.done();
      return response.data;
    } catch (error) {
      NProgress.done();
      return rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (user, { rejectWithValue }) => {
    try {
      NProgress.configure({ showSpinner: false });
      NProgress.start();
      await axios.post('/auth/logout', user);
      cleanAuthHeader();
      NProgress.done();
      return;
    } catch (error) {
      NProgress.done();
      return rejectWithValue(error.message);
    }
  }
);

const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    token && setAuthHeader(token);

    try {
      NProgress.configure({ showSpinner: false });
      NProgress.start();
      const response = await axios.get('/auth/current');
      // const response = await axios.get('/users/current');
      NProgress.done();
      return response.data;
    } catch (error) {
      NProgress.done();
      return rejectWithValue(error.message);
    }
  }
);

export { register, loginization, logOut, refreshUser };
