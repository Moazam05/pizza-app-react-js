// ** React Imports
import React, { lazy } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
// ** Lazy load Custom Imports
const Home = lazy(() => import("@views/Home"))
const AllFoods = lazy(() => import("@views/AllFoods"))
const FoodDetails = lazy(() => import("@views/FoodDetails"))
const Cart = lazy(() => import("@views/Cart"))
const Checkout = lazy(() => import("@views/Checkout"))
const Contact = lazy(() => import("@views/Contact"))
const Login = lazy(() => import("@views/Login/Login"))
const Register = lazy(() => import("@views/Login/Register"))
const PageNotFound = lazy(() => import("@views/404"))

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/foods' element={<AllFoods />} />
      <Route path='/foods/:id' element={<FoodDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default Router
