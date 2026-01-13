import { useParams } from "react-router"
import { useRecipe } from "../contex/RecipeContex";
import { useState } from "react";
import CreateRecipes from "./CreateRecipes";


const RecipesDetails = () => {
    const { data } = useRecipe()
    const params = useParams()
    const [isFav, setIsFav] = useState(false);
    const singleData = data.find((recipeData) => params.id == recipeData.id)
    
    const {image,title,difficulty,description,prepTime,cookTime,ingredients,instructions,author} = singleData
    return (
        <>
        <div className="grid lg:grid-cols-2 group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
            {
                singleData ? (
                    <div className="grid lg:grid-cols-2 group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
                        {/* Top Image Section */}
                        <div className="relative h-60 overflow-hidden">
                            <img
                                src={`${image}`}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Heart / Favorite Button */}
                            <button
                                onClick={() => setIsFav(!isFav)}
                                className="absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg transform transition-transform active:scale-75 hover:scale-110"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill={isFav ? "#ef4444" : "none"} // Red fill when active
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke={isFav ? "#ef4444" : "#6b7280"} // Border color change
                                    className="w-6 h-6 transition-colors duration-300"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                    />
                                </svg>
                            </button>

                            {/* Difficulty Badge */}
                            <div className="absolute bottom-4 left-4 top-5">
                                <span className="bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                                    {difficulty}
                                </span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight group-hover:text-amber-600 transition-colors">
                                {title}
                            </h2>
                            <p className="text-gray-500 text-sm line-clamp-2 mb-6">
                                {description}
                            </p>

                            {/* Cooking Stats */}
                            <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-50 mb-6">
                                <div className="text-center border-r border-gray-100">
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Prep</p>
                                    <p className="text-sm font-bold text-gray-700">{prepTime}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Cook</p>
                                    <p className="text-sm font-bold text-gray-700">{cookTime}</p>
                                </div>
                            </div>

                            <div className="space-y-4 animate-in fade-in duration-300">
                                {/* Ingredients Section */}
                                <div>
                                    <h3 className="text-sm font-black uppercase text-gray-400 mb-2 tracking-widest">Ingredients</h3>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {ingredients.map((item, index) => (
                                            <li key={index} className="text-sm text-gray-700 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Instructions Section */}
                                <div className="pt-4 border-t border-gray-50">
                                    <h3 className="text-sm font-black uppercase text-gray-400 mb-2 tracking-widest">Instructions</h3>
                                    <ol className="space-y-2">
                                        {instructions.map((step, index) => (
                                            <li key={index} className="text-sm text-gray-600 flex gap-3">
                                                <span className="font-bold text-amber-500">{index + 1}.</span>
                                                {step}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                            {/* Author Footer */}
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-amber-200 to-amber-500 flex items-center justify-center text-white font-bold shadow-inner">
                                        {author?.name?.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold leading-none uppercase">Chef</p>
                                        <p className="text-sm font-bold text-gray-800">{author.name}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (<p>not found</p >)
            }
            <CreateRecipes singleData={singleData} />
        </div>
        </>
    )
}

export default RecipesDetails
