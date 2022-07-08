// ** React Imports
import React, { lazy } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
// ** Lazy load Custom Imports
const LazyHome = lazy(() => import("@views/Home"))
const LazyAllFoods = lazy(() => import("@views/AllFoods"))
const LazyFoodDetails = lazy(() => import("@views/FoodDetails"))
const LazyCart = lazy(() => import("@views/Cart"))
const LazyCheckout = lazy(() => import("@views/Checkout"))
const LazyContact = lazy(() => import("@views/Contact"))
const LazyLogin = lazy(() => import("@views/Login/Login"))
const LazyRegister = lazy(() => import("@views/Login/Register"))

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<LazyHome />} />
      <Route path='/foods' element={<LazyAllFoods />} />
      <Route path='/foods/:id' element={<LazyFoodDetails />} />
      <Route path='/cart' element={<LazyCart />} />
      <Route path='/checkout' element={<LazyCheckout />} />
      <Route path='/contact' element={<LazyContact />} />
      <Route path='/login' element={<LazyLogin />} />
      <Route path='/register' element={<LazyRegister />} />
    </Routes>
  )
}

export default Router
