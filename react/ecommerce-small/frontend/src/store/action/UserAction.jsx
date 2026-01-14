import axios from '../../api/axiosconfig'
import { loadUser } from '../slice/UserSlice'
const asyncGetUsers = () => async (dispatch, getState) => {
    try {
        console.log("🟡 Thunk started")
        console.log("📦 Current state:", getState())

        const res = await axios.get("/users")

        console.log("🟢 API response:", res.data)

        dispatch(loadUser(res.data))

    } catch (error) {
        console.error("❌ API error:", error)
    }
}

export default asyncGetUsers
