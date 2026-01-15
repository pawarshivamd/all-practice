import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    ProductData: []
}
const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        loadProduct: (state, action) => {
            state.ProductData = action.payload
        }
    }
})

export const { loadProduct } = ProductSlice.actions

export default ProductSlice.reducer