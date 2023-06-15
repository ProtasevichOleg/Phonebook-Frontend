import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts.items;

const selectFilter = state => state.filter;

const selectError = state => state.contacts.error;

const selectIsLoading = state => state.contacts.isLoading;

const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],

  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name?.toLowerCase().includes(normalizedFilter)
    );
  }
);

export {
  selectContacts,
  selectFilter,
  selectError,
  selectIsLoading,
  selectFilteredContacts,
};
