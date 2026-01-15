import { configureStore } from "@reduxjs/toolkit"
import userSlice from './slice/UserSlice'
import ProductSlice  from "./slice/ProductSlice"
import  CartSlice  from "./slice/CartSlice"
export const store = configureStore({
    reducer: {
        user: userSlice,
        product: ProductSlice,
        cart: CartSlice
    },

})