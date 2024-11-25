import { TextContent } from '@/constants/types'
import React from 'react'
import CardIntro from '../Cards/CardIntro'

type Props = {
    cardIntroTxt: TextContent[]
}

export default function ContPresentazione(props: Props){
  return (
  <div className=''>  
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-10'>

        {props.cardIntroTxt.map((txt)=>(

            <CardIntro text={txt.text} id={txt.id} 
            immagine={`${txt.immagine}`} alt={'txt.alt'} 
            bottone={`${txt.bottone}`} goToPage={`${txt.goToPage}`} />
        )) 
        }
    </div>
  </div>
  )
}

