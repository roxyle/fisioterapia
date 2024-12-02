'use client'
import { ParagrContent, Terapie } from '@/constants/types'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type MyProps = {
  elenco: Terapie[]
}

const ContTxtImage = (dettagliTerapia: MyProps) => {
    

  return (
    <div className='bg-terapie-strum-pattern bg-cover rounded-xl'>
        <h2 className='font-bold text-center text-4xl title'> Le terapie strumentali </h2>

        <div className='flex flex-col sm:flex-row items-center justify-center rounded-xl bg-white bg-opacity-50'>
          <Image src='/Fisiok4.jpg' alt={'terapie strumentali'}
              width={700} height={600}
              className='p-5'/> 
          <div className='flex flex-col items-center justify-center '>

              <p className='text-black flex flex-col flex-wrap items-center justify-center text-center text-pretty p-5'>
              L'aggiornamento costante alle novità del settore rende lo studio di fisioterapia di Caserta un centro capace 
              di assistere ogni esigenza dei pazienti con terapie all'avanguardia, come quelle strumentali. Tra queste troviamo:

              <ul className='list-disc py-5'>
                      {dettagliTerapia.elenco.map((e) => ( <li key={e.id}>{e.nomeTerapia}</li> ))}
              </ul>

              Il team dello studio Fisioterapia Caserta è pronto ad assisterti anche con tecarpeterapia, magnetoterapia, 
              terapia a onde d'urto e laserterapia a domicilio.
              </p>
          </div>
          
        </div>
    </div>
  )
}

export default ContTxtImage