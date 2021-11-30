import React from 'react'
import { CardsSection } from '../components/CardsSection'
import { Footer } from '../components/Footer'
import { Gallery } from '../components/Gallery'
import { HeaderSecction } from '../components/HeaderSecction'
import { Navbar } from '../components/Navbar'

export const Menu = () => {
    return (
        <>
          <Navbar/>
          <HeaderSecction/>
          <CardsSection/>
          <Gallery/>
          <Footer/>   
        </>
    )
}
