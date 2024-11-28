'use client'

import React from 'react'
import BtnMenu from './Buttons/BtnMenu';
import BtnLogo from './Buttons/BtnLogo';
import BtnTel from './Buttons/BtnTel';

const Navbar = () => {
    return (
        
        <nav className='flex flex-row flex-wrap justify-center items-center 
                        px-10 bg-sky-500 sticky top-0 z-[100]
                        overflow-auto'>
                    
                        <BtnLogo/>
                        <BtnMenu/>
                        <BtnTel/>       
        </nav>

    )
}

export default Navbar