import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './phoneApi';
import { phoneBookSlice } from './phoneBookSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    findContact: phoneBookSlice.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
