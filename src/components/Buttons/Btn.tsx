import React, { useState } from 'react'
import Image from "next/image";
import { ourContact } from '@/constants/data';
import Link from 'next/link';

type MyProps = {

  id: string
  bottone: string,
  goToPage: string

}

export default function Btn(testo: MyProps){
    


  return (
    <div className=''>
        <button className='bg-sky-500 rounded-sm py-2 px-2 w-64'>
            <Link href={`${testo.goToPage}`} id={testo.id} className='text-white'>
                {testo.bottone}
            </Link>
        </button>
    </div>
  )
}

