import React from 'react'
import BtnLogo from './Buttons/BtnLogo'
import { ourContact } from '@/constants/data'
import { Contacts } from '@/constants/types'



const Footer = () => {
  return (
    <>
      <footer className='flex flex-row flex-wrap justify-center items-start 
                        bg-sky-500 md:justify-between 
                        overflow-auto text-white'>

          <div className='flex flex-col items-center justify-start p-5 md:grow'>
            <h2 className='font-bold md:px-6'>ORARI DI APERTURA</h2>
              <div className=''>
                <p className='gap-3 flex flex-row flex-wrap items-end justify-between'>
                  <span>LUN - SAB</span> <span>8:30-20:00</span>
                </p>
                <p className='gap-3 flex flex-row flex-wrap  items-end justify-between'>
                  <span>DOMENICA</span> <span>chiusi</span>
                </p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center py-5 sm:pt-5 md:grow'>
            <h2 className='font-bold '>SEDE E CONTATTI</h2>
            <ul className='flex flex-col justify-center items-center '>
              <li>{ourContact.address}</li>
              <li>{ourContact.email}</li>
              <li>{ourContact.telephone}</li>
            </ul>
          </div>

          <div className='flex flex-col items-center justify-center sm:py-4 md:grow'>
              <BtnLogo/>
              <p>P.I. 04432730614</p>
            </div>

      </footer>
    </>
  )
}

export default Footer