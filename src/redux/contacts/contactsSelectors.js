import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.contacts.loading;
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector([getContacts, getFilter], (items, filter) => {
  return items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
});

// export const getFilteredContacts = state =>
//   getFilter(state)
//     ? state.contacts.items.filter(contact =>
//         contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
//       )
//     : getContacts(state);
