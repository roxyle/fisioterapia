import Link from 'next/link'
import Image from "next/image";
import React from 'react'

const BtnLogo = () => {
  return (
    <Link href='/'>
    <div className='py-2 px-2'>
            <Image src='/logo277w.png' alt='home' className='mr-2' width={250} height={10}/>
    </div>
</Link>
  )
}

export default BtnLogo