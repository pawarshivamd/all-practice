import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RecipeProvider } from './contex/RecipeContex.jsx'

createRoot(document.getElementById('root')).render(
  <RecipeProvider>
    <App />
  </RecipeProvider>
)
