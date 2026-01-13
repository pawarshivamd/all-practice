import { useEffect } from "react"
import axios from "../utils/axios"

const Home = () => {

    const getProducts = async () => {
        try {
            const response = await axios.get("/products")
            console.log(response.data)
        } catch (error) {
            return error
        }
    }
useEffect(()=>{
    getProducts()
},[])
    return (
        <div>
            <button onClick={getProducts}>get product</button>
        </div>
    )
}

export default Home
