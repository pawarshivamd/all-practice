import { Link } from "react-router";

const Card = ({ RecipesData }) => {
    return (
        <>
            {RecipesData.map((recipe) => {
                const { id, image, title, description, prepTime, cookTime, author, difficulty } = recipe;

                return (
                    <div
                        key={id}
                        className="group overflow-hidden bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        {/* Image Container */}
                        <div className="relative h-56 w-full overflow-hidden">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                    }`}>
                                    {difficulty}
                                </span>
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                                {title}
                            </h2>
                            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                {description}
                            </p>

                            {/* Meta Stats */}
                            <div className="flex items-center justify-between py-4 border-t border-gray-100 text-gray-500 text-sm">
                                <div className="flex items-center gap-1">
                                    <span className="font-medium text-gray-700">{prepTime}</span>
                                    <span className="text-[10px] uppercase">Prep</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="font-medium text-gray-700">{cookTime}</span>
                                    <span className="text-[10px] uppercase">Cook</span>
                                </div>
                            </div>

                            {/* Footer / Author */}
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs">
                                        {author.name.charAt(0)}
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700">{author.name}</span>
                                </div>
                                <Link to={`${id}`} className="text-amber-600 font-bold text-sm hover:underline">
                                    View Recipe →
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default Card
