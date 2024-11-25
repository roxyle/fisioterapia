import React, { useState } from 'react'
import Image from "next/image";
import { ourContact } from '@/constants/data';



const BtnTel = () => {
    
    const [isClicked, setIsClicked] = useState(false)
    const BtnTxtContent = isClicked? ourContact[0].telephone : `Chiamaci!`
    
    
  return (
    <div className='flex flex-row items-center text-white p-5'>
        <button onClick={() => {setIsClicked(!isClicked)}} className='outline outline-white rounded-sm py-2 px-2 w-64'>
            <span id='textButton' className='flex flex-row items-center justify-center hover:invert animate-pulse'>
                <Image src='/phone.png' alt='home' className='hidden md:flex mr-2 ' width={30} height={30}></Image>
                {BtnTxtContent}
            </span>
        </button>
    </div>
  )
}


export default BtnTel