import React from 'react'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'

const MainLayout = ({children}) => {
  
//this is a clean way to have a main layout defined 
//we could move the head tags in this main layout so it is available for all the pages
return (
    <>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </>
  )
}

export default MainLayout