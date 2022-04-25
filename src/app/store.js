import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './services/products';

export const createStore = (options) =>
  configureStore({
    reducer: {
      [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
    ...options,
  });
export const store = createStore();

export const useAppDispatch = createStore.dispatch;
