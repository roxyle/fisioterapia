'use client'
import {partnership} from '@/constants/data'
import {SectionHeader} from '@/components/ui/SectionHeader'
import { PartnershipItem } from '@/constants/types'
import { useEffect, useRef } from 'react'

function BasketballIcon() {
    return (
        <svg width='16' height='16' viewBox='0 0 24 24' fill='none'
        stroke='currentColor' strokeWidth='2' strokeLinecap='round'
        strokeLinejoin='round' className='text-brand' aria-hidden='true'>
            <circle cx='12' cy='12' r='10' />
            <path d='M4.93 4.93c4.08 4.08 6.07 9.6 5.07 15.07' />
            <path d='M19.07 4.93c-4.08 4.08-6.07 9.6-5.07 15.07' />
            <path d='M2 12h20' />
        </svg>
    )
}

function SoccerIcon() {
    return (
        <svg width='16' height='16' viewBox='0 0 24 24' fill='none'
        stroke='currentColor' strokeWidth='2' strokeLinecap='round'
        strokeLinejoin='round' className='text-brand' aria-hidden='true'>
            <circle cx='12' cy='12' r='10' />
            <path d='m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z' />
        </svg>
    )
}

function VolleyballIcon() {
    return (
        <svg width='16' height='16' viewBox='0 0 24 24' fill='none'
        stroke='currentColor' strokeWidth='2' strokeLinecap='round'
        strokeLinejoin='round' className='text-brand' aria-hidden='true'>
            <circle cx='12' cy='12' r='10' />
            <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10' />
            <path d='M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10' />
            <path d='M2 12h20' />
        </svg>
    )
}

function SportIcon({sport}: {sport: string}) {
    if (sport.toLowerCase().includes('calcio')) return <SoccerIcon />
    if (sport.toLowerCase().includes('pallavolo')) return <VolleyballIcon />
    return <BasketballIcon />
}

function PartnerCard({p}: {p: PartnershipItem}){
    return(
        <span className='flex items-center gap-2 px-6'>
            <SportIcon sport={p.sport}/>
            <span className='text-sm font-medium text-gray-700 whitespace-nowrap'>
                {p.nome}
            </span>
            <span className='text-gray-300 ml-4'>|</span>
        </span>
    )
}

export function Partnership() {
    const trackRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const track = trackRef.current
        if (!track) return
        const singleWidth = track.scrollWidth / 8
        track.style.setProperty('--marquee-width', `-${singleWidth}px`)
    }, [])


    const items= Array(8).fill(partnership).flat()
    return (
        <section className='py-6 bg-gray-50 border-y border-gray-200 overflow-hidden'>
            <p className='text-xs font-bold tracking-widest uppercase text-gray-400 text-center mb-4'>
                Partnership e Collaborazioni sportive
            </p>
            <div className='relative'>
                <div ref={trackRef} className='flex animate-marquee'>
                    {
                        items.map(
                            (partnership, index) => (
                                <PartnerCard key={index} p={partnership}/>
                            )
                        )
                    }
                </div>
            </div>
        </section>
    )
}


