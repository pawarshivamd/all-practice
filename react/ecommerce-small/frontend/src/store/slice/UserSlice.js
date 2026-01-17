import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadUser: (state, action) => {
            state.data = action.payload
        },
        logoutUser:(state)=>{
            state.data = null
        }
    }
})

export const { loadUser ,logoutUser} = userSlice.actions;

export default userSlice.reducer