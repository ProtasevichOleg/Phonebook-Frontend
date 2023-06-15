import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import NProgress from 'nprogress';

axios.defaults.baseURL = 'https://648884700e2469c038fde8b8.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      NProgress.start();
      const response = await axios.get('/contacts');
      NProgress.done();
      return response.data;
    } catch (error) {
      NProgress.done();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      NProgress.start();
      const response = await axios.post('/contacts', contact);
      NProgress.done();
      return response.data;
    } catch (error) {
      NProgress.done();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      NProgress.start();
      const response = await axios.delete(`/contacts/${contactId}`);
      NProgress.done();
      return response.data;
    } catch (error) {
      NProgress.done();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
