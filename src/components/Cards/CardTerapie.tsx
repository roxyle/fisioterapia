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
  }

  type Props = {
    terapie: Terapie[],
}

export default function CardTerapie (imgTerapia: MyProps, listaTerapia: Props) {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleImageChange = () => {setIsFlipped(!isFlipped)}


  return (
    <div className='flex flex-col md:flex-row items-center z-[20]'>
        <div className='servizio-card'>
          <div className={`card ${isFlipped? "flipped" : ""}`}>
            <div className='bg-white card-face card-front flex flex-col gap-2 items-center'>  
                
                <Image className='' 
                  key={imgTerapia.id}
                  src={imgTerapia.immagine} alt={imgTerapia.alt} width={500} height={500}
                  onClick={handleImageChange}/>    
                    
                
                  <h2>{imgTerapia.text}</h2>                
                  <p className='text-black txt-md animate-pulse'>Clicca e Scopri la Lista!</p>
                
            </div>

            <div className='bg-white card-face card-back flex flex-col gap-2 items-center'
            onClick={handleImageChange}>  
                  <h2>{imgTerapia.text}:</h2>                
                  <p>
                    {/* {listaTerapia.terapie.map((elenco)=>{
                        <li>
                          
                        </li>
                    })} */}
                  </p>
                
            </div>
          </div>
        </div>
    </div>
  )
}
