'use client'
import Link from 'next/link'
import {useState} from 'react'
import {navItems, ourContact} from '@/constants/data'
import { NavItem } from '@/constants/types'
import Image from 'next/image'


export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <>

            <header className='sticky top-0 z-50
            bg-brand backdrop-blur-sm
            border-b border-brand-dark'>
                <div className='container-main 
                flex items-center justify-between 
                h-16 md:h-[68px]'>


                    {/* Logo */}
                    <Link href='/' className='flex items-center gap-3 flex-shrink-0'>
                    <div className='bg-brand rounded-lg p-1 flex-shrink-0'>
                        <Image
                        src='/favicon.ico'
                        alt='Fisioterapia Bruno logo'
                        width={120}
                        height={40}
                        className='h-8 md:h-9 w-auto'
                        priority
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-sans font-bold text-white text-sm md:text-[15px] leading-tight'>
                        Fisioterapia Bruno
                        </span>
                        <span className='hidden md:block text-[10px] text-white/70 
                        font-medium tracking-widest uppercase'>
                        Studio specializzato &bull; Caserta
                        </span>
                    </div>
                    </Link>

                    {/* Nav desktop */}
                    <nav className='hidden md:flex items-center'>
                        {navItems.map(
                            (item: NavItem) => (
                                <Link href={item.href}
                                key={item.href}
                                className='px-4 py-2
                                rounded-lg
                                text-sm font-medium text-white/80
                                hover:text-white hover:bg-brand-dark transition-colors'>
                                    {item.label}
                                </Link>
                            )
                        )}
                    </nav>


                    {/* CTA telefono desktop */}
                    <a href={ourContact.telefonoHref}
                    className='hidden 
                    min-[840px]:inline-flex items-center gap-2
                    bg-brand text-white 
                    hover:bg-sky-50 hover:text-sky-700
                    px-5 py-2.5
                    rounded-xl transition-colors shadow-sky'>
                        <PhoneIcon/>
                        {ourContact.telephone}
                    </a>

                    <div className='flex min-[840px]:hidden items-center gap-2'>
                        <a href={ourContact.telefonoHref}
                        aria-label='Chiama ora'
                        className='w-10 h-10
                        rounded-xl bg-brand text-white
                        flex items-center justify-center'>
                            <PhoneIcon/>
                        </a>
                        <button onClick={()=> setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen? "Chiudi menu": "Apri menu"}
                        aria-expanded={isMenuOpen}
                        className='w-10 h-10 rounded-xl
                        flex flex-col items-center justify-center
                        gap-[5px] hover:bg-gray-100 transition-colors'>

                            <span className={`block w-5 h-0.5
                            bg-gray-700 transition-all duration-300
                            ${isMenuOpen? 'translate-y-[7px] rotate-45' : ''} `}/>

                            <span className={`block w-5 h-0.5 
                            bg-gray-700 transition-all duration-300
                            ${isMenuOpen? 'opacity-0' : ''}`}/>

                            <span className={`block w-5 h-0.5
                            bg-gray-700 transition-all duration-300
                            ${isMenuOpen? '-translate-y-[7px] -rotate-45' : ''}`}/>
                        </button>
                    </div>
                </div>
            </header>


            {/* Menu MOBILE (overlay) */}

            {
                isMenuOpen && (
                    <div className='md:hidden fixed inset-0 z-40 bg-black/40'
                    onClick={()=> setIsMenuOpen(false)}/>
                )
            }

            {/* Menu MOBILE (drawer) */}

            <nav className={`md:hidden fixed top-16 left-0 right-0 z-40 
            bg-white border-b border-gray-100 shadow-card-lg transition-all duration-300
            ${isMenuOpen? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
                <div className='container-main py-4 flex flex-col gap-1'>
                    {navItems.map(
                        (item: NavItem) => (
                            <Link href={item.href} key={item.href}
                            onClick={()=> setIsMenuOpen(false)}
                            className='px-4 py-3 rounded-xl
                            text-base font-medium text-gray-700
                            hover:text-brand hover:bg-sky-50 transition-colors'>
                                {item.label}
                            </Link>
                        )
                    )}

                    <a href={ourContact.telefonoHref}
                    className='mt-2
                    flex items-center justify-center gap-2
                    bg-brand py-3 rounded-xl
                    text-white font-semibold'>
                        <PhoneIcon/>
                        Chiama ora &bull; {ourContact.telephone}
                    </a>
                </div>
            </nav>



        
        </>
    )
}

function PhoneIcon () {
    return(
        <svg xmlns="http://www.w3.org/2000/svg"
        width='16'
        height='16'
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
    )
}
