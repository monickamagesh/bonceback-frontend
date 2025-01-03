import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <section className=' h-screen w-full text-black'>
      <Outlet />
    </ section >
  )
}

export default App
