import React, { useEffect, useState } from 'react'
import ContPresentazione from './Containers/ContPresentazione'

const Hero = () => {

  return (


    <div className="bg-hero-pattern2 bg-fixed lg:bg-hero-pattern1 bg-no-repeat bg-cover md:bg-[35%_50%] bg-[center_top]">
        <div className='flex flex-col items-center justify-center p-5'>

            <ContPresentazione/>
          </div>

      </div>

  )
}

export default Hero