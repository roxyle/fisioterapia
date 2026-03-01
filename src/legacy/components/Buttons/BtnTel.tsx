import React, { useState } from 'react'
import Image from "next/image";
import { ourContact } from '@/constants/data';



const BtnTel = () => {

    const [isClicked, setIsClicked] = useState(false)
    const BtnTxtContent = isClicked? ourContact.telephone : `Chiamaci!`
    const [isWhite, setIsWhite] = useState(true);
    const Icona = isWhite? '/phone.png':'/phone2.png'
    setTimeout(() => {
      setIsWhite(!isWhite)
    },500)

    const handleClick = () => {
      if (isClicked) {window.location.href = `tel:${ourContact.telephone}`;
      } setIsClicked(!isClicked);
    };

  return (
    <div className='flex flex-row items-center text-white p-5'>
        <button onClick={
          // () => {BtnTxtContent==ourContact.telephone? window.location.href = `tel:${ourContact.telephone}` : setIsClicked(!isClicked)}
          handleClick
        }
        className='flex flex-row items-center justify-center
        outline outline-white rounded-sm
        py-2 px-2 w-64
        hover:bg-white hover:text-sky-500'>
          <Image src={`${Icona}`} alt='home' className='sm:flex mr-2'
                width={30} height={30}/>
            <span id='textButton' className='text-lg'
            >
                {BtnTxtContent}
            </span>
        </button>
    </div>
  )
}


export default BtnTel