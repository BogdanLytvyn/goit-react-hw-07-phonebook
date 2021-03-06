import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  changeFilter,
  fetchContactsSuccess,
  fetchContactsRequest,
  fetchContactsError,
} from './contuctsActions';

const itemsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => {
    const index = state.findIndex(({ id }) => id === Number(payload));
    return [...state.slice(0, index), ...state.slice(index + 1)];
  },
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactsSuccess]: () => true,
  [fetchContactsRequest]: () => false,
  [fetchContactsError]: () => false,
  [changeFilter]: () => true,
});

const contactReucers = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export default contactReucers;
