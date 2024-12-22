import React, { useState } from 'react';
import Image from "next/image";
import { ourContact } from '@/constants/data';

const BtnTel = () => {
    const [isClicked, setIsClicked] = useState(false);
    const BtnTxtContent = isClicked ? ourContact.telephone : `Chiamaci!`;
    const [isWhite, setIsWhite] = useState(true);
    const Icona = isWhite ? '/phone.png' : '/phone2.png';

    const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null); // Per la pressione prolungata
    const [clickCount, setClickCount] = useState(0); // Per contare le pressioni
    const [lastClickTime, setLastClickTime] = useState<number | null>(null); // Per tracciare l'ultima pressione

    // Alterna l'icona ogni 500ms
    setTimeout(() => {
        setIsWhite(!isWhite);
    }, 500);

    // Gestisce la pressione prolungata
    const handlePressStart = () => {
        const timer = setTimeout(() => {
            // Avvia la telefonata dopo 2 secondi di pressione
            window.location.href = `tel:${ourContact.telephone}`;
        }, 2000); // 2 secondi di pressione prolungata
        setPressTimer(timer);
    };

    const handlePressEnd = () => {
        if (pressTimer) {
            clearTimeout(pressTimer);
            setPressTimer(null);
        }
    };

    // Gestisce le pressioni consecutive
    const handleClick = () => {
        const now = Date.now();
        if (lastClickTime && now - lastClickTime < 1000) {
            // Seconda pressione entro 1 secondo
            if (clickCount + 1 >= 2) {
                window.location.href = `tel:${ourContact.telephone}`; // Avvia la telefonata
                setClickCount(0);
                setLastClickTime(null);
            } else {
                setClickCount(clickCount + 1);
                setLastClickTime(now);
            }
        } else {
            // Primo click o click troppo distanti
            setClickCount(1);
            setLastClickTime(now);
            setIsClicked(!isClicked)
        }
    };

    return (
        <div className='flex flex-row items-center text-white p-5'>
            <button
                onClick={handleClick} // Per gestire le pressioni consecutive
                onTouchStart={handlePressStart} // Per la pressione prolungata (mobile)
                onTouchEnd={handlePressEnd} // Rilascia pressione (mobile)
                className='flex flex-row items-center justify-center
                    outline outline-white rounded-sm
                    py-2 px-2 w-64
                    hover:bg-white hover:text-sky-500'
            >
                <Image
                    src={`${Icona}`}
                    alt='home'
                    className='sm:flex mr-2'
                    width={30}
                    height={30}
                />
                <span id='textButton' className='text-lg'>
                    {BtnTxtContent}
                </span>
            </button>
        </div>
    );
};

export default BtnTel;
