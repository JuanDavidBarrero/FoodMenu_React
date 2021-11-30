import React from 'react'
import { CardsSection } from '../components/CardsSection'
import { Footer } from '../components/Footer'
import { Gallery } from '../components/Gallery'
import { HeaderSecction } from '../components/HeaderSecction'

export const Menu = () => {
    return (
        <>
          <HeaderSecction/>
          <CardsSection/>
          <Gallery/>
          <Footer/>   
        </>
    )
}
