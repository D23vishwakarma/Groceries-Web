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
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import {CartProvider} from './Context/CartContext'
import Cart from './components/Cart/Cart'


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
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<ContactUs/>
        },
        {
          path:'/cart',
          element:<Cart/>
        }
      ]
    }
  ])

  return (
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  )
}

export default App
