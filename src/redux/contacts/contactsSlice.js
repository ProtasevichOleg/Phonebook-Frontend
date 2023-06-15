import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';
import {
  pendingReducer,
  rejectedReducer,
  fetchContactsFulfilledReducer,
  addContactFulfilledReducer,
  deleteContactFulfilledReducer,
} from './contactsReducers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pendingReducer)
      .addCase(addContact.pending, pendingReducer)
      .addCase(deleteContact.pending, pendingReducer)
      .addCase(fetchContacts.rejected, rejectedReducer)
      .addCase(addContact.rejected, rejectedReducer)
      .addCase(deleteContact.rejected, rejectedReducer)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer);
  },
});

export default contactsSlice.reducer;
