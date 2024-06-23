
// Here we will render the conmponents in a way that where there will be the header
//  and the footer will be constant and the other part will keep changing using a
//   simple method that is out let outlet position will keep changing it is available when 
// you use the react router dom you can see it has been imported and used in the return but 
// not declared in any component and not created any method it is found in react router dom


import React from 'react'
import Header from './compontents/Header/Header'
import Footer from './compontents/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
         <Header/>
        <Outlet/>
        <Footer/>
        </>
       
    )
}

export default Layout
