import axios from "../../api/axiosconfig"
import { loadProduct } from "../slice/ProductSlice"

export const asyncLoadProducts = () => async (dispatch, getState) => {
    try {
        const res = await axios('/products')
        dispatch(loadProduct(res.data))
        console.log("product res", res)
    } catch (error) {
        console.error(error)
    }
}
export const asyncCreateProducts = (products) => async (dispatch, getState) => {
    try {
        const res = await axios.post('/products', products)
        dispatch(loadProduct(res.data))
    } catch (error) {
        console.error(error)
    }
}
export const asyncUpdateProducts = (id, products) => async (dispatch, getState) => {
    try {
        await axios.patch(`/products/${id}`, products)
        dispatch(asyncLoadProducts())
    } catch (error) {
        console.error(error)
    }
}
export const asyncDeleteProducts = (id) => async (dispatch) => {
    try {
        await axios.delete(`/products/${id}`)
        dispatch(asyncLoadProducts())
    } catch (error) {
        console.error(error)
    }
}