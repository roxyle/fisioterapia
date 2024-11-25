import React from 'react'
import CardTerapie from '../Cards/CardTerapie'
import { Servizi, Terapie } from '@/constants/types'
import {TerapieManuali, TerapieStrumentali } from "@/constants/data";

type Props = {
    servizi: Servizi[],


}

export default function ContCardTerapie (props: Props) {
  return (

        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-4xl bg-white'>Servizi Offerti : </h2>

          <div className='flex flex-col flex-wrap md:flex-row '>                      
              
              
              {props.servizi.map((tipologia)=>(
                  
                  <CardTerapie id={tipologia.id} alt={tipologia.tipologia} 
                  immagine={tipologia.immagine} text={tipologia.tipologia} 
                  elenco={tipologia.elenco} />
              )) 
              }

          </div> 
        </div>

  )
}

