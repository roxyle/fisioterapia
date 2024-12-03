import { Staff } from '@/constants/types'
import React from 'react'
import CardStaff from '../Cards/CardStaff'

type Props = {
    staff: Staff[]
}
const ContStaff = (prop: Props) => {
  return (
    <div className='flex flex-col sm:flex-row '>
        {prop.staff.map((e)=>(
            <CardStaff key={e.id} id={e.id} nome={e.nome} immagine={e.foto} />
        ))}
    </div>
  )
}

export default ContStaff