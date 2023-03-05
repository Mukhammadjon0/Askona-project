import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../services/productApi'
import { basketApi } from '../services/basketApi'
import { commentsApi } from '../services/commentApi'
import { categoryApi } from '../services/categoryApi'
import { savedApi } from '../services/savedApi'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [savedApi.reducerPath]: savedApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    productApi.middleware,
    basketApi.middleware,
    commentsApi.middleware,
    categoryApi.middleware,
    savedApi.middleware,
  )
})
