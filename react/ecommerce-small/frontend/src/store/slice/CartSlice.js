import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartData: []
}
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        loadCart: (state, action) => {
            state.cartData = action.payload
        }
    }
})
export const { loadCart } = CartSlice.actions
export default CartSlice.reducer