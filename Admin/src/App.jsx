import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {  Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {

    return (
      <>
      <Outlet />
      <Toaster position='top-right'/>
      </>
    )
  

}

export default App
