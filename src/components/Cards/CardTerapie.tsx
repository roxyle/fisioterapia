"use client"

import { Terapie } from '@/constants/types'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

type MyProps = {
    id: string,
    alt: string,
    immagine: string,
    text: string,
    descrizione: string,
    elenco: Terapie[]
  }


export default function CardTerapie (dettagliTerapia: MyProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleImageChange = () => {setIsFlipped(!isFlipped)}


  return (
    <div className='flex flex-row justify-center items-center p-10'>
          <div className={`cursor-pointer card ${isFlipped? "flipped" : ""}`}>
            <div className='bg-white card-face card-front' onClick={handleImageChange} >  
                
                <Image className='' 
                  key={dettagliTerapia.id}
                  src={dettagliTerapia.immagine} alt={dettagliTerapia.alt} width={500} height={500}
                  />    
                    
                  <div className='flex flex-col items-center py-5 flex-wrap'>
                    <h2 className='font-bold underline'>{dettagliTerapia.text}</h2>     
                    <p className='text-center p-2'>{dettagliTerapia.descrizione}</p>           
                    <p className='text-black animate-pulse p-5'>

                      Clicca e Scopri la Lista!
                    </p>
                  </div>               
            </div>

            <div className='bg-white card-face card-back flex flex-col gap-2 
              items-center'
              onClick={handleImageChange}>  

                  <h2 className='underline py-8'>{dettagliTerapia.text}:</h2>                                  
                  <div className='flex flex-col items-center justify-center py-8'> 
                    <ul className='list-disc'>
                    {dettagliTerapia.elenco.map((e) => ( <li key={e.id}>{e.nomeTerapia}</li> ))}
                    </ul>
                  </div>
                
            </div>
        </div>
    </div>
  )
}
