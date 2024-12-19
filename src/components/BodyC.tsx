import React from 'react'
import ContPlainTxt from './Containers/ContPlainTxt'
import {Paragrafi } from '@/constants/data'
import HeroContatti from './HeroContatti'

const BodyC = () => {
  return (
    <div className='bg-terapie-pattern bg-cover'>
      <div className="p-2 flex flex-col items-center justify-center flex-wrap gap-2">
        <ContPlainTxt txt={Paragrafi}/>

      </div>
    </div>
  )
}
export default BodyC