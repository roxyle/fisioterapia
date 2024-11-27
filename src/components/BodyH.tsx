import React, { useEffect, useState } from 'react'
import ContCardTerapie from './Containers/ContCardTerapie'
import { Paragrafi, ServiziOfferti, TerapieManuali, TerapieStrumentali } from "@/constants/data";
import ContPlainTxt from './Containers/ContPlainTxt';


const BodyH = () => {

  
  return (

    <div className='bg-terapie-pattern bg-cover w-full'>
      <div className="p-2 flex flex-col items-center justify-center flex-wrap gap-2"> 
        <ContPlainTxt txt={Paragrafi}/>
        <ContCardTerapie servizi={ServiziOfferti}/>
      </div>
      </div>
  )
}

export default BodyH