import { TextContent } from '@/constants/types'
import React from 'react'
import CardIntro from '../Cards/CardIntro'
import { cardIntroTxt } from '@/constants/data'


export default function ContPresentazione(){
  return (
    <div className='bg-gradient-to-t from-white to-90% rounded-xl p-5 w-full' >

    <h1 className="title text-center text-4xl font-bold rounded-t-xl">
            Farti tornare in forma è la nostra missione
          </h1>
    <div className='flex flex-col sm:grid sm:grid-cols-2 xl:flex xl:flex-row xl:flex-wrap items-center justify-center gap-3'>
        {cardIntroTxt.map((txt)=>(
          <div key={`div+${txt.id}`}>
            <CardIntro text={txt.text} key={txt.id} id={txt.id}
            immagine={`${txt.immagine}`} alt={'txt.alt'}
            bottone={`${txt.bottone}`} goToPage={`${txt.goToPage}`} />
          </div>
        ))
        }
    </div>
    </div>
  )
}
