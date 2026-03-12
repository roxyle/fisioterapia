'use client'

import {ElencoTerapie, Terapia} from "@/constants/types"
import {cn} from "@/lib/utils"
import Image from "next/image"
import {useState} from "react"
import {LinkButton} from "../ui/Button"
import {SectionHeader} from "../ui/SectionHeader"
import {descServizi, paragrafiSeo, serviziOfferti} from "@/constants/data"


//icone

function IconaStrumentale() {
    return (
        <svg width='22' height='22' viewBox='0 0 24 24' fill='none'
        stroke='currentColor' strokeWidth='2' strokeLinecap='round'
        strokeLinejoin='round' aria-hidden='true'>
            <path d='M13 10V3L4 14h7v7l9-11h-7z' />
        </svg>
    )
}

function IconaManuale() {
    return (
        <svg width='22' height='22' viewBox='0 0 24 24' fill='none'
        stroke='currentColor' strokeWidth='2' strokeLinecap='round'
        strokeLinejoin='round' aria-hidden='true'>
            <path d='M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0' />
            <path d='M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2' />
            <path d='M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8' />
            <path d='M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15' />
        </svg>
    )
}

function IconaOrtopedica() {
    return (
        <svg width='22' height='22' viewBox='0 0 24 24' fill='none'
        stroke='currentColor' strokeWidth='2' strokeLinecap='round'
        strokeLinejoin='round' aria-hidden='true'>
            <path d='M9 12h6' />
            <path d='M12 9v6' />
            <circle cx='12' cy='12' r='10' />
        </svg>
    )
}

function ChevronIcon() {
    return (
        <svg width='14' height='14' viewBox='0 0 24 24' fill='none'
        stroke='currentColor' strokeWidth='2.5' strokeLinecap='round'
        strokeLinejoin='round' aria-hidden='true'>
            <path d='m6 9 6 6 6-6' />
        </svg>
    )
}

const icone: Record<string, React.ReactNode> = {
    ts: <IconaStrumentale />,
    tm: <IconaManuale />,
    tmo: <IconaOrtopedica />,
}







function CategoriaAccordion({categoria, defaultOpen}:{categoria:ElencoTerapie, defaultOpen: boolean}) {
    const [open, setOpen]=useState(defaultOpen)
    const [terapiaAttiva,setTerapiaAttiva]= useState<Terapia>(categoria.elenco[0])


    return(
        <div className={
            cn('border rounded-2xl overflow-hidden bg-white transition-shadow duration-200', 
                open? 'border-sky-200 shadow-sky-glow' : 'border-gray-200 shadow-sm'
            )
        }>
            <button onClick={()=>setOpen(precedente=>!precedente)} aria-expanded={open}
                className="w-full flex items-center justify-between gap-4
                px-6 py-5 text-left
                hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-sky-50 rounded-xl text-brand
                    flex items-center justify-center flex-shrink-0">
                        {icone[categoria.id]}
                    </div>
                    <div>
                        <p>
                            {categoria.tipologia}
                        </p>

                    </div>
                </div>

                <div className={
                    cn('w-7 h-7 flex items-center justify-center flex-shrink-0 rounded-full', 
                        'transition-all duration-25',
                        open? 'bg-sky-100 text-brand rotate-180' : 'bg-gray-100 text-gray-500'
                    )
                }>
                    <ChevronIcon/>
                </div>
            </button>


            {
                open&&(
                    <div className="border-t border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">

                            <div className="p-4 md:border-r border-gray-100">
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                                    <Image fill src={categoria.immagine} alt={categoria.tipologia}
                                    sizes='(max-width:768px) 100vw,200px'
                                    className="object-cover object-center transition-opacity duration-300"/>
                                </div>
                            </div>


                            <div className="flex flex-col justify-between p-5 gap-3">
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-bold text-sky-950">
                                        {terapiaAttiva.nomeTerapia}
                                    </p>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {terapiaAttiva.descrizione??categoria.descrizione}
                                    </p>
                                </div>

                                <LinkButton href="/contatti#form" variant="primary" size="sm" className="self-start">
                                    Prenota una visita
                                </LinkButton>
                            </div>

                        </div>


                        <div className="border-t border-gray-100 px-6 py-5">
                            <p className="uppercase text-[10px] font-bold tracking-widest text-gray-400 mb-3">
                                Seleziona un trattamento
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {categoria.elenco.map(
                                    terapia => (
                                        <button key={terapia.id} onClick={()=> setTerapiaAttiva(terapia)}
                                        className={
                                            cn('rounded-full text-xs font-semibold px-3.5 py-1.5',
                                                'border transition-all duration-150',
                                                terapiaAttiva.id===terapia.id?
                                                'bg-brand border-brand text-white' :
                                                'bg-sky-50 border-sky-200 text-sky-700 hover:bg-sky-100'
                                            )
                                        }>
                                            {terapia.nomeTerapia}
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                )
            }
            



        </div>
    )
}


function DescServiziSection() {
    return (
        <section className="section-padding bg-white">
            <div className="container-main">
                <div className="max-w-2xl mb-10">
                    <SectionHeader
                        label="Approfondimenti"
                        title="Tutto quello che facciamo per te"
                    />
                </div>
                <div className="flex flex-col gap-16">
                    {
                        descServizi.map(
                            (item, index) => (
                                <div key={item.id}
                                className={
                                    cn(
                                        'grid grid-cols-1 md:grid-cols-2 gap-8 items-center',
                                        index % 2 === 1 && 'md:[&>*:first-child]:order-2'
                                    )
                                }>
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                                    <Image
                                        fill
                                        src={item.immagine}
                                        alt={item.titolo}
                                        sizes="(max-width:768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-display text-xl font-bold text-gray-900">
                                        {item.titolo}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {item.testo}
                                    </p>
                                    <LinkButton href="/contatti#form" variant="primary" size="sm"
                                        className="self-start">
                                        Prenota una visita
                                    </LinkButton>
                                </div>
                            </div>
                            )
                        )
                    }
                </div>
            </div>
        </section>
    )
}


function ParagrafoSeo() {
    const paragrafo = paragrafiSeo.find(parag => parag.id === '/Servizi')
    if (!paragrafo) return null
    return (
        <section className="section-padding bg-gray-50">
            <div className="container-main max-w-3xl">
                <h2 className="font-display text-xl font-bold text-gray-900 mb-4">
                    {paragrafo.titolo}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                    {paragrafo.testo}
                </p>
            </div>
        </section>
    )
}






export function ServiziPage(){
    return(
        <main>
            <section className="section-padding bg-gray-50">
                <div className="container-main">
                    <div className="max-w-2xl mb-10">
                        <SectionHeader label="I nostri servizi" title="Terapie su misura per ogni paziente" sub="Seleziona una categoria e scopri i trattamenti disponibili presso il nostro studio a Caserta"/>
                    </div>

                    <div className="flex flex-col gap-3">
                        {
                            serviziOfferti.map(
                                (categoria,index)=> (
                                <CategoriaAccordion key={categoria.id} categoria={categoria} defaultOpen={index===0}/>
                                )
                            )
                        }
                    </div>
                </div>
            </section>
            <DescServiziSection />
            <ParagrafoSeo />
        </main>
    )
}



