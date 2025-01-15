import React from 'react'
import ContPlainTxt from './Containers/ContPlainTxt'
import {Paragrafi } from '@/constants/data'
import HeroContatti from './HeroContatti'
import ContMap from './Containers/ContMap'
import ContForm from './Containers/ContForm'
import ContFaq from './Containers/ContFaq'
import Head from 'next/head'

const BodyC = () => {
  return (

    <>
    <Head>
      <title>Contatta lo Studio Fisioterapia a Caserta</title>
      <meta
        name="description"
        content="Chiama il centro di fisioterapia Bruno: potrai chiedere un consulto con il nostro Medico Chirurgo Ortopedico e prenota le migliori terapie."
      />
      <meta name="keywords" content="fisioterapista caserta, consulta il medico, prenota visite di massoterapia, ortopedia, tecar, laserterapia, magnetoterapia, caserta" />
    </Head>
      <div className='bg-terapie-pattern bg-cover'>
        <div className="p-2 flex flex-col items-center justify-center flex-wrap gap-2">
          <ContPlainTxt txt={Paragrafi}/>
          <ContForm/>
          <ContMap/>
          <ContFaq/>


        </div>
      </div>
      </>
  )
}
export default BodyC