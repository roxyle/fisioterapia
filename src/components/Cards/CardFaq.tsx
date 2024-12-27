import React from 'react'
import { useState } from 'react'

type MyProps = {
    id: string,
    titolo: string,
    testo: string,
}

const CardFaq = (faq:MyProps) => {


    const [isOpen, setIsOpen] = useState(false)
    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }




  return (
    <div key={faq.id} className='px-8 bg-white w-full rounded-lg py-4 outline outline-2 outline-rounded outline-[#0ea5e9]'>
        <button className='text-sky-900 flex justify-between w-full font-bold
        transition-all duration-300 ease-in-out'
        onClick={handleClick}
        
        >
            <span>{faq.titolo}</span>
            {isOpen? <span>-</span>: <span>+</span>}
            
        </button>
        <div className={`overflow-hidden cursor-pointer text-black ${isOpen? 'flex': 'hidden'} pt-2 
        transition-all duration-300 ease-in-out`}>
            <div className='overflow-hidden'>
                {faq.testo}
            </div>
        </div>
    </div>
  )
}

export default CardFaq