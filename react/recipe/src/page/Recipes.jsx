import Card from '../components/Card'
import { useRecipe } from '../contex/RecipeContex'

const Recipes = () => {
    const {data} = useRecipe()
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6'>
                <Card  RecipesData={data}/>
            </div>
        </div>
    )
}

export default Recipes
