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
    elenco: Terapie[]
  }


export default function CardTerapie (dettagliTerapia: MyProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleImageChange = () => {setIsFlipped(!isFlipped)}


  return (
    <div className='flex flex-row justify-center items-center p-10'>
          <div className={`card ${isFlipped? "flipped" : ""}`}>
            <div className='bg-white card-face card-front'>  
                
                <Image className='' 
                  key={dettagliTerapia.id}
                  src={dettagliTerapia.immagine} alt={dettagliTerapia.alt} width={500} height={500}
                  onClick={handleImageChange}/>    
                    
                  <div className='flex flex-col items-center py-10 flex-wrap'>
                    <h2>{dettagliTerapia.text}</h2>                
                    <p className='text-black animate-pulse'>
                      Clicca e Scopri la Lista!
                    </p>
                  </div>
                
            </div>

            <div className='bg-white card-face card-back flex flex-col gap-2 items-center justify-center'
            onClick={handleImageChange}>  
                  <h2 className='underline'>{dettagliTerapia.text}:</h2>                
                  
                  <ul className='text-center'>
                  {dettagliTerapia.elenco.map((e) => ( <li key={e.id}>{e.nomeTerapia}</li> ))}
                  </ul>
                  
                
            </div>
        </div>
    </div>
  )
}
