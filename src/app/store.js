import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../services/productApi'
import { basketApi } from '../services/basketApi'
import { commentsApi } from '../services/commentApi'
import { savedApi } from '../services/savedApi'
import { subCtgApi } from '../services/subCtgApi'
import { contactApi } from '../services/contact'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [savedApi.reducerPath]: savedApi.reducer,
    [subCtgApi.reducerPath]: subCtgApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    productApi.middleware,
    basketApi.middleware,
    commentsApi.middleware,
    savedApi.middleware,
    subCtgApi.middleware,
    contactApi.middleware,
  )
})
