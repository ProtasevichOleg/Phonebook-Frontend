import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import NProgress from 'nprogress';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      NProgress.configure({ showSpinner: false });
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
  async (subscriber, thunkAPI) => {
    try {
      NProgress.configure({ showSpinner: false });
      NProgress.start();
      const response = await axios.post('/contacts', subscriber);
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
      NProgress.configure({ showSpinner: false });
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
