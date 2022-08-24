import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from '@reduxjs/toolkit/query';
import { useGetContactsQuery } from './phoneApi';

export const store = configureStore({
  reducer: {
    [useGetContactsQuery.reducerPath]: useGetContactsQuery.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(useGetContactsQuery.middleware),
});

// setupListeners(store.dispatch);

// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { phoneBookSlice } from './phoneBookSlice';

// const persistConfig = {
//   key: 'phoneBookPersist',
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, phoneBookSlice.reducer);

// export const store = configureStore({
//   reducer: { phonebook: persistedReducer },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
