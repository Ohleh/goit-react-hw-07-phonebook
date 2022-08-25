import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from '@reduxjs/toolkit/query';
import { useGetContactsQuery } from './phoneApi';
import { phoneBookSlice } from 'redux/phoneBookSlice';

// export const store = configureStore({
//   reducer: {
//     [useGetContactsQuery.reducerPath]: useGetContactsQuery.reducer,
//   },

//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(useGetContactsQuery.middleware),
// });

export const store = configureStore({
  reducer: {
    [useGetContactsQuery.reducerPath]: useGetContactsQuery.reducer,
    phonebook: phoneBookSlice.reducer,
  },

  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(useGetContactsQuery.middleware),
});
