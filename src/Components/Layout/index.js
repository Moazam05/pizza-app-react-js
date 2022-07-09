// ** React Imports
import React from "react"
// ** Custom Imports
import Header from "../Header"
import Footer from "../Footer"
import Router from "@router/Router"

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Router />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
