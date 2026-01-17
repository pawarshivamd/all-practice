import axios from '../../api/axiosconfig'
import { loadUser, logoutUser } from '../slice/UserSlice'


export const asyncLoginUser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        console.log("loginuser", res.data[0])
        localStorage.setItem('user', JSON.stringify(res.data[0]))
        dispatch(loadUser(res.data[0]))

    } catch (error) {
        console.log(error)
    }
}
export const asyncLogOutUser = () => async (dispatch, getState) => {
    try {

        localStorage.removeItem('user')
        dispatch(logoutUser())
    } catch (error) {
        console.log(error)
    }
}
export const asyncCurrentUser = () => async (dispatch, getState) => {
    try {

        const user = JSON.parse(localStorage.getItem('user'))
        if (user) dispatch(loadUser(user))
        else console.log("user not found")
    } catch (error) {
        console.log(error)
    }
}
export const asyncRegisterUser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/users", user)
        dispatch(loadUser(res.data))
    } catch (error) {
        console.error(error)
    }
}


const asyncGetUsers = () => async (dispatch, getState) => {
    try {


        const res = await axios.get("/users")


        dispatch(loadUser(res.data))

    } catch (error) {
        console.error("❌ API error:", error)
    }
}

export default asyncGetUsers
