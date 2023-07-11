import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/contactsSlice';
import { authSlice } from './auth/authSlice';
// import { filterSlice } from './filter/filterSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = { key: 'auth', storage, whitelist: ['token'] };

const persistedContactsReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const store = configureStore({
  reducer: {
    auth: persistedContactsReducer,
    contacts: contactsSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import { contactsSlice } from './contacts/contactsSlice';
// import { filterSlice } from './filter/filterSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsSlice.reducer,
//     filter: filterSlice.reducer,
//   },
// });
