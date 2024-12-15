"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import BtnTel from '../Buttons/BtnTel'

type MyProps = {
    id: string,
    alt: string,
    immagine: string,
    titolo: string,
    descrizione: string,
  }


export default function CardServizi (dettagliServizi: MyProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleImageChange = () => {setIsFlipped(!isFlipped)}



  return (
    <div className='relative flex flex-row justify-center items-center p-3'>
          <div className={`cursor-pointer relative card-serv sm:h-[420px] ${isFlipped? "flipped" : ""}`}>
            <div className='bg-white card-face' onClick={handleImageChange} >

                <Image className='object-cover'
                  key={dettagliServizi.id}
                  src={dettagliServizi.immagine} alt={dettagliServizi.alt}
                  width={520} height={0}
                  />

                  <div className='text-black flex flex-col items-center py-5 flex-wrap'>
                    <h2 className='text-center font-bold underline'>{dettagliServizi.titolo}</h2>
                    <p className='animate-pulse p-5'>

                      Clicca per approfondire!
                    </p>
                  </div>
            </div>

            <div className='bg-white text-black card-face overflow-y-scroll      card-back flex flex-col gap-2
              items-center justify-start'
              onClick={handleImageChange}>

                  <div className='flex flex-col items-center justify-center py-5'>
                    <h2 className='text-center underline py-3 font-bold'>{dettagliServizi.titolo}:</h2>
                    <p className=' text-center text-pretty px-5'>{dettagliServizi.descrizione}</p>

                  </div>

            </div>

        </div>
    </div>
  )
}