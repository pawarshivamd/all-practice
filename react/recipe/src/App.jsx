
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import Home from './page/Home'
import Recipes from './page/Recipes'
import CreateRecipes from './page/CreateRecipes'
import About from './page/About'
import Favroite from './page/Favroite'
import Navbar from './components/Navbar'
import RecipesDetails from './page/RecipesDetails'

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipesDetails />} />
        <Route path="/create" element={<CreateRecipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/fav" element={<Favroite />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
