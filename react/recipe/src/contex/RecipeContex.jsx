import { createContext, useContext, useState } from "react";
import { RecipeData } from "../data/RecipeData";

const RecipeContext = createContext()

export const RecipeProvider = ({ children }) => {
        const [data,setData] = useState(RecipeData)
    return (
        <RecipeContext.Provider value={{data,setData}}>
            {children}
        </RecipeContext.Provider>
    )
} 

export const useRecipe = () => useContext(RecipeContext)