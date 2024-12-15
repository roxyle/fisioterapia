import { OurStaff } from '@/constants/data'
import { Staff } from '@/constants/types'
import Image from 'next/image'
import React from 'react'

type MyProps = {
    id: string,
    nome: string,
    immagine: string,
    
}

const CardStaff = (dettaglioStaff: MyProps) => {
  return (
    <div className='flex flex-col p-5 inset-0'>
        
        <Image className='object-cover h-96 w-80 ' key={dettaglioStaff.id} src={dettaglioStaff.immagine} alt={dettaglioStaff.nome} width={420} height={700}/>
        
      
        <div className='flex flex-row flex-wrap bg-white text-black text-center justify-center font-bold'>
            {dettaglioStaff.nome}
        </div>
        
    </div>
  )
}

export default CardStaff