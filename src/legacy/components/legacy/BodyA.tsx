import React from 'react'
import ContPlainTxt from '../Containers/ContPlainTxt'
import { OurStaff, Paragrafi, TerapieOrtopediche } from '@/constants/data'
import ContPicSlide from '../Containers/ContPicSlide'
import ContStaff from '../Containers/ContStaff'
import ContTxtImage2 from '../Containers/ContTxtImage2'
import Head from 'next/head'

const BodyA = () => {
  return (

    <>
    <Head>
      <title>Servizi di Fisioterapia a Caserta</title>
      <meta
        name="description"
        content="Scopri il centro di fisioterapia Bruno: fisioterapisti e medici esperti per offrirti le migliori terapie strumentali, manuali e ortopediche."
      />
      <meta name="keywords" content="fisioterapista caserta, terapie fisiche, ortopedia, massaggi caserta" />
    </Head>
      <div className='bg-terapie-pattern bg-cover'>
        <div className="p-2 flex flex-col items-center justify-center flex-wrap gap-2">
        <ContStaff staff={OurStaff}/>
        <ContPlainTxt txt={Paragrafi}/>
        <ContTxtImage2 elenco={TerapieOrtopediche}/>
        <ContPicSlide/>

        </div>
      </div>
    </>
  )
}

export default BodyA