import {partnership} from '@/constants/data'
import {SectionHeader} from '@/components/ui/SectionHeader'

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

function SportIcon({ sport }: { sport: string }) {
    if (sport.toLowerCase().includes('calcio')) return <SoccerIcon />
    if (sport.toLowerCase().includes('pallavolo')) return <VolleyballIcon />
    return <BasketballIcon />
}

export function Partnership() {
    return (
        <section className='py-8 bg-gray-50 border-y border-gray-200'>
            <div className='container-main'>
                <div className='flex flex-col flex-wrap items-center gap-3'>
                    <p className='text-xs font-bold tracking-widest uppercase
                    text-gray-400 mr-2'>
                        Partnership e Collaborazioni sportive
                    </p>
                    <div className='flex gap-3'>
                        {
                            partnership.map(
                                p => (
                                    <div key={p.id}
                                        className='flex items-center gap-2
                                        bg-white border border-gray-200 rounded-full
                                        px-4 py-2'>
                                        <SportIcon sport={p.sport} />
                                        <span className='text-sm text-gray-700'>
                                            {p.nome}
                                        </span>
                                        <span className='text-xs text-gray-400'>
                                            &bull; {p.sport}
                                        </span>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}


