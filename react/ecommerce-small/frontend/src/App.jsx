import { useEffect, useState } from 'react'
import asyncGetUsers, { asyncCurrentUser } from './store/action/UserAction'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'
import NavbarUi from './components/NavbarUi'
function App() {

  const data = useSelector((state) => state)

  console.log(data)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("🚀 Dispatching asyncGetUsers")
    dispatch(asyncCurrentUser())

  }, [])

  return (
    <>

      <BrowserRouter>
      <NavbarUi/>
        <Routes>  

          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
