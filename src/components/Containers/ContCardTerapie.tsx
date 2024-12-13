import React from 'react'
import CardTerapie from '../Cards/CardTerapie'
import { ElencoTerapie} from '@/constants/types'

type Props = {
    terapie: ElencoTerapie[],
}

export default function ContCardTerapie (props: Props) {
  return (

        <div className='flex flex-col items-center bg-gradient-to-t from-white to-90% rounded-xl py-3 w-full'>
          <h2 className='font-bold underline text-white text-4xl title rounded-t-xl'>Le Nostre Terapie </h2>

          <div className='flex flex-row flex-wrap justify-center'>                      
              
              
              {props.terapie.map((tipologia)=>(
                  
                  <CardTerapie key={tipologia.id} id={tipologia.id} alt={tipologia.tipologia}
                immagine={tipologia.immagine} text={tipologia.tipologia}
                elenco={tipologia.elenco} descrizione={tipologia.descrizione} />
              )) 
              }

          </div> 
        </div>

  )
}

