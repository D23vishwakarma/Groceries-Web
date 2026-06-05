import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home'
import {createBrowserRouter, Route} from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'


function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home />,
      children :
      {},

      path:'/fruits',
      element:<Fruits/>
    }
  ])

  return (
    <>
  <Home />
    </>
  )
}

export default App
