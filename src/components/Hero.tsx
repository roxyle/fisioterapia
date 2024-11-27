import React, { useEffect, useState } from 'react'
import { cardIntroTxt } from '@/constants/data'
import ContPresentazione from './Containers/ContPresentazione'

const Hero = () => {

  
  return (

    
      <div className="flex flex-col items-center justify-center flex-wrap p-10 bg-hero-pattern"> 
        <div className='flex flex-row flex-wrap items-center justify-center'>
          <h1 className="title text-center text-4xl font-bold">
            Farti tornare in forma è la nostra missione
          </h1> 

          <div>
            <ContPresentazione cardIntroTxt={cardIntroTxt}/>
          </div>
        </div>
      </div>

  )
}

export default Hero