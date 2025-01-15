import React from 'react'
import ContPlainTxt from './Containers/ContPlainTxt'
import { OurStaff, Paragrafi, TerapieOrtopediche } from '@/constants/data'
import ContPicSlide from './Containers/ContPicSlide'
import ContStaff from './Containers/ContStaff'
import ContTxtImage2 from './Containers/ContTxtImage2'

const BodyA = () => {
  return (
    <div className='bg-terapie-pattern bg-cover'>
      <div className="p-2 flex flex-col items-center justify-center flex-wrap gap-2">
      <ContStaff staff={OurStaff}/>
      <ContPlainTxt txt={Paragrafi}/>
      <ContTxtImage2 elenco={TerapieOrtopediche}/>
      <ContPicSlide/>

      </div>
    </div>
  )
}

export default BodyA