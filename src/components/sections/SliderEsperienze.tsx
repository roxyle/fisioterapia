'use client'

import { espProf } from "@/constants/data"
import Image from "next/image"
import {useCallback, useEffect, useState} from "react"


function ChevronLeft(){
    return(
        <svg width='20' height='20' viewBox='0 0 24 24' fill='none'
            stroke='currentColor' strokeWidth='2.5' strokeLinecap='round'
            strokeLinejoin='round' aria-hidden='true'>
            <path d='m15 18-6-6 6-6' />
        </svg>
    )
}

function ChevronRight(){
    return(
        <svg width='20' height='20' viewBox='0 0 24 24' fill='none'
            stroke='currentColor' strokeWidth='2.5' strokeLinecap='round'
            strokeLinejoin='round' aria-hidden='true'>
            <path d='m9 18 6-6-6-6' />
        </svg>
    )
}

export function SliderEsperienze(){
    const [current,setCurrent]=useState(0)
    const[touchStart,setTouchStart]=useState<number|null>(null)
    const [timerKey, setTimerKey] = useState(0)
    const totale=espProf.length
    const avanti= useCallback(
        ()=>{
            setCurrent(prev=> (prev+1) % totale)
        }, [totale]
    )
    const indietro= useCallback(
        ()=>{
            setCurrent(prev=> (prev-1 +totale) % totale)
        }, [totale]
    )

    useEffect(
        ()=> {
            const timer= setInterval(avanti,4000)
            return ()=> clearInterval(timer)
        }, [avanti, timerKey]
    )

    function clickAvanti(){
        avanti()
        setTimerKey(k=> k+1)
    }

    function clickIndietro(){
        indietro()
        setTimerKey(k=>k+1)
    }

    function goTo(i:number){
        setCurrent(i)
        setTimerKey(k=>k+1)
    }

    function onTouchStart(e: React.TouchEvent){
        setTouchStart(e.touches[0].clientX)
    }

    function onTouchEnd(e: React.TouchEvent){
        if(touchStart===null) return
        const distanza= touchStart-e.changedTouches[0].clientX

        if(Math.abs(distanza)<50) return
        distanza>0?avanti():indietro()
        setTouchStart(null)
    }



    return(
        <section className="section-padding bg-white">
            <div className="container-main">
                <div className="max-w-2xl mb-10">
                    <p className="section-label">
                        Esperienza sul campo
                    </p>
                    <h2 className="font-display text-display-md text-gray-900 mt-1">Fisioterapia dentro e fuori dallo studio</h2>
                    <p className="text-gray-500 text-sm mt-3">
                        Anni di collaborazioni con realtà sportive di primo piano nel territorio campano
                    </p>
                </div>

                <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
                className="relative overflow-hidden max-w-2xl mx-auto bg-gray-50">
                    <div className="flex transition-transform duration-500 ease-in-out"
                    style={{transform: `translateX(-${current*100}%)`}}>
                        {
                            espProf.map(
                                foto=>(
                                    <div key={foto.id} className="w-full flex-shrink-0 flex justify-center">
        <div className="rounded-2xl overflow-hidden">
            <Image
                src={foto.image}
                alt={foto.testo}
                width={800}
                height={600}
                className="w-full h-auto max-h-[560px] object-contain"
                sizes="672px"
            />
        </div>
    </div>
                                )
                            )
                        }
                    </div>

                    <button onClick={clickIndietro} aria-label="immagine precedente"
                    className="absolute left-3 top-1/2 -translate-y-1/2
                    w-9 h-9 rounded-full bg-white/80 hover:bg-white
                    flex items-center justify-center
                    shadow-card transition-colors">
                        <ChevronLeft/>
                    </button>

                    <button onClick={clickAvanti} aria-label="immagine precedente"
                    className="absolute right-3 top-1/2 -translate-y-1/2
                    w-9 h-9 rounded-full bg-white/80 hover:bg-white
                    flex items-center justify-center
                    shadow-card transition-colors">
                        <ChevronRight/>
                    </button>
                </div>

                <p className="text-sm font-semibold text-gray-500 text-center mt-3">
                    {espProf[current].testo}
                </p>

                <div className="flex justify-center gap-1.5 mt-4">
                    {espProf.map(
                        (_,i)=>(
                            <button key={i} onClick={()=>goTo(i)} aria-label={`Vai alla foto ${i+1}`}
                            className={`rounded-full transition-all duration-300 
                                ${i===current?
                                'w-5 h-2 bg-brand':
                                'w-2 h-2 bg-gray-400 hover:bg-gray-600'
                            }`}/>
                            
                        )
                    )}
                </div>
            </div>
        </section>
    )






}