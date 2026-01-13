import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRecipe } from "../contex/RecipeContex";
import { useNavigate } from "react-router";

const CreateRecipes = ({ singleData }) => {
    const { data, setData } = useRecipe()
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            img: singleData?.image || "",
            title: singleData?.title || "",
            authname: singleData?.author?.name || "",
            Type: singleData?.difficulty || ""
        }
    });
    const handelDelete = () => {
        if (!singleData) return;
        console.log("🗑️ Deleting recipe with id:", singleData.id)

        setData(pre => {
            const filtered = pre.filter((i) => i.id !== singleData.id)
            console.log("📦 Updated data after delete:", filtered)
            return filtered
        })

        navigate('/recipes')
    }
    // UPDATE FUNCTION
    const onSubmit = (formData) => {

        console.log("1️⃣ Form se aaya data:", formData)
        if (singleData) {
            setData(prev => {
                console.log("2️⃣ Purana data (prev):", prev)

                const index = prev.findIndex((i) => i.id == singleData.id)
                console.log("3️⃣ Index of recipe to update:", index)

                const newArr = [...prev]

                newArr[index] = {
                    ...newArr[index],
                    image: formData.img,
                    title: formData.title,
                    difficulty: formData.Type,
                    author: {
                        ...newArr[index].author,
                        name: formData.authname
                    }
                }

                console.log("4️⃣ Updated array (newArr):", newArr)
                console.log("✅ Updated item:", newArr[index])

                return newArr
            })
        } else {
            const newRecipes = {
                id: Date.now(),
                image: formData.img,
                title: formData.title,
                difficulty: formData.Type,
                author: { name: formData.authname },
                description: "New delicious recipe",
                ingredients: [], // 👈 Ye missing hoga toh error aayega
                instructions: [] 
            }
            setData(pre => [...pre, newRecipes])
            localStorage.setItem('recipes',JSON.stringify(newRecipes))
        }
        navigate('/recipes')
    }


    return (
        <div className="px-8 py-5">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="" className="text-2xl text-neutral-600 block w-100 mb-1">img</label>
                    <input type="url" {...register("img")} className="border border-amber-500 w-100 rounded-md" />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="text-2xl text-neutral-600 block w-100 mb-1">Title</label>
                    <input type="text" {...register("title")} className="border border-amber-500 w-100 rounded-md" />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="text-2xl text-neutral-600 block w-100 mb-1">authname</label>
                    <input type="text" {...register("authname")} className="border border-amber-500 w-100 rounded-md" />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="text-2xl text-neutral-600 block w-100 mb-1">Type</label>
                    <select  {...register("Type")} className="border border-amber-500 w-100 rounded-md py-2">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                    </select>
                </div>
                <button type="submit" className="px-9 py-4 border border-amber-500 rounded-2xl ">Submit</button>
                <button type="" onClick={handelDelete} className="px-9 py-4 border border-red-500 rounded-2xl ">Delete</button>
            </form>
        </div>
    )
}

export default CreateRecipes
