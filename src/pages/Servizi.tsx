"use Client"

import Footer from '@/components/Footer'
import React from 'react'
import Navbar  from '@/components/Navbar'
import ContPlainTxt from '@/components/Containers/ContPlainTxt'
import { Paragrafi } from '@/constants/data'

const Servizi = () => {
  return (
    <>
    <Navbar/>
    <ContPlainTxt txt={Paragrafi}/>
    

    <Footer/>
  </>
  )
}

export default Servizi