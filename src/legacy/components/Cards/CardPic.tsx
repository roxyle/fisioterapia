import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ImgEspProf } from '@/constants/data'



type MyProps = {
  immagine: ImgEspProf[],

}

const CardPic = (foto: MyProps) => {

  const [key, setKey] = useState(0)
  const [src, setSrc] = useState('/staff/Beniamino.jpg')
  const [txt, setTxt] = useState('not found')


  useEffect(() =>
    { if (foto.immagine.length > 0)
      { setKey(foto.immagine[0].id);
        setSrc(foto.immagine[0].image);
        setTxt(foto.immagine[0].testo); }

    }, [foto.immagine]);




  return (
    <div className='px-2 pt-5 rounded-xl '>

        <Image className='rounded-xl object-cover object-top
        h-[500px] w-[800px]
        border-2 border-sky-500
        '
        key={key} src={src} alt={txt} width={420} height={550}/>


    </div>
  )
}

export default CardPic