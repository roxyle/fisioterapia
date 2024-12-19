"use Client"

import Footer from '@/components/Footer'
import React from 'react'
import Navbar  from '@/components/Navbar'
import BodyC from '@/components/BodyC'
import HeroContatti from '@/components/HeroContatti'

const Contatti = () => {
  return (
    <>
    <Navbar/>
    <HeroContatti/>
    <BodyC/>
    <Footer/>
  </>
  )
}

export default Contatti