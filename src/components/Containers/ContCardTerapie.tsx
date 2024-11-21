import React from 'react'
import CardTerapie from '../Cards/CardTerapie'
import { Servizi, Terapie } from '@/constants/types'

type Props = {
    servizi: Servizi[],
}

export default function ContCardTerapie (props: Props) {
  return (
    <>
      <div className='flex flex-col items-center py-5 w-screen min-h-screen overflow-y-hidden bg-terapie-pattern'>
          <h2 className='font-bold py-5 text-4xl flex justify-center'>Servizi Offerti</h2>
          <div className='gap-10 flex flex-row'>
            
            
            {props.servizi.map((tipologia)=>(

                <CardTerapie id={tipologia.id} alt={tipologia.tipologia} immagine={tipologia.immagine} text={tipologia.tipologia} />
                // <CardIntro text={txt.text} id={txt.id} 
                //     immagine={`${txt.immagine}`} alt={'txt.alt'} 
                //     bottone={`${txt.bottone}`} goToPage={`${txt.goToPage}`} />
            )) 
            }
        </div>
      </div>  
    </>
  )
}

