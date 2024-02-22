import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../Productslice/ProductSlice'
export const store = configureStore({
    reducer: {
      products: productsReducer,
  },
})