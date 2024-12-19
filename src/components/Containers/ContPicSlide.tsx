import React, { useState } from 'react'
import { EspProf } from '@/constants/data'
import Image from 'next/image'
import CardPic from '@/components/Cards/CardPic'
import { ImgEspProf } from '@/constants/types'
import { useEffect } from 'react'


const ContPicSlide = () => {

  const [current, setCurrent] = useState(1)
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(2)

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX); // Memorizza il punto iniziale del tocco
  };

  // Gestione touch move
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.touches[0].clientX); // Aggiorna la posizione corrente del tocco
  };

  useEffect(() => {
    setNext((current + 1) % EspProf.length);
    setPrev((current - 1 + EspProf.length) % EspProf.length);
  }, [current]);

  const handleClickR = () => {
        setPrev(current);
        setCurrent(next);
        setNext((current + 1) % EspProf.length);
  }
  const handleClickL = () => {
    setPrev((current - 1 + EspProf.length) % EspProf.length);
    setNext(current);
    setCurrent(prev); 
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50; // Distanza minima per considerare uno swipe
    const distance = touchStart - touchEnd;
    distance > swipeThreshold? handleClickR() : handleClickL();
    setTouchStart(0);
    setTouchEnd(0);
  };


  return (

    <div className='flex flex-col items-center bg-gradient-to-t from-white to-90% w-full rounded-b-xl py-5'    
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>

      <h2 className='font-bold underline text-white text-4xl rounded-t-xl title'>Esperienze Professionali</h2>

      <div className='flex flex-col lg:flex-row justify-center'>

        <div className='z-0 hidden lg:flex sm:grayscale-[70%] sm:blur-[1px] translate-y-5'>
          <CardPic immagine={[EspProf[prev]]}/>
        </div>

        <div className='flex flex-row items-center justify-center'>
          <div className='z-100 animate-bounce
          sm:outline sm:outline-2 sm:outline-white
          sm:rounded-sm
          sm:px-2 sm:py-2'
          onClick={handleClickL}>
            <Image src={'/left-arrow.svg'} alt='home'
            className=''
            width={30} height={30}/>
          </div>

          <div className='z-20 scale-120 transition-transform duration-300 ease-in-out'>

            <CardPic immagine={[EspProf[current]]} />
          </div>

          <div className='z-100 animate-bounce
          sm:outline sm:outline-2 sm:outline-white
          sm:rounded-sm
          sm:px-2 sm:py-2'
          onClick={handleClickR}>
          <Image src={'/right-arrow.svg'} alt='home' className=''
                width={30} height={30}
                />
          </div>

        </div>

        <div className='z-0 hidden lg:flex sm:grayscale sm:blur-[1px] translate-y-5'>
        <CardPic immagine={[EspProf[next]]}/>
        </div>

      </div>
    </div>
  )
}

export default ContPicSlide