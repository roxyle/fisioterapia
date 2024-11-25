import React, { useEffect, useState } from 'react'
import ContCardTerapie from './Containers/ContCardTerapie'
import { ServiziOfferti, TerapieManuali, TerapieStrumentali } from "@/constants/data";


const BodyH = () => {

  
  return (

    <div className='bg-terapie-pattern bg-cover'>
      <div className="p-2 flex flex-col items-center justify-center flex-wrap "> 
        <ContCardTerapie servizi={ServiziOfferti}/>
      </div>
      </div>
  )
}

export default BodyH