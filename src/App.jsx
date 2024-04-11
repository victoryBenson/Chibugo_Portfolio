import React, { useState } from "react"
import { Sidenav } from "./Components/Sidenav"
import { Home } from "./Components/Home"
import { About } from "./Components/About"
import { Experience } from "./Components/Experience"
import { Services } from "./Components/Services"
import { Contact } from "./Components/Contact"
import { Footer } from "./Components/Footer"
import { Navbar } from "./Components/Navbar"

export const App = () => {
  return (
    <div className="body">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}
