import React from "react"
import Footer from "../footer/footer"
import '../../stylee.css'
import '../../responsive.css'
import NavBar from "../Header/NavBar"


const Layout = ({ children }) => (
  <>

  <NavBar />
   
    {children}
    <Footer/> 
  </>
  
)

export default Layout
