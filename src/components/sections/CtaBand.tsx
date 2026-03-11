import { ourContact } from "@/constants/data"
import { LinkButton } from "../ui/Button"

export function CtaBand(){
    return(
        <section className="bg-brand-darker py-14 md:py-20">
            <div className="container-main flex flex-col items-center text-center gap-6">
                <div className="flex flex-col gap-3 max-w-2xl">
                    <p className="section-label text-sky-300">Prenota una visita</p>
                    <h2 className="font-display text-display-md text-white">Hai dolori o difficoltà di movimento?</h2>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">Il nostro team è pronto ad ascoltarti e a trovare insieme a te il trattamento più adatto alle tue esigenze. Contattaci oggi stesso!</p>
                </div>

            <div className="flex flex-col sm:flex-row gap-3">
                <LinkButton href={ourContact.telefonoHref}
                variant="white" size="lg">
                    <PhoneIcon/> Chiama Ora
                </LinkButton>

                <LinkButton href="/contatti#form" variant="outline-white" size="lg">
                    Invia una richiesta <ArrowIcon/>
                </LinkButton>
            </div>

            <p className="text-white/40 text-xs">
                Lun - Sab &nbsp;&bull;&nbsp; 8:30 - 20:00
                &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
                {ourContact.address}
            </p>
        </div>
        
        </section>
    )

}





//icons
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