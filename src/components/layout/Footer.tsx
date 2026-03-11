import {ourContact, navItems} from '@/constants/data'
import {NavItem} from '@/constants/types'
import Link from 'next/link'
import Image from 'next/image'


export function Footer () {
    return(
        <footer className='bg-gray-950 text-white'>
            <div className='container-main py-12 md:py-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16'>

                    {/*Colonna 1 */}
                    <div>
                        <Link href={'/'} className='flex items-center gap-3 mb-4'>
                            <Image
                                src='/favicon.ico'
                                alt='Fisioterapia Bruno logo'
                                width={120}
                                height={40}
                                className='h-8 md:h-9 w-auto'
                                priority
                            />
                            <span className='font-bold text-white text-[15px]'>
                                {ourContact.company}
                            </span>
                        </Link>

                        <p className='text-sm text-gray-400 leading-relaxed'>
                            Studio di Fisioterapia e Riabilitazione a Caserta. Trattamenti su misura per ogni paziente.
                        </p>
                    </div>

                    {/*Colonna2 */}
                    <div>
                        <h3 className='text-xs font-bold font-sans tracking-widest uppercase text-gray-300 mb-4'>
                            Navigazione
                        </h3>

                        <ul className='flex flex-col gap-2'>
                            {navItems.map(
                                (item: NavItem)=> (
                                    <li key={item.href}>
                                        <Link href={item.href} className='text-sm text-gray-400 hover:text-brand transition-colors'>
                                        {item.label}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>



                    {/*Colonna3 */}
                    <div>
                        <h3 className='text-xs font-sans font-bold tracking-widest uppercase text-gray-300 mb-4'>
                            Contatti
                        </h3>

                        <ul className='flex flex-col gap-3'>
                            <li className='flex items-start gap-2 text-sm text-gray-400'>
                                <MapPinIcon/>
                                <span>
                                    {ourContact.address}
                                </span>
                            </li>
                            <li className='flex items-center gap-2 text-sm text-gray-400'>
                                <PhoneIcon/>
                                <a href={ourContact.telefonoHref}
                                className='hover:text-brand transition-colors'>
                                    {ourContact.telephone}
                                </a>
                            </li>
                            <li className='flex items-center gap-2 text-sm text-gray-400'>
                                <MailIcon/>
                                <a href={`mailto:${ourContact.email}`}
                                className='hover:text-brand transition-colors'>
                                    {ourContact.email}
                                </a>
                            </li>
                        </ul>


                        <div className='mt-5 flex items-center gap-3
                        bg-brand/10 border border-brand/20
                        px-3 py-2 rounded-xl'>
                            <ClockIcon/>
                            <div className=''>
                                <div className='flex flex-col gap-0.5'>
                                    {
                                        ourContact.orari.map(
                                            o => (
                                                <p key={o.giorni}
                                                    className={`text-xs font-semibold ${o.chiuso ? 'text-red-400' : 'text-sky-400'}`}>
                                                    {o.giorni}&nbsp;{o.chiuso ? 'Chiusi' : o.ore}
                                                </p>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            <div className='border-t border-white/5'>
                <div className='container-main py-5 flex flex-col md:flex-row items-center justify-between gap-3'>
                    <p className='text-xs text-gray-600'>
                        P.I. {ourContact.partitaIva} &copy; {new Date().getFullYear()} {ourContact.company}
                    </p>
                    <p className='text-xs text-gray-600'>
                        {ourContact.address}
                    </p>
                </div>
            </div>
        </footer>
    )
}


//Icone

function PhoneIcon() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg'
        width='14' height='14' viewBox='0 0 24 24'
        fill='none' stroke='currentColor'
        strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
        className='flex-shrink-0 mt-0.5' aria-hidden='true'>
        <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z' />
        </svg>
    )
}

function MailIcon() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg'
        width='14' height='14' viewBox='0 0 24 24'
        fill='none' stroke='currentColor'
        strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
        className='flex-shrink-0' aria-hidden='true'>
        <rect width='20' height='16' x='2' y='4' rx='2' />
        <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
        </svg>
    )
}

function MapPinIcon() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg'
        width='14' height='14' viewBox='0 0 24 24'
        fill='none' stroke='currentColor'
        strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
        className='flex-shrink-0 mt-0.5' aria-hidden='true'>
        <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
        <circle cx='12' cy='10' r='3' />
        </svg>
    )
}

function ClockIcon() {
    return(
        <svg xmlns='http://www.w3.org/2000/svg'
            width='12' height='12' viewBox='0 0 24 24'
            fill='none' stroke='currentColor'
            strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
            className='text-sky-400' aria-hidden='true'>
            <circle cx='12' cy='12' r='10' />
            <polyline points='12 6 12 12 16 14' />
        </svg>
    )

}