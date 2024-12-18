import React, { useEffect, useState } from 'react'
import { cardIntroTxt } from '@/constants/data'
import ContPresentazione from './Containers/ContPresentazione'

const Hero = () => {

  return (


      <div className="bg-hero-pattern1 bg-no-repeat bg-cover bg-custom bg-[35%_50%] md:bg-[center_top]">
        <div className='flex flex-col items-center justify-center p-5'>

            <ContPresentazione cardIntroTxt={cardIntroTxt}/>
          </div>

      </div>

  )
}

export default Hero