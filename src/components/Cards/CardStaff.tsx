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
    <div className='flex flex-col p-5 inset-0 rounded-xl '>

        <Image className='rounded-t-xl object-cover object-top
        h-96 lg:h-[500px] w-80 lg:w-[350px]
        brightness-[.85] hover:filter-none
        border-t-2 border-x-2 border-sky-500
        ' key={dettaglioStaff.id} src={dettaglioStaff.immagine} alt={dettaglioStaff.nome} width={420} height={700}/>


        <div className='p-5 flex flex-row flex-wrap text-black text-center
        justify-center font-bold rounded-b-xl
        border-b-2 border-x-2 border-sky-500 '>
            {dettaglioStaff.nome}
        </div>

    </div>
  )
}

export default CardStaff