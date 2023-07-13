import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilterValue = state => state.filter.value;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.IsRefreshing;

// мемоізація селектору
export const selectVisibleContact = createSelector(
  [selectFilterValue, selectContacts],
  (contactSearch, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactSearch.toLowerCase())
    );
  }
);
