'use client'
import { ParagrContent, Terapie } from '@/constants/data'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


const ContMap = () => {


  return (
    <div className='bg-terapie-strum-pattern bg-cover rounded-xl w-full py-3'>
        <h2 id='mappa' className='rounded-t-xl font-bold text-4xl title'> Vieni a Trovarci </h2>

        <div className='flex flex-col items-center justify-center
          bg-white bg-opacity-70 rounded-b-xl'>

          <div className='text-black flex flex-col items-center justify-center '>

              <p className='text-center text-pretty pt-5'>
              Ci trovi in Via Caduti sul Lavoro, 38 - 81100 Caserta (CE) </p>

              <div className='flex flex-col items-center justify-start pt-1 pb-3 md:grow'>
                <h2 className='font-bold underline underline-offset-2 decoration-2'>ORARI DI APERTURA</h2>
                  
                  <div className=''>
                    <p className='gap-3 flex flex-row flex-wrap items-end justify-between'>
                      <span>LUN - SAB</span> <span>dalle 8:30 alle 20:00</span>
                    </p>
                    <p className='gap-3 flex flex-row flex-wrap  items-end justify-between'>
                      <span>DOMENICA</span> <span>chiusi</span>
                    </p>
                  </div>

              </div>
          </div>

          <div className='pb-8 '>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.6420667151237!2d14.336523675517567!3d41.076816015202645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a54359b746527%3A0x5869ac4e1af995d!2sFisioterapia%20Bruno%20Caserta!5e0!3m2!1sit!2sit!4v1734713686324!5m2!1sit!2sit" 
              width="800" height="600" 
              style={{border:"0"}} 
              className='shrink object-contain h-80 w-80 lg:w-[800px] lg:h-[600px] md:w-[600px] md:h-[400px] '
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"></iframe>
	        </div>

        </div>
      </div>
  )
}

export default ContMap