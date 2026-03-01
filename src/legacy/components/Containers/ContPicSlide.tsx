import React, { useState } from 'react'
import { EspProf } from '@/constants/data'
import Image from 'next/image'
import CardPic from '@/legacy/components/Cards/CardPic'
import { ImgEspProf } from '@/constants/data'
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
    const swipeThreshold = 100; // Distanza minima per considerare uno swipe
    const distance = touchStart - touchEnd;
    Math.abs(distance) > swipeThreshold? handleClickR() : handleClickL();
    setTouchStart(0);
    setTouchEnd(0);
  };


  return (

    <div className='flex flex-col items-center bg-gradient-to-t from-white to-90% w-full rounded-b-xl py-5'>

      <h2 className='font-bold underline text-white text-4xl rounded-t-xl title'>Esperienze Professionali</h2>

      <div className='flex flex-col lg:flex-row justify-center pt-2 sm:pb-12 sm:px-8'>

        <div className='z-0 hidden lg:flex sm:grayscale-[70%] sm:blur-[1px] translate-y-10'>
          <CardPic immagine={[EspProf[prev]]}/>
        </div>

        <div className='flex flex-row items-center justify-center'>
          <div className='z-50 animate-bounce
          sm:outline sm:outline-2 sm:outline-white
          sm:rounded-sm
          sm:px-2 sm:pt-2
        sm:bg-white
          sm:bg-opacity-50'
          onClick={handleClickL}>
           <div className='sm:before:hidden before:block before:absolute before:-inset-1 before:bg-white relative inline-block z-50 before:translate-x-4 sm:transform-none'> 

              <Image src={'/left-arrow.svg'} alt='vai a immagine precedente'
              className='z-50 translate-x-4 sm:transform-none'
              width={40} height={40}/>
            </div>
          </div>

          <div className='z-20 scale-120 
          transition-transform duration-300 ease-in-out'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          >

            <CardPic immagine={[EspProf[current]]} />
          </div>

          <div className='z-50 animate-bounce
          sm:outline sm:outline-2 sm:outline-white
          sm:rounded-sm
          sm:px-2 sm:pt-2
        sm:bg-white
          sm:bg-opacity-50
          '
          onClick={handleClickR}>
           <div className='sm:before:hidden before:block before:absolute before:-inset-1 before:bg-white relative inline-block z-50 before:-translate-x-4 sm:transform-none'> 
            <Image src={'/right-arrow.svg'} alt='vai a immagine successiva' 
            className='z-50 -translate-x-4 sm:transform-none'
            width={40} height={40}
              />
            </div>
          </div>

        </div>

        <div className='z-0 hidden lg:flex sm:grayscale sm:blur-[1px] translate-y-10'>
        <CardPic immagine={[EspProf[next]]}/>
        </div>

      </div>
    </div>
  )
}

export default ContPicSlide