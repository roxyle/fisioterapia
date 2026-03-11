import { ourContact, trustItems } from "@/constants/data";
import { Badge } from "../ui/Badge";
import { LinkButton } from "../ui/Button";
import { TrustItem } from "@/constants/types";

export function Hero() {
    return (
        <section className="relative min-h-[92vh] md:min-h-[88vh]
        flex flex-col justify-center overflow-hidden">

            <video autoPlay muted loop playsInline 
            aria-hidden='true'
            className="absolute inset-0 w-full h-full object-cover">
                <source src="/fisio6.mp4" type="video/mp4"/>
            </video>


            <div className="absolute inset-0 bg-gradient-to-br from-sky-900/80 via-sky-800/70 to-brand/60"/>

            <div className="relative z-10 container-main py-16 md:py-24
            flex flex-col items-start gap-6">
                <Badge variant="light">
                    <span className="w-2 h-2 rounded-full
                    bg-sky-300 animate-pulse"/> Fisioterapia &bull; Riabilitazione &bull; Caserta
                </Badge>

                <h1 className="font-display text-display-xl text-white
                max-w-3xl leading-tight"> Farti tornare in forma
                    <span className="block text-sky-300"
                    // style={{ textShadow: '1px 1px 3px rgba(255,255,255,0.9)' }}
                    >
                        &egrave; la nostra missione
                    </span>
                </h1>

                <p className="max-w-xl leading-relaxed
                text-base md:text-lg text-white/80">
                    Terapie strumentali, manuali e ortopediche a Caserta. Trattamenti su misura, anche a domicilio.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
                    <LinkButton href={ourContact.telefonoHref}
                    variant="white" size="lg">
                        <PhoneIcon/> Chiama Ora!
                    </LinkButton>

                    <LinkButton href="/servizi"
                    variant="outline-white" size="lg">
                        Scopri i Servizi
                        <ArrowIcon/>
                    </LinkButton>
                </div>
            </div>

            <div className="relative z-10 w-full
            bg-white/10 backdrop-blur-sm border-t border-white/15">
                <div className="container-main py-4 md:py-5">
                    <div className="grid grid-cols-2 
                    gap-3 md:gap-6
                    md:grid-cols-4">
                        {trustItems.map(
                            (item: TrustItem)=>(
                                <div key={item.id} className="flex items-center gap-3">
                                    <span className="text-2xl flex-shrink-0" aria-label={item.label} role="img">
                                        {item.icon}
                                    </span>
                                    <div className="flex flex-col">
                                        <span className="text-white font-semibold text-xs md:text-sm leading-tight">
                                            {item.label}
                                        </span>
                                        <span className="text-white/60 text-xs leading-tight">
                                            {item.sub}
                                        </span>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
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