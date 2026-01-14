import { useEffect, useState } from 'react'
import './App.css'
import asyncGetUsers from './store/action/UserAction'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const data = useSelector((state) => state)

  console.log(data)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("🚀 Dispatching asyncGetUsers")
    dispatch(asyncGetUsers())
  }, [])

  return (
    <>

      <h1>Vite + React</h1>

    </>
  )
}

export default App
