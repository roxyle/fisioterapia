import React from 'react'
import Image from "next/image";
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
    <div className='rounded-lg flex flex-col items-center justify-center p-5 text-black '>

      <fieldset className='max-w-12 bg-white bg-opacity-10 lg:bg-opacity-15'
      style={{ borderWidth: 3, borderColor: '#04A4D4', borderRadius: 4 }} >

        <legend>
          <Image className='m-2' key={testo.id}
          src={testo.immagine} alt={testo.alt} width={30} height={60}/>
        </legend>

        <div className='p-5 min-h-72'>
          <p className='text-black text-balance text-center p-5'>
            {testo.text}
          </p>
        </div>

        <div className='flex flex-row justify-end p-5'>
          <Btn key={testo.id} bottone={testo.bottone} goToPage={`${testo.goToPage}`} id={testo.id}/>
        </div>

      </fieldset>

    </div>
  )
}

// export default CardIntro