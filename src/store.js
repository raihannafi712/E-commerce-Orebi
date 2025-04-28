import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from "./components/slice/productSlice"     /* No { } for this**** */

export const store = configureStore({
  reducer: {
    product:productSlice
  },
})