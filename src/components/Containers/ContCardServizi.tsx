import React from 'react'
import { DettaglioServizi,} from '@/constants/types'
import CardServizi from '../Cards/CardServizi';

type Props = {
    dettaglioServizi: DettaglioServizi[],
}

export default function ContCardServizi (props: Props) {
  return (

        <div className='flex flex-col items-center bg-gradient-to-t from-white to-90% rounded-xl pb-5'>
          <h2 className='font-bold text-white text-4xl rounded-t-xl title'>Alcuni Dei Nostri Servizi </h2>

             <div className='flex flex-col sm:flex-row flex-wrap justify-center'>
              {props.dettaglioServizi.map((tipologia)=>(

                    <CardServizi key={tipologia.id} id={tipologia.id}
                  alt={tipologia.titolo} immagine={tipologia.immagine}
                  descrizione={tipologia.testo} titolo={tipologia.titolo}  />
              ))
              }
          </div>
        </div>

  )
}
