'use client'
import { useState } from 'react'
import Image from 'next/image'
import { serviziOfferti } from '@/constants/data'
import { ElencoTerapie, Terapia } from '@/constants/types'
import { LinkButton } from '@/components/ui/Button'
import { SectionHeader } from '../ui/SectionHeader'


export function Services() {
    const [activeTab, setActiveTab] = useState(serviziOfferti[0].id)
    const activeService = serviziOfferti.find(
        (servizio: ElencoTerapie) => servizio.id=== activeTab
    ) as ElencoTerapie

    return(
        <section className='section-padding bg-white'>
            <div className='container-main'>
                <SectionHeader label='Cosa facciamo' title="SCOPRI I NOSTRI SERVIZI" 
                sub='Terapie su misura per ogni paziente, 
                con strumenti di ultima generazione e uno staff altamente qualificato' 
                center/>


                <div className='flex flex-col sm:flex-row gap-2
                bg-gray-100 rounded-2xl
                p-1.5 mb-8'>
                    {serviziOfferti.map(
                        (servizio: ElencoTerapie) =>(

                            <button key={servizio.id}
                                onClick={()=> setActiveTab(servizio.id)}
                                className={`flex-1 px-4 py-2.5 rounded-xl
                                text-sm font-semibold transition-colors duration-200
                                ${activeTab===servizio.id? 'bg-white text-brand shadow-card'
                                : 'text-gray-500 hover:text-gray-700'}`}>

                                {servizio.tipologia}
                            </button>     
                        )
                    )}
                </div>

{/*tab attivo */}
                <div className='flex flex-col md:flex-row
                gap-6 md:gap-10
                items-center'>
                    <div className='relative w-full md:w-[280px] lg:w-[320px]
                    flex-shrink-0
                    rounded-2xl overflow-hidden
                    h-52 md:h-64
                    shadow-card'>
                        <Image fill src={activeService.immagine} alt={activeService.tipologia}
                        className='object-cover object-center transition-all duration-500'/>
{/*overlay decorativo sopra la foto */}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'/>
                    </div>


                    <div className='flex flex-col flex-1 gap-4'>
                        <p className='text-gray-600 leading-relaxed text-sm md:text-base'> 
                            {activeService.descrizione}</p>
                        <ul className='grid grid-cols-1 sm:grid-cols-2
                        gap-y-1.5 gap-x-4'>
                            {activeService.elenco.map(
                                (terapia: Terapia) =>(
                                    <li key={terapia.id}
                                    className='flex items-center gap-2
                                    text-sm text-gray-700'>
                                        <CheckIcon/> {terapia.nomeTerapia}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                        <div className='flex justify-center mt-8'>
                            <LinkButton href='/servizi' variant='primary' size='sm'>
                                Scopri tutti i servizi
                                <ArrowIcon/>
                            </LinkButton>
                        </div>


            </div>
        </section>
    )
}







//icone

function CheckIcon() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg'
        width='16' height='16' viewBox='0 0 24 24'
        fill='none' stroke='currentColor'
        strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
        className='text-brand flex-shrink-0' aria-hidden='true'>
        <path d='M20 6 9 17l-5-5' />
        </svg>
    )
}

function ArrowIcon() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg'
        width='16' height='16' viewBox='0 0 24 24'
        fill='none' stroke='currentColor'
        strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
        aria-hidden='true'>
        <path d='M5 12h14' />
        <path d='m12 5 7 7-7 7' />
        </svg>
    )
}