import { ourStaff } from "@/constants/data"
import { SectionHeader } from "../ui/SectionHeader"
import { StaffMember } from "@/constants/types"
import Image from "next/image"

export function Team(){
    return(
        <section className="section-padding bg-gray-50">
            <div className="container-main">
                <SectionHeader center label="Chi Siamo" title="Il nostro team" 
                sub="Fisioterapisti qualificati e un Chirurgo Ortopedico al tuo servizio"/>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">

                    {
                        ourStaff.map(
                            (member:StaffMember)=>(
                                <div key={member.id} className="flex flex-col items-center gap-3
                                w-[45%] sm:w-[30%] lg:w-[22%]">
                                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-card">
                                        <Image src={member.foto} alt={member.nome} fill className="object-cover object-top" />

                                        {member.instagram && (
                                            <a href={member.instagram} target="_blank"
                                            className="absolute bottom-2 right-2 w-8 h-8 rounded-full
                                            flex items-center justify-center
                                            hover:scale-110 transition-transform duration-200
                                            bg-white shadow-card"
                                            rel="noopener noreferrer" aria-label={`Instagram di ${member.nome}`}>
                                                <InstagramIcon/>
                                            </a>
                                        )}
                                    </div>

                                    <div className="text-center">
                                        <p className="font-semibold text-gray-900 text-sm leadingh-tight">{member.nome}</p>
                                        <p className="text-xs text-brand font-medium mt-0.5">{member.ruolo}</p>
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




//icons
function InstagramIcon(){
    return (
        <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16' height='16'
        viewBox='0 0 24 24'
        fill='none'
        stroke='url(#ig-gradient)'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'>
            <defs>
                <linearGradient id='ig-gradient' x1='0%' y1='100%' x2='100%' y2='0%'>
                    <stop offset='0%' stopColor='#f09433' />
                    <stop offset='25%' stopColor='#e6683c' />
                    <stop offset='50%' stopColor='#dc2743' />
                    <stop offset='75%' stopColor='#cc2366' />
                    <stop offset='100%' stopColor='#bc1888' />
                </linearGradient>
            </defs>
            <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
            <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
            <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
        </svg>
    )
}