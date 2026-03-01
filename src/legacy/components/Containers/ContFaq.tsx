import React from 'react'
import CardFaq from '../Cards/CardFaq'
import { Faq } from '@/constants/data'


const ContFaq = () => {
  return (
    
    <div className="bg-gradient-to-t from-white to-90% rounded-xl w-full py-3"> 

        <h2 id='faq' className='rounded-t-xl font-bold text-4xl title' >Domande Frequenti</h2>

        <div className="flex flex-col items-center justify-center
        bg-white bg-opacity-10 rounded-b-xl p-4 gap-2">
            
            {Faq.map((e)=>(
            <CardFaq key={e.id} id={e.id} titolo={e.titolo} testo={e.testo}/>
            ))
            }
        </div>
    </div>


  )
}

export default ContFaq