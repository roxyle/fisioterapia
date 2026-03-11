import { ourContact } from "@/constants/data"


export function MobileBottomBar() {
    return(
        <div className="fixed bottom-0 left-0 right-0 z-50 min-[840px]:hidden
        bg-white border-t border-gray-100
        px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))]">
            <div className="flex gap-3">

                <a href={ourContact.telefonoHref}
                className="flex flex-1 items-center justify-center gap-2
                bg-brand hover:bg-brand-dark active:bg-brand-darker
                text-white font-semibold text-sm
                py-3 rounded-xl transition-colors">
                    <PhoneIcon/>
                    Chiama Ora!
                </a>

                <a href="/contatti#form" className="flex flex-1 items-center justify-center gap-2
                bg-sky-50 hover:bg-sky-100 active:bg-sky-200
                text-brand-darker font-semibold text-sm
                py-3 rounded-xl border border-sky-200 transition-colors">
                    <MailIcon/>
                    Invia Richiesta
                </a>
            </div>
        </div>
    )
}


//icone

function PhoneIcon() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg'
        width='16' height='16' viewBox='0 0 24 24'
        fill='none' stroke='currentColor'
        strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
        aria-hidden='true'>
        <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z' />
        </svg>
    )
}

function MailIcon() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg'
        width='16' height='16' viewBox='0 0 24 24'
        fill='none' stroke='currentColor'
        strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
        aria-hidden='true'>
        <rect width='20' height='16' x='2' y='4' rx='2' />
        <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
        </svg>
    )
}