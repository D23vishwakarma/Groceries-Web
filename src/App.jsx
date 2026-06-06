import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import Meat from './components/Meat/Meat'
import Processes from './components/Processes/Processes'
import Layout from './components/Layout/Layout'
import AllProducts from './components/Allproducts/AllProducts'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/process',
          element: <Processes />
        },
        {
          path: '/fruits',
          element: <Fruits />
        },
        {
          path: '/dairy',
          element: <Dairy />
        },
        {
          path: '/meat',
          element: <Meat />
        },
        {
          path:'/allproducts',
          element:<AllProducts/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
