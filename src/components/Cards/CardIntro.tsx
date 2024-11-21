import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Btn from '../Buttons/Btn';

type MyProps = {
  id: string,
  alt: string,
  immagine: string,
  text: string,
  bottone: string,
  goToPage: string

}

export default function CardIntro(testo: MyProps){
  return (
    <div className='px-10 text-black '>

      <fieldset className='bg-gradient-to-t from-white to-90% rounded-lg' 
      style={{ borderWidth: 3, borderColor: '#04A4D4', borderRadius: 4 }} >
        
        <legend>    
          <Image className='m-2' key={testo.id}
          src={testo.immagine} alt={testo.alt} width={30} height={60}/>    
        </legend>

        <div className=' '>
          <p className='text-black text-balance text-center '>
            {testo.text}
          </p>
        </div>

        <div className='flex flex-row justify-end p-5'>
          <Btn bottone={testo.bottone} goToPage={`${testo.goToPage}`} id={testo.id}/>
        </div>

      </fieldset>

    </div>
  )
}

// export default CardIntro