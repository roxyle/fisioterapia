import type {Metadata} from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { MobileBottomBar } from "@/components/layout/MobileBottomBar"


const inter = Inter(
    {
        subsets:['latin'],
        variable:"--font-inter",
        display:"swap"

    }
)


const playfair= Playfair_Display(
    {
        subsets: ['latin'],
        variable:"--font-playfair",
        style:["normal", "italic"],
        weight: ['700'],
        display:"swap"
    }
)


export const metadata: Metadata = {
    title: {
        default: "Fisioterapia Bruno - Caserta",
        template: "%s | Fisioterapia Bruno"
    },
    description: "Fisioterapia, riabilitazione sportiva e terapie ortopediche a Caserta. Staff specializzato, trattamenti su misura, anche a domicilio.",
    keywords: [
        "fisioterapia Caserta",
        "fisioterapista Caserta",
        "riabilitazione Caserta",
        "riabilitazione sportiva",
        "tecar Caserta",
        "tecar terapia Caserta",
        "terapie a domicilio Caserta",
        "terapie manuali Caserta",
        "ortopedico Caserta",
        "posturale Caserta",
        "trattamenti su misura Caserta",
        "trattamenti personalizzati Caserta",
        "fisioterapia domicilio Caserta"
    ],
    openGraph: {
        title: "Fisioterapia Bruno - Caserta",
        description: "Fisioterapia, riabilitazione sportiva e terapie ortopediche a Caserta. Staff specializzato, trattamenti su misura, anche a domicilio.",
        locale: "it_IT",
        type: "website"
    }
}



export default function RootLayout (
    {
        children
    }: {
        children: React.ReactNode
    }
) {
    return (
        <html lang="it" className={`
        ${inter.variable} ${playfair.variable}`}
        >

            <body className="font-sans antialiased">

                <Navbar/>

                <main className="min-h-screen">
                    {children}
                </main>

                <Footer/>
                <MobileBottomBar/>

            </body>

        </html>
    )
}
