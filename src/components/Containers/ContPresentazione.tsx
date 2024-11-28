import { TextContent } from '@/constants/types'
import React from 'react'
import CardIntro from '../Cards/CardIntro'

type Props = {
    cardIntroTxt: TextContent[]
}

export default function ContPresentazione(props: Props){
  return (
    
    <div className='flex flex-row flex-wrap items-center justify-center'>
        {props.cardIntroTxt.map((txt)=>(

            <CardIntro text={txt.text} key= {txt.id} id={txt.id} 
            immagine={`${txt.immagine}`} alt={'txt.alt'} 
            bottone={`${txt.bottone}`} goToPage={`${txt.goToPage}`} />
        )) 
        }
    </div>
  )
}

