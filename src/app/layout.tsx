import type { Metadata } from "next";
import {Inter, Playfair_Display} from 'next/font/google'
import './globals.css'

const inter= Inter(
    {
        subsets: ['latin'],
        variable:'--font-inter',
        display:'swap'
    }
)

const playfair= Playfair_Display(
    {
        subsets: ['latin'],
        variable: '--font-playfair',
        style: ['normal', 'italic'],
        weight: ['700'],
        display: 'swap'
    }
)

export const metadata: Metadata= {
    title:{
        default: "Fisioterapia Bruno (Caserta)",
        template: '%s Fisioterapia Bruno'
    },
    description: 'Fisioterapia, riabilitazione sportiva e terapie ortopediche a Caserta. Staff specializzato, trattamenti su misura, anche a domicilio.',
    keywords: [
        'fisioterapia Caserta',
        'fisioterapista Caserta',
        'riabilitazione Caserta',
        'riabilitazione sportiva',
        'tecar terapia Caserta',
        'terapie manuali Caserta',
        'ortopedico Caserta',
        'posturale Caserta',
        'tecarterapia Caserta',
        'trattamenti su misura Caserta',
        'trattamenti personalizzati Caserta',
        'equipe fisioterapia ortopedia Caserta',
        'terapia domicilio Caserta',
        'fisioterapia domicilio Caserta',
        'ortopedico domicilio Caserta'
    ],
    openGraph: {
        title:'Fisioterapia Bruno (Caserta)',
        description: 'Studio di Fisioterapia Bruno. Trattamenti su misura con staff altamente qualificato.',
        locale:'it_IT',
        type: 'website'
    }
}

export default function RootLayout(
    {
        children
    } : {
        children: React.ReactNode
    }
) {
    return (
        <html lang="it" className={`${inter.variable} ${playfair.variable}`}>

            <body className="font-sans antialiased">
                {children}
            </body>

        </html>
    )
}