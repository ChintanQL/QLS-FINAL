import React from "react"
import Footer from "../footer/footer"
import '../../stylee.css'
import '../../responsive.css'
import NavBar from "../Header/NavBar"
import {Helmet} from 'react-helmet';

const Layout = ({ children }) => (
  
  <>
<Helmet>
            <style type="text/css">{`
            .our_main_heading h1, .our_main_heading h1 strong {
    font-size: 60px !important;
    line-height: 67px !important;
}
         `}</style>
     </Helmet>
  <NavBar />
   
    {children}
    <Footer/> 
  </>
  
)

export default Layout
