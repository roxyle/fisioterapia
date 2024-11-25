import React, { useEffect, useState } from 'react'
import CardIntro from './Cards/CardIntro'
import { TextContent } from '@/constants/types'
import { cardIntroTxt } from '@/constants/data'
import ContPresentazione from './Containers/ContPresentazione'

const Hero = () => {

  
  return (

    
      <div className="flex flex-col items-center justify-center flex-wrap p-10 bg-hero-pattern bg-cover"> 
        <div className='flex flex-row flex-wrap items-center justify-center'>
          <h1 className="text-black text-center text-4xl font-bold">
            Farti tornare in forma <br/>è la nostra missione
          </h1> 

          <div>
            <ContPresentazione cardIntroTxt={cardIntroTxt}/>
          </div>
        </div>
      </div>

  )
}

export default Hero