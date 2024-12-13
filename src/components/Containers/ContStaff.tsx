import { Staff } from '@/constants/types'
import React from 'react'
import CardStaff from '../Cards/CardStaff'

type Props = {
    staff: Staff[]
}
const ContStaff = (prop: Props) => {
  return (
    <div className='w-full py-3'>
      <div className='rounded-xl flex flex-col items-center justify-center bg-gradient-to-t from-white to-90%'>
        <h2 className='font-bold text-center text-pretty text-4xl title rounded-t-xl'>Il Nostro Staff </h2>
        <div className='flex flex-col sm:flex-row flex-wrap justify-center'>
          {prop.staff.map((e)=>(
              <CardStaff key={e.id} id={e.id} nome={e.nome} immagine={e.foto} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContStaff