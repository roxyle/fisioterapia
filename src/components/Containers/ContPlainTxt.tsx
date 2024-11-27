'use client'
import { ParagrContent } from '@/constants/types'
import React from 'react'
import { usePathname } from 'next/navigation'

type Props = {
    txt : ParagrContent[]
}

const ContPlainTxt = (prop: Props) => {
    
let location = usePathname()
let simplePar = prop.txt.find((e) => e.id==location);
  return (
    <div className='bg-gradient-to-t from-white to-90% rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold text-center text-4xl title'>{simplePar?.titolo}</h2>
            <p className='flex flex-row flex-wrap items-center justify-center text-center text-pretty p-5'>
            {simplePar?.testo}
            </p>
        </div>
    </div>
  )
}

export default ContPlainTxt