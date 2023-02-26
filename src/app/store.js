import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../services/productApi'
import { basketApi } from '../services/basketApi'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productApi.middleware),
})