import Image from 'next/image'
import {ourStaff, paragrafiSeo} from '@/constants/data'
import {SectionHeader} from '@/components/ui/SectionHeader'
import {LinkButton} from '@/components/ui/Button'
import {SliderEsperienze} from './SliderEsperienze'
import {Partnership} from '@/components/sections/Partnership'



function Intro() {
    const paragrafo = paragrafiSeo.find(paragrafo => paragrafo.id === '/chi-siamo')

    return (
        <section className='section-padding bg-white'>
            <div className='container-main'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
                    <div className='flex flex-col gap-6'>
                        <SectionHeader label='Chi siamo' sub={paragrafo?.testo}
                            title={paragrafo?.titolo??'Il nostro studio'}/>
                        <LinkButton href='/contatti#form' variant='primary' size='md' className='self-start'>
                            Prenota una visita
                        </LinkButton>
                    </div>
                    <div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-card'>
                        <Image fill src='/Fisiok2.jpg' alt='Studio Fisioterapia Bruno Caserta' sizes='(max-width:1024px)100vw, 50vw'
                            className='object-cover object-center'/>
                    </div>
                </div>
            </div>
        </section>
    )
}





function Team() {
    return (
        <section className='section-padding bg-gray-50'>
            <div className='container-main'>
                <div className='max-w-2xl mb-10'>
                    <SectionHeader label='Il nostro team' title='Professionisti al tuo fianco' sub='Fisioterapisti laureati e un medico chirurgo ortopedico, per un approccio multidisciplinare a ogni paziente.'/>
                </div>

                <div className='flex flex-wrap justify-center gap-6'>
                    {
                        ourStaff.map(
                            membro => (
                                <div key={membro.id} className='w-[45%] sm:w-[30%] lg:w-[22%] flex flex-col gap-3'>
                                    <div className='relative aspect-square rounded-2xl overflow-hidden shadow-card'>
                                        <Image fill src={membro.foto} alt={membro.nome}                                    
                                            className='object-cover object-top'
                                            sizes='(max-width:640px)45vw,
                                            (max-width: 1024px)30vw,
                                            22vw'/>

                                        {
                                            membro.instagram && (
                                                <a href={membro.instagram} target='_blank' aria-label={`Instagram di ${membro.nome}`}
                                                rel='noopener noreferrer' className='absolute flex items-center justify-center
                                                bottom-2 right-2 w-8 h-8 rounded-full bg-white shadow-card 
                                                hover:scale-110 transition-transform duration-200'>
                                                    <InstagramIcon />
                                                </a>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <p className='text-sm font-semibold text-gray-900'>{membro.nome}</p>
                                        <p className='text-xs text-brand font-medium'>{membro.ruolo}</p>
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
    const paragrafo = paragrafiSeo.find(p => p.id === '/About')
    if (!paragrafo) return null
    return (
        <section className='section-padding bg-white'>
            <div className='container-main max-w-3xl'>
                <h2 className='font-display text-xl font-bold text-gray-900 mb-4'>
                    {paragrafo.titolo}
                </h2>
                <p className='text-sm text-gray-500 leading-relaxed'>
                    {paragrafo.testo}
                </p>
            </div>
        </section>
    )
}



export function ChiSiamoPage() {
    return (
        <div>
            <Intro/>
            <Team/>
            <Partnership/>
            <SliderEsperienze/>
            <ParagrafoSeo/>
        </div>
    )
}

//icone

function InstagramIcon() {
    return (
        <svg width='16' height='16' viewBox='0 0 24 24' aria-hidden='true'>
            <defs>
                <linearGradient id='ig' x1='0%' y1='100%' x2='100%' y2='0%'>
                    <stop offset='0%' stopColor='#f09433'/>
                    <stop offset='25%' stopColor='#e6683c'/>
                    <stop offset='50%' stopColor='#dc2743'/>
                    <stop offset='75%' stopColor='#cc2366'/>
                    <stop offset='100%' stopColor='#bc1888'/>
                </linearGradient>
            </defs>
            <rect x='2' y='2' width='20' height='20' rx='5' ry='5'
                fill='url(#ig)'/>
            <circle cx='12' cy='12' r='4' fill='none' stroke='white' strokeWidth='1.5'/>
            <circle cx='17.5' cy='6.5' r='1' fill='white'/>
        </svg>
    )
}